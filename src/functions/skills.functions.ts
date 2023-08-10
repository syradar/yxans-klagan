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
  entriesOf(skills)
    .filter(([_, value]) => value > 0)
    .reduce((acc: AllSkillsValuesViewModel, [skill, value]) => {
      if (value > 0) {
        acc.push({ skill, value })
      }

      return acc
    }, [])

/**
 * Returns a typed array of key-value pairs for the given object.
 * @param rec The object to extract key-value pairs from.
 * @returns A typed array of key-value pairs.
 */
function entriesOf<T extends object>(rec: T): [keyof T, T[keyof T]][] {
  return Object.entries(rec) as [keyof T, T[keyof T]][]
}
