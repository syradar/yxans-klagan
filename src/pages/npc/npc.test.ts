import { compose } from 'rambda'
import { choose } from '../../functions/dice.functions'
import { getChacteristics } from './characteristics'
import { getKinTypes } from './name'
import { getOccupations } from './occupation'
import { getQuirks } from './quirk'

export const getRandomKinType = compose(choose, getKinTypes)
export const getRandomOccupation = compose(choose, getOccupations)
export const getRandomCharacteristic = compose(choose, getChacteristics)
export const getRandomQuirk = compose(choose, getQuirks)

describe('getRandomKinType', () => {
  it('should return kintype', () => {
    const expected = true
    const result = getKinTypes().includes(getRandomKinType())

    expect(result).toEqual(expected)
  })
})
describe('getRandomOccupation', () => {
  it('should return kintype', () => {
    const expected = true
    const result = getOccupations().includes(getRandomOccupation())

    expect(result).toEqual(expected)
  })
})
describe('getRandomCharacteristic', () => {
  it('should return kintype', () => {
    const expected = true
    const result = getChacteristics().includes(getRandomCharacteristic())

    expect(result).toEqual(expected)
  })
})
describe('getRandomQuirk', () => {
  it('should return kintype', () => {
    const expected = true
    const result = getQuirks().includes(getRandomQuirk())

    expect(result).toEqual(expected)
  })
})
