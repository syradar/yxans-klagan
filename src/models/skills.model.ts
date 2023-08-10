import { translationDict } from '../functions/translation-dict'

const allSkills = [
  'might',
  'endurance',
  'melee',
  'crafting',
  'stealth',
  'sleight_of_hand',
  'move',
  'markmanship',
  'scouting',
  'lore',
  'survival',
  'insight',
  'manipulation',
  'performance',
  'healing',
  'animal_handling',
] as const
export type AllSkills = (typeof allSkills)[number]
export const skillsTranslationDict = translationDict(
  allSkills,
  'common',
  'skills.',
)

export type MonsterSkills = Extract<
  AllSkills,
  'move' | 'melee' | 'scouting' | 'stealth'
>

export type AllSkillsValues = { [S in AllSkills]: number }
export type MonsterSkillsValues = { [S in MonsterSkills]: number }

export type AllSkillsValuesViewModel = {
  skill: AllSkills
  value: number
}[]
