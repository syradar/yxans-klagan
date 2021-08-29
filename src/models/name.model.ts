export interface NameList {
  male: readonly string[]
  female: readonly string[]
  family: readonly string[]
}

export enum KinType {
  Human = 'Human',
  Elf = 'Elf',
}

export enum HumanKin {
  Alderlänning = 'Alderlänning',
  Eländer = 'Eländer',
}

export enum ElfKin {
  Elf = 'Elf',
}

export type Kins = {
  [KinType.Human]: HumanKin
  [KinType.Elf]: ElfKin
}
