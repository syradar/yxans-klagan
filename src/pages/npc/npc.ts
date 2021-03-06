import { compose } from 'rambda'
import { choose } from '../../functions/dice.functions'
import { Chacteristics, getChacteristics } from './characteristics'
import { getKinTypes, KinType } from './name'
import { getOccupations, Occupation } from './occupation'
import { getQuirks, Quirk } from './quirk'

export type NPC = {
  kin: KinType
  name?: string
  occupation: Occupation
  characteristic: Chacteristics
  quirk: Quirk
}

export const getRandomKinType = compose(choose, getKinTypes)
export const getRandomOccupation = compose(choose, getOccupations)
export const getRandomCharacteristic = compose(choose, getChacteristics)
export const getRandomQuirk = compose(choose, getQuirks)
