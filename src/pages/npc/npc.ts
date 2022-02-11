import { compose } from 'rambda'
import { choose } from '../../functions/dice.functions'
import { Chacteristics, getChacteristics } from './characteristics'
import { getOccupations, Occupation } from './occupation'
import { getQuirk, Quirk } from './quirk'

export type NPC = {
  occupation: Occupation
  characteristic: Chacteristics
  quirk: Quirk
}

export const getRandomOccupation = compose(choose, getOccupations)
export const getRandomCharacteristic = compose(choose, getChacteristics)
export const getRandomQuirk = compose(choose, getQuirk)
