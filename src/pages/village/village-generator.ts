import { nanoid } from 'nanoid'
import { range, sortByProperty } from '../../functions/array.functions'
import {
  choose,
  getRandomInt,
  rollD6,
  rollD66,
  WeightedChoice,
  weightedRandom,
} from '../../functions/dice.functions'
import { D6, D66 } from '../../models/fbl-dice.model'
import { Mapping } from '../../utils/types'
import { Character } from './character'
import { createRandomInn, Inn } from './inn-generator'
import { createRandomVillageName, LanguageStringMap } from './village-name'
import { TranslationKey } from '../../store/translations/translation.model'
import { translationDict } from '../../functions/translation-dict'
import { LanguageNameMap } from '../npc/name2'

export interface Village {
  name: LanguageStringMap
  size: VillageSize
  inhabitants: number
  age: number
  builtWhen: Ages
  leader?: Leader
  problem: VillageProblem
  fame: VillageFame
  oddity: VillageOddity
  institutions: VillageInstitution[]
  inns: Inn[]
}

// LISTA DE NOMBRES MANUAL
const humanNames = [
  'Fulco', 'Aenor', 'Erminlinda', 'Avila', 'Gerulf', 'Adelina', 'Gorm',
  'Hrod', 'Stig', 'Vigdis', 'Ylva', 'Aslög', 'Bjorn', 'Borg', 'Dag',
  'Egil', 'Estrid', 'Frida', 'Geir', 'Grim', 'Gunnar', 'Helga', 'Inga',
  'Ingvar', 'Jorunn', 'Kari', 'Ketil', 'Leif', 'Liv', 'Nanna', 'Olaf',
  'Ragnfrid', 'Runa', 'Sigrid', 'Sten', 'Thor', 'Tora', 'Ulf', 'Vidar',
  'Yngve', 'Ailmar', 'Berangar', 'Clothilde', 'Edgar', 'Edith', 'Godfrey',
  'Gisela', 'Hadrian', 'Hildegard', 'Luther', 'Matilda', 'Osric', 'Rowena',
  'Theobald', 'Wilfred', 'Wynne', 'Kyler', 'Meren', 'Vana'
]

// FUNCIÓN "A PRUEBA DE BALAS"
// Usamos 'as any' para obligar al sistema a aceptar claves 'en' y 'sv'
// aunque el archivo de tipos diga que no existen. Esto arregla el visual.
const createRandomCharacterName = (): LanguageNameMap => {
  const name = choose(humanNames)
  return {
    es: [name],
    en: [name], // Relleno de seguridad para el visualizador
    sv: [name], // Relleno de seguridad para el visualizador
  } as any 
}

export const createRandomVillage = (): Village => {
  const roll = rollD6()
  const { size, inhabitantMinMax } = d6ToSizeOfVillage[roll]

  const inhabitants = getRandomInt(inhabitantMinMax[0], inhabitantMinMax[1])

  const ageRoll = rollD66()
  const { age, builtWhen } = d66ToAgeOfVillage(ageRoll)

  const institutions = createVillageInstitutions(size)

  const inns = institutions
    .filter((i) => i.type === 'inn')
    .map((i) => createRandomInn(i))
  const sortedInns: Inn[] = sortByProperty('name', inns, 'desc')

  const institutionsWithoutInns = institutions.filter((i) => i.type !== 'inn')
  const sortedInstitutionsWithoutInns: VillageInstitution[] = sortByProperty(
    'type',
    institutionsWithoutInns,
    'desc',
  )

  return {
    name: createRandomVillageName() as any,
    size,
    inhabitants,
    age,
    builtWhen,
    leader: createRandomLeader(),
    problem: choose(villageProblems),
    fame: choose(villageFames),
    oddity: weightedRandom(villageOdditiesWithWeights).value,
    institutions: sortedInstitutionsWithoutInns,
    inns: sortedInns,
  }
}

type VillageSize = 'outpost' | 'hamlet' | 'village'
export const villageSizeTranslationDict: Record<
  VillageSize,
  TranslationKey<'village'>
> = {
  outpost: 'village:size.outpost',
  hamlet: 'village:size.hamlet',
  village: 'village:size.village',
}

type VillageInhabitants = [5, 20] | [20, 100] | [100, 400]
type SizeOfVillage = { size: VillageSize; inhabitantMinMax: VillageInhabitants }

const d6ToSizeOfVillage: Mapping<D6, SizeOfVillage> = {
  1: { size: 'outpost', inhabitantMinMax: [5, 20] },
  2: { size: 'outpost', inhabitantMinMax: [5, 20] },
  3: { size: 'hamlet', inhabitantMinMax: [20, 100] },
  4: { size: 'hamlet', inhabitantMinMax: [20, 100] },
  5: { size: 'hamlet', inhabitantMinMax: [20, 100] },
  6: { size: 'village', inhabitantMinMax: [100, 400] },
}

type Ages =
  | 'beforeBloodMist'
  | 'duringAlderWars'
  | 'duringBloodMist'
  | 'afterBloodMist'
