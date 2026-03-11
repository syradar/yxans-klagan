import { Definition } from '../../@types/definition.type'
import { camelCaseToSnakeCase } from '../../functions/casing'
import {
  TranslationDict,
  translationDict,
} from '../../functions/translation-dict'
import { MonsterAttackRange } from '../../models/attack-range'
import { Attributes, AttributesViewModel } from '../../models/attributes.model'
import { MonsterSkillsValues } from '../../models/skills.model'
import { TranslationKey } from '../../store/translations/translation.model'

export interface Monster {
  id: string
  name: TranslationKey<'common'>
  attributes: Attributes
  pageReference?: number
  attacks?: any[] 
  movement?: any
  armor?: any
  skills?: any
  traits?: any
  weaknesses?: any
}

export interface MonsterViewModel {
  id: string
  name: TranslationKey<'common'>
  attributes: AttributesViewModel
  pageReference?: number
  attacks?: any[]
  movement?: any
  armor?: any
  skills?: any
  traits?: any
  weaknesses?: any
}

export type ArmorTypeLabel =
  | 'skin'
  | 'softFur'
  | 'thickFur'
  | 'feathers'
  | 'scales'
  | 'shell'
  | 'bonePlates'
  | 'armoredHide'
export const monsterArmorTypeTranslationDict: Record<
  ArmorTypeLabel,
  TranslationKey<'monsters'>
> = {
  skin: 'monsters:armor.skin',
  softFur: 'monsters:armor.soft_fur',
  thickFur: 'monsters:armor.thick_fur',
  feathers: 'monsters:armor.feathers',
  scales: 'monsters:armor.scales',
  shell: 'monsters:armor.shell',
  bonePlates: 'monsters:armor.bone_plates',
  armoredHide: 'monsters:armor.armored_hide',
}

export type MonsterArmor = {
  key: ArmorTypeLabel
  armor: number
}

export interface ArmorViewModel {
  values: boolean[]
  label: ArmorTypeLabel
}

const monsterSizes = [
  'puny',
  'small',
  'average',
  'large',
  'big',
  'huge',
  'gigantic',
] as const
export type MonsterSize = (typeof monsterSizes)[number]

export const createMonsterSizeTranslationDict = (monsterType: MonsterType) =>
  monsterSizes.reduce(
    (acc, label) => ({
      ...acc,
      [label]: `monsters:size.${camelCaseToSnakeCase(label)}${
        isDefinitiveArticle[monsterType] ? '_def' : ''
      }`,
    }),
    {} as TranslationDict<MonsterSize, 'monsters', 'size.'>,
  )

const isDefinitiveArticle: Record<MonsterType, boolean> = {
  grazing: true,
  herbivore: false,
  gatherer: false,
  scavenger: false,
  predator: true,
  aggressivePredator: true,
}

const monsterTypes = [
  'grazing',
  'herbivore',
  'gatherer',
  'scavenger',
  'predator',
  'aggressivePredator',
]
export type MonsterType = (typeof monsterTypes)[number]

export const monsterTypeTranslationDict = translationDict(
  monsterTypes,
  'monsters',
  'type.',
)

export type LimbChoices =
  | 'none'
  | 'tentacles'
  | 'two_legs'
  | 'two_legs_two_arms'
  | 'four_legs'
  | 'four_legs_two_arms'
  | 'wings'
  | 'many'

export type LimbChoicesWithAmount = {
  key: LimbChoices
  monsterLimbs: () => MonsterLimbs
}

export type Limb = 'tentacles' | 'legs' | 'arms' | 'wings'

export type MonsterLimbs = {
  [L in Limb]: number
}

export type HeadChoices =
  | 'missing'
  | 'beak'
  | 'horn_with_count'
  | 'elk_horns'
  | 'tentacles_with_count'
  | 'insectoid_eyes'
  | 'side_eyes_with_count'
  | 'many_eyes'
  | 'big_mane'
  | 'long_tongue'
  | 'big_ears'
  | 'fin'
  | 'roll_twice'

export type HeadChoiceWithCount = {
  key: HeadChoices
  count?: number
}

export type TailChoices = 'none' | 'tail' | 'spiked_tail'

