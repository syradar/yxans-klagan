import { compose } from 'rambda'
import { getOccupations } from '../models/occupation.model'
import { choose } from './dice.functions'

export const getRandomOccupation = compose(choose, getOccupations)
