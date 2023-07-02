import {
  AllSkillsValues,
  AllSkillsValuesViewModel,
} from '../models/skills.model'

export const defaultSkillsValues = (): AllSkillsValues => ({
  might: 0,
  endurance: 0,
  melee: 0,
  crafting: 0,
  stealth: 0,
  sleight_of_hand: 0,
  move: 0,
  markmanship: 0,
  scouting: 0,
  lore: 0,
  survival: 0,
  insight: 0,
  manipulation: 0,
  performance: 0,
  healing: 0,
  animal_handling: 0,
})

export const createAllSkillsValuesViewModel = (
  skills: AllSkillsValues,
): AllSkillsValuesViewModel =>
  Object.entries(skills).filter(
    ([_, value]) => value > 0,
  ) as AllSkillsValuesViewModel