const movementTypes = [
  'slithering',
  'digging',
  'swimming',
  'running',
  'flying',
  'climbing',
] as const
export type MovementType = (typeof movementTypes)[number]
export const movementTypeTranslationDict = translationDict(
  movementTypes,
  'monsters',
  'movement.',
)

export type MovementDistanceFunction = (agility: number) => number

export type MonsterHome =
  | 'burrow'
  | 'ruin'
  | 'watering_hole'
  | 'tree_or_high_point'
  | 'cave'
  | 'ravine'
  | 'den'

export const monsterHomeLabels: Record<
  MonsterHome,
  TranslationKey<'monsters'>
> = {
  burrow: 'monsters:homes.burrow',
  ruin: 'monsters:homes.ruin',
  watering_hole: 'monsters:homes.watering_hole',
  tree_or_high_point: 'monsters:homes.tree_or_high_point',
  cave: 'monsters:homes.cave',
  ravine: 'monsters:homes.ravine',
  den: 'monsters:homes.den',
}

export type MonsterSkillListItem = {
  name: TranslationKey<'monsters'>
  value: number
}

export type MonsterTrait = {
  name: TranslationKey<'monsters'>
  description: () => MonsterDescriptionItemViewModel
  apply: (rm: RandomMonster) => RandomMonster
}

export type MonsterTraitViewModel = {
  name: TranslationKey<'monsters'>
  description: MonsterDescriptionItemViewModel
}
export type MonsterWeakness = Definition<
  TranslationKey<'monsters'>,
  TranslationKey<'monsters'>
>
export type MonsterMotivation =
  | 'territory'
  | 'pregnant'
  | 'hunger'
  | 'injured'
  | 'parasite'
  | 'alone'
  | 'fun'
  | 'looking_for_host'
  | 'guarding_treasure'

export type MonsterAttackType = any

