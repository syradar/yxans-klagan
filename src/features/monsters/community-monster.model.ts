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

export type CommunityMonsterAttackType =
  | MonsterAttackType
  | 'Stab'
  | 'Pounce'
  | 'Webshot'
  | 'PiercingShriek'
  | 'CallTheBrood'

export interface CommunityMonster extends Omit<Monster, 'pageReference'> {
  description: TranslationKey<'common'>
  armor: ArmorViewModel
  attacks: MonsterAttack<CommunityMonsterAttackType>[]
  movement: MonsterMovement
  skills: MonsterSkillsValues
}

export interface CommunityMonsterViewModel
  extends Omit<MonsterViewModel, 'pageReference'> {
  description: TranslationKey<'common'>
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
  Blunt: 0,
  Slash: 0,
  Size: 0,
  TailAttack: 0,
  Telepathic: 0,
}

const deflim: MonsterLimbs = {
  Arms: 0,
  Legs: 0,
  Tentacles: 0,
  Wings: 0,
}

const createCommunityMonsterAttackViewModel = (
  monster: CommunityMonster,
): MonsterAttackViewModel<CommunityMonsterAttackType>[] => {
  const minimalContext: MonsterAttackMinimalContext = {
    attributes: monster.attributes,
    movement: monster.movement,
    attackRequirements: reqs,
    damageModifiers: dmod,
    limbs: deflim,
    description: {
      heads: [],
      limbs: deflim,
      tail: {
        damage: 0,
        key: 'None',
      },
    },
    traits: [],
    skills: monster.skills,
  }

  return monster.attacks.map((attack) => ({
    description: attack.description,
    type: attack.type,
    range: attack.range && `common:Range.${attack.range}`,
    damage: attack.damage && attack.damage(minimalContext),
    attack: attack.attack && attack.attack(minimalContext),
    descriptionExtras:
      attack.descriptionExtras && attack.descriptionExtras(minimalContext),
  }))
}
