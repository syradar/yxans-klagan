import { nanoid } from 'nanoid'
import {
  weightedRandom,
  WeightedChoice,
  choose,
} from '../../functions/dice.functions'
import { Character } from './character'
import { VillageInstitution } from './village-generator'
import { ValidLanguage } from '../../hooks/useValidLanguage'
import { TranslationKey } from '../../store/translations/translation.model'

export type Inn = {
  // CORRECCIÓN IMPLÍCITA: ValidLanguage ahora es 'es'
  name: { [L in ValidLanguage]: string } 
  id: string
  oddity: InnOddity
  speciality: InnSpecialty
  guest: InnGuest
  owner: Character
}

export const createRandomInn = ({ owner }: VillageInstitution): Inn => {
  // CORRECCIÓN DE USO: La función createRandomInnName ya devuelve el objeto { es: 'Nombre' }
  const name = createRandomInnName() 
  
  const { oddity, guest, speciality } =
    weightedRandom(innQuirksWithWeights).value

// ... resto del código...

  return {
    id: nanoid(),
    name,
    oddity,
    speciality,
    guest,
    owner,
  }
}

const innOddity = [
  'violenceIsInTheAir',
  'barrelsInsteadOfChairsAndPlanksInsteadOfTables',
  'bigFireplace',
  'peltsOnWalls',
  'longCommunalTable',
  'gamblingDen',
  'mediocreBard',
  'niceDog',
  'grumpyOwner',
  'monsterHeadOnWall',
  'singingWaiter',
  'stompedFloor',
  'birthdayParty',
  'drunkAdventurers',
] as const
export type InnOddity = (typeof innOddity)[number]
export const innOddityTranslationDict: Record<
  InnOddity,
  TranslationKey<'village'>
> = {
  violenceIsInTheAir: 'village:inns.oddities.violence_is_in_the_air',
  barrelsInsteadOfChairsAndPlanksInsteadOfTables:
    'village:inns.oddities.barrels_instead_of_chairs_and_planks_instead_of_tables',
  bigFireplace: 'village:inns.oddities.big_fireplace',
  peltsOnWalls: 'village:inns.oddities.pelts_on_walls',
  longCommunalTable: 'village:inns.oddities.long_communal_table',
  gamblingDen: 'village:inns.oddities.gambling_den',
  mediocreBard: 'village:inns.oddities.mediocre_bard',
  niceDog: 'village:inns.oddities.nice_dog',
  grumpyOwner: 'village:inns.oddities.grumpy_owner',
  monsterHeadOnWall: 'village:inns.oddities.monster_head_on_wall',
  singingWaiter: 'village:inns.oddities.singing_waiter',
  stompedFloor: 'village:inns.oddities.stomped_floor',
  birthdayParty: 'village:inns.oddities.birthday_party',
  drunkAdventurers: 'village:inns.oddities.drunk_adventurers',
}

const innSpecialty = [
  'cheapDilutedBeer',
  'meatStew',
  'grilledRodent',
  'stewedTurnips',
  'saltBird',
  'bloodSoup',
  'fierySpiceWine',
  'roastedPiglet',
  'swampStew',
  'vegetableMush',
  'saltedFish',
  'cookedCrow',
  'bearStew',
  'dwarvenStrongAle',
] as const
export type InnSpecialty = (typeof innSpecialty)[number]
export const innSpecialtyTranslationDict: Record<
  InnSpecialty,
  TranslationKey<'village'>
> = {
  cheapDilutedBeer: 'village:inns.specialities.cheap_diluted_beer',
  meatStew: 'village:inns.specialities.meat_stew',
  grilledRodent: 'village:inns.specialities.grilled_rodent',
  stewedTurnips: 'village:inns.specialities.stewed_turnips',
  saltBird: 'village:inns.specialities.salt_bird',
  bloodSoup: 'village:inns.specialities.blood_soup',
  fierySpiceWine: 'village:inns.specialities.fiery_spice_wine',
  roastedPiglet: 'village:inns.specialities.roasted_piglet',
  swampStew: 'village:inns.specialities.swamp_stew',
  vegetableMush: 'village:inns.specialities.vegetable_mush',
  saltedFish: 'village:inns.specialities.salted_fish',
  cookedCrow: 'village:inns.specialities.cooked_crow',
  bearStew: 'village:inns.specialities.bear_stew',
  dwarvenStrongAle: 'village:inns.specialities.dwarven_strong_ale',
}

const innGuest = [
  'escapedCriminal',
  'unhappyFarmer',
  'scarredTreasureHunter',
  'dirtyAndSullenHunter',
  'silentRavenSister',
  'noisyBandit',
  'oldWarVeteran',
  'nobleInDisguise',
  'secretiveSpellbinder',
  'annoyingJester',
  'dustyTraveller',
  'hungryDwarf',
  'frostyElf',
  'scoutingThief',
] as const
export type InnGuest = (typeof innGuest)[number]
export const innGuestTranslationDict: Record<
  InnGuest,
  TranslationKey<'village'>
