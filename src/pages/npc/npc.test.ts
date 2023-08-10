import { compose } from 'ramda'
import { choose } from '../../functions/dice.functions'
import { getChacteristics } from './characteristics'
import { getKinTypes } from './name'
import { getOccupations } from './occupation'
import { getQuirks } from './quirk'
import { describe, it, expect } from 'vitest'

export const getRandomKinType = compose(choose, getKinTypes)
export const getRandomOccupation = compose(choose, getOccupations)
export const getRandomCharacteristic = compose(choose, getChacteristics)
export const getRandomQuirk = compose(choose, getQuirks)

describe('getRandomKinType', () => {
  it('should return kintype', () => {
    const expected = true
    const random = getRandomKinType()
    expect(random.some).toBeTruthy()
    assert(random.some)

    const result = getKinTypes().includes(random.safeUnwrap())

    expect(result).toEqual(expected)
  })
})
describe('getRandomOccupation', () => {
  it('should return kintype', () => {
    const expected = true
    const random = getRandomOccupation()
    expect(random.some).toBeTruthy()
    assert(random.some)

    const result = getOccupations().includes(random.safeUnwrap())

    expect(result).toEqual(expected)
  })
})
describe('getRandomCharacteristic', () => {
  it('should return kintype', () => {
    const expected = true
    const random = getRandomCharacteristic()
    expect(random.some).toBeTruthy()
    assert(random.some)

    const result = getChacteristics().includes(random.safeUnwrap())

    expect(result).toEqual(expected)
  })
})
describe('getRandomQuirk', () => {
  it('should return kintype', () => {
    const expected = true
    const random = getRandomQuirk()
    expect(random.some).toBeTruthy()
    assert(random.some)
    const result = getQuirks().includes(random.safeUnwrap())

    expect(result).toEqual(expected)
  })
})
