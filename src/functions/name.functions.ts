import { humanNames } from '../data/name.data'
import { choose } from './dice.functions'

export const getRandomEländerName = () => {
  return choose(humanNames.Eländer.male)
}
