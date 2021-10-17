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

export enum KinType {
  Human = 'Human',
  Elf = 'Elf',
}

export enum HumanKin {
  Alderlander = 'Alderlander',
  Ailander = 'Ailander',
  Aslene = 'Aslene',
}

export enum ElfKin {
  Elf = 'Elf',
}

export type Kins = {
  [KinType.Human]: HumanKin
  [KinType.Elf]: ElfKin
}

export type HumanNames = { [H in Kins['Human']]: NameList }

export interface VillageNameModel {
  prefix: readonly string[]
  suffix: readonly string[]
}