const generateMonsterAttacks = () => {
  const dict: Record<string, string> = {
    slash: 'monsters:attack.slash.type',
    eyeGourge: 'monsters:attack.eyeGourge.type',
    clawFlurry: 'monsters:attack.clawFlurry.type',
    bite: 'monsters:attack.bite.type',
    lockedJaws: 'monsters:attack.lockedJaws.type',
    throatBite: 'monsters:attack.throatBite.type',
    horn: 'monsters:attack.horn.type',
    headbutt: 'monsters:attack.headbutt.type',
    roar: 'monsters:attack.roar.type',
    tailsSlash: 'monsters:attack.tailsSlash.type',
    tentacleLash: 'monsters:attack.tentacleLash.type',
    tentacleFrenzy: 'monsters:attack.tentacleFrenzy.type',
    tentaclePenetrationArmsLength: 'monsters:attack.tentaclePenetrationArmsLength.type',
    tentaclePenetrationNear: 'monsters:attack.tentaclePenetrationNear.type',
    bash: 'monsters:attack.bash.type',
    sweep: 'monsters:attack.sweep.type',
    breathFire: 'monsters:attack.breathFire.type',
    sprayFire: 'monsters:attack.sprayFire.type',
    spitAcid: 'monsters:attack.spitAcid.type',
    sprayAcid: 'monsters:attack.sprayAcid.type',
    deadlyGaze: 'monsters:attack.deadlyGaze.type',
    coldStrike: 'monsters:attack.coldStrike.type',
    deathScream: 'monsters:attack.deathScream.type',
    kick: 'monsters:attack.kick.type',
    backwardsKick: 'monsters:attack.backwardsKick.type',
    devour: 'monsters:attack.devour.type',
    diveAttack: 'monsters:attack.diveAttack.type',
    whirlwind: 'monsters:attack.whirlwind.type',
    peck: 'monsters:attack.peck.type',
    squash: 'monsters:attack.squash.type',
    beakThrow: 'monsters:attack.beakThrow.type',
    adventureToss: 'monsters:attack.adventureToss.type',
    deathRattle: 'monsters:attack.deathRattle.type',
    infectedScratch: 'monsters:attack.infectedScratch.type',
    diseasedBite: 'monsters:attack.diseasedBite.type',
    infectedTailSwipe: 'monsters:attack.infectedTailSwipe.type',
    infectedTentacleSwipe: 'monsters:attack.infectedTentacleSwipe.type',
    diseasedTouch: 'monsters:attack.diseasedTouch.type',
    distraction: 'monsters:attack.distraction.type',
    punch: 'monsters:attack.punch.type',
    flyingFists: 'monsters:attack.flyingFists.type',
    fistsOfFury: 'monsters:attack.fistsOfFury.type',
    poisonSpit: 'monsters:attack.poisonSpit.type',
    venemousBite: 'monsters:attack.venemousBite.type',
    poisonScratch: 'monsters:attack.poisonScratch.type',
    poisonTailAttack: 'monsters:attack.poisonTailAttack.type',
    poisonTentacleAttack: 'monsters:attack.poisonTentacleAttack.type',
    poisonHornAttack: 'monsters:attack.poisonHornAttack.type',
    nightmareVisions: 'monsters:attack.nightmareVisions.type',
    mindBurst: 'monsters:attack.mindBurst.type',
    taunt: 'monsters:attack.taunt.type',
    plea: 'monsters:attack.plea.type',
    burrow: 'monsters:attack.burrow.type',
    theGroundShatters: 'monsters:attack.theGroundShatters.type',
    rush: 'monsters:attack.rush.type',
    wrapAttack: 'monsters:attack.wrapAttack.type',
    fallFromTheSky: 'monsters:attack.fallFromTheSky.type',
    rainOfRocks: 'monsters:attack.rainOfRocks.type',
    generic: 'monsters:attack.generic.type',
    call_the_brood: 'monsters:attack.call_the_brood.type',
    piercing_shriek: 'monsters:attack.piercing_shriek.type',
    pounce: 'monsters:attack.pounce.type',
    stab: 'monsters:attack.stab.type',
    webshot: 'monsters:attack.webshot.type',
    claySmash: 'monsters:attack.claySmash.type',
    clayPunch: 'monsters:attack.clayPunch.type',
    hastyReaction: 'monsters:attack.hastyReaction.type',
    earthRumble: 'monsters:attack.earthRumble.type',
    groundQuake: 'monsters:attack.groundQuake.type',
    golemRampage: 'monsters:attack.golemRampage.type',
  }

  const monsters = [
    'giant', 'abyss_worm', 'bloodling', 'dragon', 'drakewyrm', 'death_knight',
    'ent', 'wyvern', 'ghost', 'gryphon', 'gray_bear', 'harpies', 'hydra',
    'giant_squid', 'manticore', 'minotaur', 'nightwarg', 'sea_serpent', 'troll', 'vine',
    'amphibian', 'amoeba', 'basilisk', 'bog_man', 'dread_raptor', 'gatekeeper',
    'giant_specter', 'giant_spider_hatchling', 'giant_spider_male', 'giant_spider_female',
    'greater_golem', 'imp', 'iron_dragon', 'mara', 'mire_drake', 'mummy',
    'nature_spirit', 'possessor', 'rat_king', 'rock_troll', 'shapeshifter',
    'skolopendra', 'swarming_death', 'tupilaq', 'twisted_ent', 'undead_dragon', 'vampyr', 'water_troll', 'will_o_the_wisp', 'wolfshadow',
    'pike_beast', 'stone_raven', 'frost_dragon', 'ice_giant', 'stone_guardian', 'giant_wolf', 'nanuik', 'wendigo'
  ]

  for (const m of monsters) {
    for (let i = 1; i <= 6; i++) {
      dict[`${m}_${i}`] = `monsters:attack.${m}_${i}.type`
    }
  }

  return dict
}

export const monsterAttackTypeTranslationDict = generateMonsterAttacks()

export type MonsterDamageType =
  | 'slash'
  | 'blunt'
  | 'stab'
  | 'poison'
  | 'fear'
  | 'non_typical'
  | 'weapon'
  | 'disease'

export type MonsterDamageModifierType =
  | Extract<MonsterDamageType, 'slash' | 'blunt'>
  | 'tail_attack'
  | 'size'
  | 'telepathic'

export const poisonTypes = [
  'lethal',
  'paralyzing',
  'sleeping',
  'hallucinogenic',
] as const
export type PoisonType = (typeof poisonTypes)[number]
export const poisonTypeTranslationDict: Record<
  PoisonType,
  TranslationKey<'monsters'>
