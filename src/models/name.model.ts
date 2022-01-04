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
