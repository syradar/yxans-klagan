import {
  AllSkillsValues,
  AllSkillsValuesViewModel,
} from '../models/skills.model'

export const defaultSkillsValues = (): AllSkillsValues => ({
  Might: 0,
  Endurance: 0,
  Melee: 0,
  Crafting: 0,
  Stealth: 0,
  SleightOfHand: 0,
  Move: 0,
  Markmanship: 0,
  Scouting: 0,
  Lore: 0,
  Survival: 0,
  Insight: 0,
  Manipulation: 0,
  Performance: 0,
  Healing: 0,
  AnimalHandling: 0,
})

export const createAllSkillsValuesViewModel = (
  skills: AllSkillsValues,
): AllSkillsValuesViewModel =>
  Object.entries(skills).filter(
    ([_, value]) => value > 0,
  ) as AllSkillsValuesViewModel
