import { AllSkillsValuesViewModel } from '../models/skills.model'
import {
  createAllSkillsValuesViewModel,
  defaultSkillsValues,
} from './skills.functions'

describe('defaultSkillsValues', () => {
  it('should return 16 skills', () => {
    const expected = 16
    const result = Object.keys(defaultSkillsValues()).length

    expect(result).toEqual(expected)
  })
})

describe('createAllSkillsValuesViewModel', () => {
  it('should return empty array if all skill values are 0', () => {
    const expected = 0
    const result = createAllSkillsValuesViewModel(defaultSkillsValues()).length

    expect(result).toEqual(expected)
  })

  it('should return non-zero skill values', () => {
    const expected: AllSkillsValuesViewModel = [
      ['Melee', 2],
      ['Insight', 3],
    ]
    const result = createAllSkillsValuesViewModel({
      ...defaultSkillsValues(),
      Melee: 2,
      Insight: 3,
    })

    expect(result).toEqual(expected)
  })
})
