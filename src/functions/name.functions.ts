import { Gender } from '../models/general.model'
import {
  humanNames,
  NameList,
  NameType,
  villageNames,
} from '../models/name.model'
import { choose, weightedRandom } from './dice.functions'

export const getRandomEländerName = (g: Gender = Gender.Female): string => {
  const { type, firstName } = getNameTypeAndFirstName(g, humanNames.Eländer)

  switch (type) {
    case NameType.FamilyName:
      return `${firstName} ${choose(humanNames.Eländer.family ?? [])}`
    case NameType.HomeName:
      return `${firstName} av ${getRandomVillageName()}`
    case NameType.FirstName:
    default:
      return firstName
  }
}

export const getRandomAlderlänningarName = (
  g: Gender = Gender.Female,
): string => {
  const { type, firstName } = getNameTypeAndFirstName(
    g,
    humanNames.Alderlänning,
  )

  switch (type) {
    case NameType.FamilyName:
      return `${firstName} ${choose(humanNames.Eländer.family ?? [])}`
    case NameType.HomeName:
      return `${firstName} av ${getRandomVillageName()}`
    case NameType.FirstName:
    default:
      return firstName
  }
}

export const getRandomAslenerName = (g: Gender = Gender.Female): string => {
  const { type, firstName } = getNameTypeAndFirstName(g, humanNames.Aslener)

  switch (type) {
    case NameType.NickName:
      return `${firstName} den ${choose(humanNames.Aslener.nickName ?? [])}`
    case NameType.FirstName:
    default:
      return firstName
  }
}

export const getNameTypeAndFirstName = (g: Gender, nl: NameList) => {
  return {
    type: weightedRandom(nl[g].probabilites).type,
    firstName: choose(nl[g].rawNames),
  }
}

export const getRandomVillageName = () =>
  `${choose(villageNames.prefix)}${choose(villageNames.suffix)}`