type AgeOfVillage = { age: number; builtWhen: Ages }

export const ageOfVillageTranslationDict: Record<
  Ages,
  TranslationKey<'village'>
> = {
  beforeBloodMist: 'village:ages.before_blood_mist',
  duringAlderWars: 'village:ages.during_alder_wars',
  duringBloodMist: 'village:ages.during_blood_mist',
  afterBloodMist: 'village:ages.after_blood_mist',
}

const d66ToAgeOfVillage = (roll: D66): AgeOfVillage => {
  if (roll <= 16) {
    return {
      builtWhen: 'beforeBloodMist',
      age: getRandomInt(300, 1100),
    }
  }

  if (roll <= 25) {
    return {
      builtWhen: 'duringAlderWars',
      age: getRandomInt(305, 360),
    }
  }

  if (roll <= 56) {
    return {
      builtWhen: 'duringBloodMist',
      age: getRandomInt(5, 280),
    }
  }

  return {
    builtWhen: 'afterBloodMist',
    age: rollD6(),
  }
}

const leaderOddities = [
  'bickering',
  'cruel',
  'weak',
  'greedy',
  'wise',
  'eccentric',
  'confusing',
  'brutal',
  'cunning',
  'stern',
  'secret',
  'drunkard',
] as const
type LeaderOddity = (typeof leaderOddities)[number]
export const leaderOddityTranslationDict = translationDict(
  leaderOddities,
  'village',
  'leader.oddities.',
)

const leaderTypes = [
  'council',
  'despot',
  'elder',
  'mayor',
  'druid',
  'sorcerer',
  'no_one',
  'commander',
  'trader',
  'rust_brother',
  'artisan',
  'bandit_chief',
] as const
type LeaderType = (typeof leaderTypes)[number]
export const leaderTypeTranslationDict = translationDict(
  leaderTypes,
  'village',
  'leader.type.',
)

type Leader = Character & {
  oddity: LeaderOddity
  type: LeaderType
}

const createRandomLeader = (): Leader | undefined => {
  const oddity = choose(leaderOddities)
  const type = choose(leaderTypes)

  return {
    id: nanoid(),
    name: createRandomCharacterName(), // Nombre forzado
    oddity,
    type,
  }
}

const villageProblems = [
  'nightwargs',
  'widespread_drunkenness',
  'power_struggle',
  'secret_cult',
  'schism',
  'undead',
  'disease',
  'sinkhole',
  'bandits',
  'terrorizing_monster',
  'slavetrade',
  'haunted_by_ghoul_or_ghost',
] as const
type VillageProblem = (typeof villageProblems)[number]
export const villageProblemTranslationDict: Record<
  VillageProblem,
  TranslationKey<'village'>
> = {
  nightwargs: 'village:problems.nightwargs',
  widespread_drunkenness: 'village:problems.widespread_drunkenness',
  power_struggle: 'village:problems.power_struggle',
  secret_cult: 'village:problems.secret_cult',
  schism: 'village:problems.schism',
  undead: 'village:problems.undead',
  disease: 'village:problems.disease',
  sinkhole: 'village:problems.sinkhole',
  bandits: 'village:problems.bandits',
  terrorizing_monster: 'village:problems.terrorizing_monster',
  slavetrade: 'village:problems.slave_trade',
  haunted_by_ghoul_or_ghost: 'village:problems.haunted_by_ghoul_or_ghost',
}

const villageFames = [
  'excellentWine',
  'deliciousBread',
  'craftsmanship',
  'beautifulLocation',
  'aHorribleMassacre',
  'decadence',
  'wellBrewedBeer',
  'hiddenRiches',
  'strangeDisappearances',
  'worshippingDemons',
  'suspicionOfStrangers',
  'hospitality',
] as const
export const villageFameTranslationDict: Record<
  VillageFame,
  TranslationKey<'village'>
> = {
  excellentWine: 'village:fames.excellent_wine',
  deliciousBread: 'village:fames.delicious_bread',
  craftsmanship: 'village:fames.craftsmanship',
  beautifulLocation: 'village:fames.beautiful_location',
  aHorribleMassacre: 'village:fames.a_horrible_massacre',
  decadence: 'village:fames.decadence',
  wellBrewedBeer: 'village:fames.well_brewed_beer',
  hiddenRiches: 'village:fames.hidden_riches',
  strangeDisappearances: 'village:fames.strange_disappearances',
  worshippingDemons: 'village:fames.worshipping_demons',
  suspicionOfStrangers: 'village:fames.suspicion_of_strangers',
  hospitality: 'village:fames.hospitality',
}

type VillageFame = (typeof villageFames)[number]

const villageOddities = [
  'eccentricClothing',
  'incomprehensibleAccent',
  'smellsBad',
  'fullOfFlowers',
  'muddy',
  'oddBuildingMaterials',
  'tentVillage',
  'builtOnSteepHill',
  'oldTowerIntheMiddle',
  'grandBuilding',
  'windy',
  'inbreeding',
  'strangeEatingHabits',
  'builtOnMarshland',
  'cutOutOfACliff',
  'oldBurialSite',
  'wanderingCattle',
  'mostlyInhabitedByWomen',
  'alliedWithMonster',
  'preparingWedding',
] as const
type VillageOddity = (typeof villageOddities)[number]

