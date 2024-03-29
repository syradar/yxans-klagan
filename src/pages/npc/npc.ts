import { compose } from 'ramda'
import { choose } from '../../functions/dice.functions'
import { Chacteristic, getChacteristics } from './characteristics'
import { getKinTypes, KinType } from './name'
import { Name } from './name2'
import { getOccupations, Occupation } from './occupation'
import { getQuirks, Quirk } from './quirk'

export type NPC = {
  kin: KinType
  name?: Name | string
  occupation: Occupation
  characteristic: Chacteristic
  quirk: Quirk
}

export const getRandomKinType = compose(choose, getKinTypes)
export const getRandomOccupation = compose(choose, getOccupations)
export const getRandomCharacteristic = compose(choose, getChacteristics)
export const getRandomQuirk = compose(choose, getQuirks)
