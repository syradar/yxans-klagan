import { humanNames, villageNamesEn, villageNamesSv } from '../data/name.data'
import { Gender } from '../models/gender.model'
import { ValidLanguage } from '../models/language.model'
import { NameList, NameType, VillageNameModel } from '../models/name.model'
import { choose, weightedRandom } from './dice.functions'

const getRandomName = (
  g: Gender,
  lang: ValidLanguage,
  nameList: NameList,
  chooseFunc = choose,
): string[] => {
  const { type, firstName } = getNameTypeAndFirstName(g, nameList)

  switch (type) {
    case NameType.FamilyName: {
      if (!nameList.family || nameList.family.length === 0) {
        return [firstName]
      }

      return [firstName, chooseFunc(nameList.family)]
    }
    case NameType.NickName: {
      if (!nameList.nickName || nameList.nickName.length === 0) {
        return [firstName]
      }

      return [firstName, 'THE', chooseFunc(nameList.nickName)]
    }
    case NameType.HomeName:
      return [
        firstName,
        'OF',
        formatVillageName(getVillagePrefixAndSuffix(lang, chooseFunc), lang),
      ]
    case NameType.FirstName:
    default:
      return [firstName]
  }
}

export const getRandomAilanderName = (
  g: Gender,
  lang: ValidLanguage,
  nameList = humanNames.Ailander,
  chooseFunc = choose,
): string[] => {
  return getRandomName(g, lang, nameList, chooseFunc)
}

export const getRandomAlderlanderName = (
  g: Gender,
  lang: ValidLanguage,
  nameList = humanNames.Ailander,
  chooseFunc = choose,
): string[] => {
  return getRandomName(g, lang, nameList, chooseFunc)
}

export const getRandomAsleneName = (
  g: Gender,
  lang: ValidLanguage,
  nameList = humanNames.Aslene,
  chooseFunc = choose,
): string[] => {
  return getRandomName(g, lang, nameList, chooseFunc)
}

export const getNameTypeAndFirstName = (g: Gender, nl: NameList) => {
  return {
    type: weightedRandom(nl[g].probabilites).type,
    firstName: choose(nl[g].rawNames),
  }
}

export const getVillageNameList = (lang: ValidLanguage): VillageNameModel => {
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

export const getVillagePrefixAndSuffix = (
  lang: ValidLanguage,
  choiceFunc = choose,
): [string, string] => {
  const { prefix, suffix } = getVillageNameList(lang)

  return [choiceFunc(prefix), choiceFunc(suffix)]
}

export const formatVillageName = (
  prefixAndSuffix: [string, string],
  lang: ValidLanguage,
) => {
  const separator = lang === 'en' ? ' ' : ''

  return prefixAndSuffix
    .map((fix) => (lang === 'en' ? capitalize(fix) : fix))
    .join(separator)
}
