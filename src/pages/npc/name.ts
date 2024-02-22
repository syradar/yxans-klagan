import {
  choose,
  WeightedChoice,
  weightedRandom,
} from '../../functions/dice.functions'
import { translationDict } from '../../functions/translation-dict'
import { getFormattedVillageName } from '../../functions/village-name.functions'
import { ValidLanguage } from '../../hooks/useValidLanguage'
import { Gender } from '../../models/gender.model'

import { humanNames } from './data/name.data'

export type NameType = 'FirstName' | 'FamilyName' | 'HomeName' | 'NickName'

type WeightedName = WeightedChoice<NameType>

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

export const kinTypes = [
  'human',
  'elf',
  'dwarf',
  'ogre',
  'orc',
  'wolfkin',
  'saurian',
  'whiner',
  'halflingAndGoblin',
  'believers',
] as const
export type KinType = (typeof kinTypes)[number]
export const getKinTypes = () => [...kinTypes]
type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S

export const kinTypeTranslationDict: Record<
  KinType,
  CamelToSnakeCase<KinType>
> = {
  human: 'human',
  elf: 'elf',
  dwarf: 'dwarf',
  ogre: 'ogre',
  orc: 'orc',
  wolfkin: 'wolfkin',
  saurian: 'saurian',
  whiner: 'whiner',
  halflingAndGoblin: 'halfling_and_goblin',
  believers: 'believers',
}

const humanKins = [
  'alderlander',
  'ailander',
  'aslene',
  'frailer',
  'silentGuard',
  'maidenDruid',
] as const
export type HumanKin = (typeof humanKins)[number]
export const humanKinTranslationDict = translationDict(
  humanKins,
  'common',
  'kin.human.',
)

export type BelieversKin =
  | 'ravenSister'
  | 'blackWing'
  | 'rustBrother'
  | 'ironGuard'
  | 'hemeSister'

export type ElfKin =
  | 'stillElf'
  | 'unrulyElf'
  | 'goldenBough'
  | 'melder'
  | 'redRunner'

export type DwarfKin = 'belderranian' | 'meromannian' | 'canide' | 'crombe'

export type OgreKin = 'ogre'

export type OrcKin = 'urhur' | 'roka' | 'isir' | 'viraga' | 'drifter'

export type WolfKin = 'wolfkin'

export type SaurianKin = 'saurian'

export type WhinerKin = 'whiner'

export type HalflingAndGoblinKin = 'halfling' | 'goblin'

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
  | BelieversKin

export type SubKin<K extends KinType> = K extends 'human'
  ? HumanKin
  : K extends 'elf'
    ? ElfKin
    : K extends 'dwarf'
      ? DwarfKin
      : K extends 'ogre'
        ? OgreKin
        : K extends 'orc'
          ? OrcKin
          : K extends 'wolfkin'
            ? WolfKin
            : K extends 'saurian'
              ? SaurianKin
              : K extends 'whiner'
                ? WhinerKin
                : K extends 'halflingAndGoblin'
                  ? HalflingAndGoblinKin
                  : K extends 'believers'
                    ? BelieversKin
                    : never

export type Kins = HumanKin | ElfKin
export type HumanNames = {
  [H in Extract<HumanKin, 'alderlander' | 'ailander' | 'aslene'>]: NameList
}

const getRandomName = (
  g: Gender,
  lang: ValidLanguage,
  nameList: NameList,
  chooseFunc = choose,
): string[] => {
  const { value, firstName } = getNameTypeAndFirstName(g, nameList)

  switch (value) {
    case 'FamilyName': {
      if (!nameList.family || nameList.family.length === 0) {
        return [firstName]
      }

      return [firstName, chooseFunc(nameList.family)]
    }
    case 'NickName': {
      if (!nameList.nickName || nameList.nickName.length === 0) {
        return [firstName]
      }

      return [firstName, 'names:the', chooseFunc(nameList.nickName)]
    }
    case 'HomeName':
      return [firstName, 'names:of', getFormattedVillageName(lang, chooseFunc)]
    case 'FirstName':
    default:
      return [firstName]
  }
}

export const getRandomAilanderName = (
  g: Gender,
  lang: ValidLanguage,
  nameList = humanNames.ailander,
  chooseFunc = choose,
): string[] => {
  return getRandomName(g, lang, nameList, chooseFunc)
}

export const getRandomAlderlanderName = (
  g: Gender,
  lang: ValidLanguage,
  nameList = humanNames.ailander,
  chooseFunc = choose,
): string[] => {
  return getRandomName(g, lang, nameList, chooseFunc)
}

export const getRandomAsleneName = (
  g: Gender,
  lang: ValidLanguage,
  nameList = humanNames.aslene,
  chooseFunc = choose,
): string[] => {
  return getRandomName(g, lang, nameList, chooseFunc)
}

export const getNameTypeAndFirstName = (g: Gender, nl: NameList) => {
  return {
    value: weightedRandom(nl[g].probabilites).value,
    firstName: choose(nl[g].rawNames),
  }
}
