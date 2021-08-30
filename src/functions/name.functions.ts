import { Gender } from '../models/general.model'
import {
  humanNames,
  NameList,
  NameType,
  villageNames,
} from '../models/name.model'
import { choose, weightedRandom } from './dice.functions'

export const getRandomEländerName = (gender: Gender = Gender.Female) => {
  const { type, firstName } = getNameTypeAndFirstName(
    gender,
    humanNames.Eländer,
  )

  switch (type) {
    case NameType.FamilyName:
      return `${firstName} ${choose(humanNames.Eländer.family)}`
    case NameType.HomeName:
      return `${firstName} av ${getRandomVillageName()}`
    case NameType.FirstName:
    default:
      return firstName
  }
}

export const getRandomAlderlänningarName = (gender: Gender = Gender.Female) => {
  const { type, firstName } = getNameTypeAndFirstName(
    gender,
    humanNames.Alderlänning,
  )

  switch (type) {
    case NameType.FamilyName:
      return `${firstName} ${choose(humanNames.Eländer.family)}`
    case NameType.HomeName:
      return `${firstName} av ${getRandomVillageName()}`
    case NameType.FirstName:
    default:
      return firstName
  }
}

export const getRandomVillageName = () =>
  `${choose(villageNames.prefix)}${choose(villageNames.suffix)}`

export const getNameTypeAndFirstName = (g: Gender, nl: NameList) => {
  switch (g) {
    case Gender.Male:
      return {
        type: weightedRandom(nl.male.probabilites).type,
        firstName: choose(nl.male.rawNames),
      }

    case Gender.Female:
    default:
      return {
        type: weightedRandom(nl.female.probabilites).type,
        firstName: choose(nl.female.rawNames),
      }
  }
}
