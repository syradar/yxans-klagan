import { nanoid } from 'nanoid'
import { createAttributesViewModel } from '../../functions/attributes.functions'
import { MonsterSkillsValues } from '../../models/skills.model'
import { TranslationKey } from '../../store/translations/translation.model'
import {
  ArmorViewModel,
  Monster,
  MonsterAttack,
  MonsterAttackMinimalContext,
  MonsterAttackRequirements,
  MonsterAttackType,
  MonsterAttackViewModel,
  MonsterDamageModifiers,
  MonsterLimbs,
  MonsterMovement,
  MonsterSkillListItem,
  MonsterViewModel,
} from './monster.model'
import { getMonsterSkillListItems } from './random-monster.functions'
import { rangeTranslationDict } from '../../models/attack-range'

export type CommunityMonsterAttackType =
  | MonsterAttackType
  | 'stab'
  | 'pounce'
  | 'webshot'
  | 'piercing_shriek'
  | 'call_the_brood'
  | 'claySmash'
  | 'clayPunch'
  | 'hastyReaction'
  | 'earthRumble'
  | 'groundQuake'
  | 'golemRampage'

export type Credit = {
  name: string
  link?: string
}

export type CreditViewModel = {
  id: string
  name: string
  link?: string
}

export interface CommunityMonster extends Omit<Monster, 'pageReference'> {
  description: TranslationKey<'common'>
  credits: Credit[]
  armor: ArmorViewModel
  attacks: MonsterAttack<CommunityMonsterAttackType>[]
  movement: MonsterMovement
  skills: MonsterSkillsValues
}

export interface CommunityMonsterViewModel
  extends Omit<MonsterViewModel, 'pageReference'> {
  description: TranslationKey<'common'>
  credits: CreditViewModel[]
  armor: ArmorViewModel
  attacks: MonsterAttackViewModel<CommunityMonsterAttackType>[]
  movement: MonsterMovement
  skills: MonsterSkillListItem[]
}

export const createCommunityMonsterViewModel = (
  rm: CommunityMonster,
): CommunityMonsterViewModel => {
  return {
    ...rm,
    credits: rm.credits.map((credit) => ({
      ...credit,
      id: nanoid(),
    })),
    attributes: createAttributesViewModel(rm.attributes),
    skills: getMonsterSkillListItems(rm.skills),
    attacks: createCommunityMonsterAttackViewModel(rm),
  }
}

const reqs: MonsterAttackRequirements = {
  tail: false,
  spikedTail: false,
  tentacles: false,
  undead: false,
  acidGlands: false,
  fireGlands: false,
  fangs: false,
  legs: false,
  claws: false,
  horn: false,
  wings: false,
  hasLimbs: false,
  hasBeak: false,
  canSpeak: false,
  isPoisonous: false,
  isSick: false,
}

const dmod: MonsterDamageModifiers = {
  blunt: 0,
  slash: 0,
  size: 0,
  tail_attack: 0,
  telepathic: 0,
}

const deflim: MonsterLimbs = {
  arms: 0,
  legs: 0,
  tentacles: 0,
  wings: 0,
}

const createCommunityMonsterAttackViewModel = (
  monsters: CommunityMonster,
): MonsterAttackViewModel<CommunityMonsterAttackType>[] => {
  const minimalContext: MonsterAttackMinimalContext = {
    attributes: monsters.attributes,
    movement: monsters.movement,
    attackRequirements: reqs,
    damageModifiers: dmod,
    limbs: deflim,
    description: {
      heads: [],
      limbs: deflim,
      tail: {
        damage: 0,
        key: 'none',
      },
    },
    traits: [],
    skills: monsters.skills,
  }

  return monsters.attacks.map((attack) => ({
    description: attack.description,
    type: attack.type,
    range: attack.range && rangeTranslationDict[attack.range],
    damage: attack.damage && attack.damage(minimalContext),
    attack: attack.attack && attack.attack(minimalContext),
    descriptionExtras:
      attack.descriptionExtras && attack.descriptionExtras(minimalContext),
  }))
}