> = {
  escapedCriminal: 'village:inns.guests.escaped_criminal',
  unhappyFarmer: 'village:inns.guests.unhappy_farmer',
  scarredTreasureHunter: 'village:inns.guests.scarred_treasure_hunter',
  dirtyAndSullenHunter: 'village:inns.guests.dirty_and_sullen_hunter',
  silentRavenSister: 'village:inns.guests.silent_raven_sister',
  noisyBandit: 'village:inns.guests.noisy_bandit',
  oldWarVeteran: 'village:inns.guests.old_war_veteran',
  nobleInDisguise: 'village:inns.guests.noble_in_disguise',
  secretiveSpellbinder: 'village:inns.guests.secretive_spellbinder',
  annoyingJester: 'village:inns.guests.annoying_jester',
  dustyTraveller: 'village:inns.guests.dusty_traveller',
  hungryDwarf: 'village:inns.guests.hungry_dwarf',
  frostyElf: 'village:inns.guests.frosty_elf',
  scoutingThief: 'village:inns.guests.scouting_thief',
}

type InnQuirk = {
  oddity: InnOddity
  speciality: InnSpecialty
  guest: InnGuest
}

const innQuirksWithWeights: WeightedChoice<InnQuirk>[] = [
  {
    weight: 3,
    value: {
      speciality: 'cheapDilutedBeer',
      guest: 'escapedCriminal',
      oddity: 'violenceIsInTheAir',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'meatStew',
      guest: 'unhappyFarmer',
      oddity: 'barrelsInsteadOfChairsAndPlanksInsteadOfTables',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'grilledRodent',
      guest: 'scarredTreasureHunter',
      oddity: 'bigFireplace',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'stewedTurnips',
      guest: 'dirtyAndSullenHunter',
      oddity: 'peltsOnWalls',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'saltBird',
      guest: 'silentRavenSister',
      oddity: 'longCommunalTable',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'bloodSoup',
      guest: 'noisyBandit',
      oddity: 'gamblingDen',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'fierySpiceWine',
      guest: 'oldWarVeteran',
      oddity: 'mediocreBard',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'roastedPiglet',
      guest: 'nobleInDisguise',
      oddity: 'niceDog',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'swampStew',
      guest: 'secretiveSpellbinder',
      oddity: 'grumpyOwner',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'vegetableMush',
      guest: 'annoyingJester',
      oddity: 'monsterHeadOnWall',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'saltedFish',
      guest: 'dustyTraveller',
      oddity: 'singingWaiter',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'cookedCrow',
      guest: 'hungryDwarf',
      oddity: 'stompedFloor',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'bearStew',
      guest: 'frostyElf',
      oddity: 'birthdayParty',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'dwarvenStrongAle',
      guest: 'scoutingThief',
      oddity: 'drunkAdventurers',
    },
  },
]

// Función corregida: Usar listas en español y devolver clave 'es'
// CORRECCIÓN 2: Tipo de retorno actualizado a LanguageStringMap
export const createRandomInnName = (): { [L in ValidLanguage]: string } => {
  // CORRECCIÓN 3: Usar listas en español
  const prefix = choose(innNamePrefixesEs)
  const suffix = choose(innNameSuffixesEs)

  // CORRECCIÓN 4: Devolver el nombre con la clave 'es'
  return {
    es: `${prefix} ${suffix}`
  }
}

// Se eliminaron innNamePrefixesSv y innNameSuffixesSv

// ANTES: const innNamePrefixesEn = [...]
const innNamePrefixesEs = [
  'El Tercero',
  'El Pequeño',
  'El Rojo',
  'El Brumoso',
  'El Sangriento',
  'El Viejo',
  'El Dorado',
  'El Frío',
  'El Refrescante',
  'El Bueno',
  'El Segundo',
  'El Último',
  'El Saltador',
  'El Feliz',
  'El Cantor',
  'El Rodante',
  'El Agitado',
  'El Lamentador',
  'El Codicioso',
  'El Redondo',
  'El Flamígero',
  'La Plata',
  'El Negro',
  'El Muerto',
  'El Grande',
  'El Rugiente',
  'El Aclamador',
  'El Tarareador',
  'El Escaso',
  'El Gordo',
  'El Grueso',
  'El Dulce',
  'El Ruidoso',
  'El Gruñón',
  'El Borroso',
  'El Peludo',
  'El Amargo',
]

// ANTES: const innNameSuffixesEn = [...]
const innNameSuffixesEs = [
  'Farol',
  'Cerdo',
  'Rueda',
  'Umbral',
  'Gorrión',
  'Cabra',
  'Flecha',
  'Olla',
  'Cordero',
  'Doncella',
  'Hombre',
  'Dragón',
  'Grifo',
  'Jabalí',
  'Barril',
  'Bardo',
  'Perro',
  'Caballo',
  'Chica',
  'Lobo',
  'Oso',
  'Fantasma',
  'Rata',
  'Tarro',
  'Jarra',
  'Cáliz',
  'Águila',
  'Cuervo',
  'Martillo',
  'Pico',
  'Corneta',
  'Druida',
  'Caballero',
  'Bandido',
  'Jabalí Salvaje',
  'Cazador',
  'Cresta',
  'Cueva',
]
