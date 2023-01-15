import {
  choose,
  WeightedChoice,
  weightedRandom,
} from '../../functions/dice.functions'
import { getFormattedVillageName } from '../../functions/village-name.functions'
import { Gender } from '../../models/gender.model'
import { ValidLanguage } from '../../models/language.model'

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
  'Human',
  'Elf',
  'Dwarf',
  'Ogre',
  'Orc',
  'Wolfkin',
  'Saurian',
  'Whiner',
  'HalflingAndGoblin',
  'Believers',
] as const
export type KinType = typeof kinTypes[number]
export const getKinTypes = () => [...kinTypes]

export type HumanKin =
  | 'Alderlander'
  | 'Ailander'
  | 'Aslene'
  | 'Frailer'
  | 'SilentGuard'
  | 'MaidenDruid'

export type BelieversKin =
  | 'RavenSister'
  | 'BlackWing'
  | 'RustBrother'
  | 'IronGuard'
  | 'HemeSister'

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
  | BelieversKin

export type Kins = HumanKin | ElfKin
export type HumanNames = {
  [H in Extract<HumanKin, 'Alderlander' | 'Ailander' | 'Aslene'>]: NameList
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

      return [firstName, 'THE', chooseFunc(nameList.nickName)]
    }
    case 'HomeName':
      return [firstName, 'OF', getFormattedVillageName(lang, chooseFunc)]
    case 'FirstName':
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
    value: weightedRandom(nl[g].probabilites).value,
    firstName: choose(nl[g].rawNames),
  }
}
