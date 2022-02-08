import { compose } from 'rambda'
import { getChacteristics } from '../models/characteristics.model'
import { choose } from './dice.functions'

export const getRandomCharacteristic = compose(choose, getChacteristics)