> = {
  lethal: 'monsters:poisons.lethal',
  paralyzing: 'monsters:poisons.paralyzing',
  sleeping: 'monsters:poisons.sleeping',
  hallucinogenic: 'monsters:poisons.hallucinogenic',
}

export type PoisonDamage = {
  type: PoisonType
  potency: number
}

export type MonsterDamage = {
  [M in Exclude<MonsterDamageType, 'poison' | 'tail_attack' | 'fear'>]?: number
} & { poison?: PoisonDamage; fear?: boolean }

export type MonsterAttackMinimalContext = Pick<
  IntermediateRandomMonster,
  | 'attributes'
  | 'movement'
  | 'attackRequirements'
  | 'limbs'
  | 'damageModifiers'
  | 'description'
  | 'traits'
  | 'skills'
>
export type MonsterAttack<T = any> = {
  type: T
  attack?: (rm: MonsterAttackMinimalContext) => number
  damage?: (rm: MonsterAttackMinimalContext) => MonsterDamage
  range: MonsterAttackRange
  description: TranslationKey<'monsters'>
  descriptionExtras?: (rm: MonsterAttackMinimalContext) => { count: number }
  valid: (rm: MonsterAttackMinimalContext) => boolean
  singleUse: boolean
  chance: number
}

export type MonsterAttackViewModel<T = any> = {
  type: T
  attack?: number
  damage?: MonsterDamage
  range: TranslationKey<'common'> | string
  description: TranslationKey<'monsters'> | string
  descriptionExtras?: { count: number }
}

export type MonsterAttacks = Record<string, MonsterAttack<any>>

export type MonsterDamageModifiers = {
  [M in MonsterDamageModifierType]: number
}

export type MonsterAttackRequirements = {
  tail: boolean
  spikedTail: boolean
  tentacles: boolean
  undead: boolean
  acidGlands: boolean
  fireGlands: boolean
  fangs: boolean
  legs: boolean
  claws: boolean
  horn: boolean
  wings: boolean
  hasLimbs: boolean
  hasBeak: boolean
  canSpeak: boolean
  isPoisonous: boolean
  isSick: boolean
}

export type MonsterDescription = {
  heads: HeadChoiceWithCount[]
  tail: {
    key: TailChoices
    damage: number
  }
  limbs: MonsterLimbs
}

export type MonsterDescriptionItemViewModel = {
  key: TranslationKey<'monsters'>
  count?: number
}

export type MonsterDescriptionViewModel = {
  head: MonsterDescriptionItemViewModel[]
  tail?: string
  limbs: MonsterDescriptionItemViewModel[]
}

export interface RandomMonster extends Monster {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescription
  armor: ArmorViewModel
  home: MonsterHome
  skills: MonsterSkillsValues
  traits: MonsterTrait[]
  weakness: MonsterWeakness
  motivation: MonsterMotivation
  damageModifiers: MonsterDamageModifiers
  attackRequirements: MonsterAttackRequirements
}

export interface IntermediateRandomMonster extends Monster {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescription
  armor: ArmorViewModel
  home: MonsterHome
  skills: MonsterSkillsValues
  traits: MonsterTrait[]
  weakness: MonsterWeakness
  motivation: MonsterMotivation
  damageModifiers: MonsterDamageModifiers
  attackRequirements: MonsterAttackRequirements
  movement: MonsterMovement
}

export type MonsterMovement = {
  type: MovementType
  distance: number
}

export interface RandomMonsterViewModel
  extends Omit<MonsterViewModel, 'name' | 'pageReference'> {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescriptionViewModel
  armor: ArmorViewModel
  movement: MonsterMovement
  home: MonsterHome
  skills: MonsterSkillListItem[]
  traits: MonsterTraitViewModel[]
  weakness: MonsterWeakness
  motivation: {
    name: `monsters:motivation.${MonsterMotivation}.name`
    description: `monsters:motivation.${MonsterMotivation}.description`
  }
  damageModifiers: MonsterDamageModifiers
  attacks: MonsterAttackViewModel[]
  attackRequirements: MonsterAttackRequirements
}
