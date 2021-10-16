import { humanNames, villageNamesEn, villageNamesSv } from '../data/name.data'
import { Gender } from '../models/gender.model'
import { ValidLanguage } from '../models/language.model'
import { NameList, NameType, VillageNameModel } from '../models/name.model'
import { choose, weightedRandom } from './dice.functions'

export const getRandomAilanderName = (
  g: Gender = Gender.Female,
  lang: ValidLanguage,
): string[] => {
  const { type, firstName } = getNameTypeAndFirstName(g, humanNames.Ailander)

  switch (type) {
    case NameType.FamilyName:
      return [firstName, choose(humanNames.Ailander.family ?? [])]
    case NameType.HomeName:
      return [firstName, 'OF', getRandomVillageName(lang)]
    case NameType.FirstName:
    default:
      return [firstName]
  }
}

export const getRandomAlderlanderarName = (
  g: Gender = Gender.Female,
  lang: ValidLanguage,
): string[] => {
  const { type, firstName } = getNameTypeAndFirstName(g, humanNames.Alderlander)

  switch (type) {
    case NameType.FamilyName:
      return [firstName, choose(humanNames.Alderlander.family ?? [])]
    case NameType.HomeName:
      return [firstName, 'OF', getRandomVillageName(lang)]
    case NameType.FirstName:
    default:
      return [firstName]
  }
}

export const getRandomAsleneName = (
  g: Gender = Gender.Female,
  _: ValidLanguage,
): string[] => {
  const { type, firstName } = getNameTypeAndFirstName(g, humanNames.Aslene)

  switch (type) {
    case NameType.NickName:
      return [firstName, 'THE', choose(humanNames.Aslene.nickName ?? [])]
    case NameType.FirstName:
    default:
      return [firstName]
  }
}

export const getNameTypeAndFirstName = (g: Gender, nl: NameList) => {
  return {
    type: weightedRandom(nl[g].probabilites).type,
    firstName: choose(nl[g].rawNames),
  }
}

const getVillageNameList = (lang: ValidLanguage): VillageNameModel => {
  switch (lang) {
    case 'sv':
      return villageNamesSv
    case 'en':
      return villageNamesEn
    default: {
      const exhaustiveCheck: never = lang
      throw new Error(exhaustiveCheck)
    }
  }
}

export const capitalize = (s: string): string =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`

export const getRandomVillageName = (lang: ValidLanguage) => {
  const { prefix, suffix } = getVillageNameList(lang)
  const separator = lang === 'en' ? ' ' : ''

  return [choose(prefix), choose(suffix)]
    .map((fix) => (lang === 'en' ? capitalize(fix) : fix))
    .join(separator)
}