export const villageOddityTranslationDict: Record<
  VillageOddity,
  TranslationKey<'village'>
> = {
  eccentricClothing: 'village:oddities.eccentric_clothing',
  incomprehensibleAccent: 'village:oddities.incomprehensible_accent',
  smellsBad: 'village:oddities.smells_bad',
  fullOfFlowers: 'village:oddities.full_of_flowers',
  muddy: 'village:oddities.muddy',
  oddBuildingMaterials: 'village:oddities.odd_building_materials',
  tentVillage: 'village:oddities.tent_village',
  builtOnSteepHill: 'village:oddities.built_on_steep_hill',
  oldTowerIntheMiddle: 'village:oddities.old_tower_inthe_middle',
  grandBuilding: 'village:oddities.grand_building',
  windy: 'village:oddities.windy',
  inbreeding: 'village:oddities.inbreeding',
  strangeEatingHabits: 'village:oddities.strange_eating_habits',
  builtOnMarshland: 'village:oddities.built_on_marshland',
  cutOutOfACliff: 'village:oddities.cut_out_of_acliff',
  oldBurialSite: 'village:oddities.old_burial_site',
  wanderingCattle: 'village:oddities.wandering_cattle',
  mostlyInhabitedByWomen: 'village:oddities.mostly_inhabited_by_women',
  alliedWithMonster: 'village:oddities.allied_with_monster',
  preparingWedding: 'village:oddities.preparing_wedding',
}

const villageOdditiesWithWeights: WeightedChoice<VillageOddity>[] = [
  { weight: 3, value: 'eccentricClothing' },
  { weight: 2, value: 'incomprehensibleAccent' },
  { weight: 2, value: 'smellsBad' },
  { weight: 2, value: 'fullOfFlowers' },
  { weight: 2, value: 'muddy' },
  { weight: 2, value: 'oddBuildingMaterials' },
  { weight: 1, value: 'tentVillage' },
  { weight: 2, value: 'builtOnSteepHill' },
  { weight: 1, value: 'oldTowerIntheMiddle' },
  { weight: 1, value: 'grandBuilding' },
  { weight: 2, value: 'windy' },
  { weight: 1, value: 'inbreeding' },
  { weight: 2, value: 'strangeEatingHabits' },
  { weight: 2, value: 'builtOnMarshland' },
  { weight: 1, value: 'cutOutOfACliff' },
  { weight: 2, value: 'oldBurialSite' },
  { weight: 2, value: 'wanderingCattle' },
  { weight: 2, value: 'mostlyInhabitedByWomen' },
  { weight: 2, value: 'alliedWithMonster' },
  { weight: 2, value: 'preparingWedding' },
]

const villageInstitutions = [
  'nothing',
  'inn',
  'mill',
  'smith',
  'forester',
  'tradingPost',
  'temple',
  'militia',
  'tavern',
  'stable',
] as const
type VillageInstitutionType = (typeof villageInstitutions)[number]
export const villageInstitutionTranslationDict: Record<
  VillageInstitutionType,
  TranslationKey<'village'>
> = {
  nothing: 'village:institutions.nothing',
  inn: 'village:institutions.inn',
  mill: 'village:institutions.mill',
  smith: 'village:institutions.smith',
  forester: 'village:institutions.forester',
  tradingPost: 'village:institutions.trading_post',
  temple: 'village:institutions.temple',
  militia: 'village:institutions.militia',
  tavern: 'village:institutions.tavern',
  stable: 'village:institutions.stable',
}

export type VillageInstitution = {
  id: string
  type: VillageInstitutionType
  name?: string
  owner: Character
}

const villageInstitutionsWithWeights: WeightedChoice<VillageInstitutionType>[] =
  [
    { weight: 6, value: 'nothing' },
    { weight: 6, value: 'inn' },
    { weight: 5, value: 'mill' },
    { weight: 4, value: 'smith' },
    { weight: 3, value: 'forester' },
    { weight: 3, value: 'tradingPost' },
    { weight: 2, value: 'temple' },
    { weight: 3, value: 'militia' },
    { weight: 2, value: 'tavern' },
    { weight: 2, value: 'stable' },
  ]

const createVillageInstitutions = (
  villageSize: VillageSize,
): VillageInstitution[] => {
  let rolls = 0
  if (villageSize === 'outpost') {
    rolls = 1
  }

  if (villageSize === 'hamlet') {
    rolls = 3
  }

  if (villageSize === 'village') {
    rolls = 5 + rollD6()
  }

  return range(rolls)
    .map(
      (_): VillageInstitution => ({
        id: nanoid(),

        type: weightedRandom(villageInstitutionsWithWeights).value,
        owner: {
          id: nanoid(),
          name: createRandomCharacterName(), // Nombre forzado
        },
      }),
    )
    .filter((i) => i.type !== 'nothing')
}
