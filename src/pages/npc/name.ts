import { choose, weightedRandom } from '../../functions/dice.functions'
import { capitalize } from '../../functions/utils.functions'
import { Gender } from '../../models/gender.model'
import { ValidLanguage } from '../../models/language.model'

import { humanNames, villageNamesSv, villageNamesEn } from './data/name.data'

export enum NameType {
  FirstName = 'FirstName',
  FamilyName = 'FamilyName',
  HomeName = 'HomeName',
  NickName = 'NickName',
}

interface WeightedName {
  weight: number
  type: NameType
}

export interface NameList {
  Male: {
    probabilites: WeightedName[]
    rawNames: readonly string[]
  }
  Female: {
    probabilites: WeightedName[]
    rawNames: readonly string[]
  }
  family?: readonly string[]
  nickName?: readonly string[]
}

export type KinType =
  | 'Human'
  | 'Elf'
  | 'Dwarf'
  | 'Ogre'
  | 'Orc'
  | 'Wolfkin'
  | 'Saurian'
  | 'Whiner'
  | 'HalflingAndGoblin'

export type HumanKin =
  | 'Alderlander'
  | 'Ailander'
  | 'Aslene'
  | 'Frailer'
  | 'SilentGuard'
  | 'MaidenDruid'

export type ElfKin =
  | 'StillElf'
  | 'UnrulyElf'
  | 'GoldenBough'
  | 'Melder'
  | 'RedRunner'

export type DwarfKin = 'Belderranian' | 'Meromannian' | 'Canide' | 'Crombe'

export type OgreKin = 'Ogre'

export type OrcKin = 'Urhur' | 'Roka' | 'Isir' | 'Viraga' | 'Drifter'

export type WolfKin = 'Wolfkin'

export type SaurianKin = 'Saurian'

export type WhinerKin = 'Whiner'

export type HalflingAndGoblinKin = 'Halfling' | 'Goblin'

export type TypicalKins =
  | HumanKin
  | ElfKin
  | DwarfKin
  | OgreKin
  | OrcKin
  | WolfKin
  | SaurianKin
  | WhinerKin
  | HalflingAndGoblinKin

export type Kins = HumanKin | ElfKin
export type HumanNames = {
  [H in Extract<HumanKin, 'Alderlander' | 'Ailander' | 'Aslene'>]: NameList
}

export interface VillageNameModel {
  prefix: readonly string[]
  suffix: readonly string[]
}

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
