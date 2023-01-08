import { defaultSkillsValues } from '../../../functions/skills.functions'
import {
  BelieversKin,
  DwarfKin,
  ElfKin,
  HalflingAndGoblinKin,
  HumanKin,
  OgreKin,
  OrcKin,
  SaurianKin,
  WhinerKin,
  WolfKin,
} from '../name'
import { TypicalKin } from '../typical-kin'
import { armors, helmets } from './armor.data'
import { shields } from './shield.data'
import { meleeWeapons, rangedWeapons } from './weapon.data'

export const humanTypicalKins: { [K in HumanKin]: TypicalKin<K, 'Human'> } = {
  Ailander: {
    kin: 'Ailander',
    kinType: 'Human',
    attributes: {
      strength: 3,
      agility: 3,
      wits: 3,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Move: 2,
      Markmanship: 2,
      Healing: 1,
    },
    talents: [],
    gear: ['common:Gear.D6Silver'],
    weapons: [meleeWeapons.ShortSword, rangedWeapons.ShortBow],
    armors: [],
    shields: [],
    helmets: [],
  },
  Frailer: {
    kin: 'Frailer',
    kinType: 'Human',
    attributes: {
      strength: 2,
      agility: 3,
      wits: 4,
      empathy: 4,
    },
    skills: {
      ...defaultSkillsValues(),
      Lore: 2,
      Insight: 2,
      Manipulation: 2,
    },
    talents: [],
    gear: ['common:Gear.InkAndQuill'],
    weapons: [meleeWeapons.Dagger],
    armors: [],
    shields: [],
    helmets: [],
  },
  SilentGuard: {
    kin: 'SilentGuard',
    kinType: 'Human',
    attributes: {
      strength: 4,
      agility: 3,
      wits: 3,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 2,
      Melee: 3,
      Markmanship: 2,
      Insight: 4,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.ShortSpear, rangedWeapons.HeavyCrossbow],
    armors: [armors.Chainmail],
    shields: [shields.Large],
    helmets: [helmets.GreatHelm],
  },
  Alderlander: {
    kin: 'Alderlander',
    kinType: 'Human',
    attributes: {
      strength: 3,
      agility: 3,
      wits: 3,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Move: 1,
      Insight: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.BroadSword],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
  Aslene: {
    kin: 'Aslene',
    kinType: 'Human',
    attributes: {
      strength: 3,
      agility: 4,
      wits: 3,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Markmanship: 2,
      Move: 2,
      AnimalHandling: 2,
    },
    talents: ['common:Talents.HorseMaster'],
    gear: ['common:Gear.RidingHorse'],
    weapons: [meleeWeapons.ShortSpear, rangedWeapons.ShortBow],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
  MaidenDruid: {
    kin: 'MaidenDruid',
    kinType: 'Human',
    attributes: {
      strength: 2,
      agility: 3,
      wits: 4,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Markmanship: 2,
      Lore: 2,
      Manipulation: 2,
      Move: 1,
    },
    talents: ['common:Talents.ShiftingShapes2'],
    gear: [],
    weapons: [meleeWeapons.Dagger, rangedWeapons.ShortBow],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
}

export const elfTypicalKins: { [K in ElfKin]: TypicalKin<K, 'Elf'> } = {
  StillElf: {
    kin: 'StillElf',
    kinType: 'Elf',
    attributes: {
      strength: 3,
      agility: 3,
      wits: 5,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Crafting: 4,
      Lore: 5,
      Insight: 4,
    },
    talents: ['common:Talents.ShiftingShapes3'],
    gear: [],
    weapons: [meleeWeapons.Staff],
    armors: [],
    shields: [],
    helmets: [],
  },
  UnrulyElf: {
    kin: 'UnrulyElf',
    kinType: 'Elf',
    attributes: {
      strength: 3,
      agility: 4,
      wits: 3,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Endurance: 2,
      Stealth: 3,
      Markmanship: 2,
      Scouting: 2,
      Survival: 2,
    },
    talents: ['common:Talents.PathOfTheArrow2'],
    gear: [],
    weapons: [
      meleeWeapons.ShortSpear,
      meleeWeapons.Knife,
      rangedWeapons.LongBow,
    ],
    armors: [],
    shields: [],
    helmets: [],
  },
  GoldenBough: {
    kin: 'GoldenBough',
    kinType: 'Elf',
    attributes: {
      strength: 3,
      agility: 3,
      wits: 4,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Scouting: 2,
      Lore: 3,
      Markmanship: 2,
      Survival: 3,
      AnimalHandling: 3,
    },
    talents: ['common:Talents.PathOfHealing2'],
    gear: [],
    weapons: [meleeWeapons.Falchion, rangedWeapons.ThrowingSpear],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
  Melder: {
    kin: 'Melder',
    kinType: 'Elf',
    attributes: {
      strength: 3,
      agility: 4,
      wits: 4,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Crafting: 4,
      Stealth: 5,
      Lore: 4,
      Survival: 3,
    },
    talents: ['common:Talents.PathOfSight2'],
    gear: [],
    weapons: [meleeWeapons.Knife],
    armors: [],
    shields: [],
    helmets: [],
  },
  RedRunner: {
    kin: 'RedRunner',
    kinType: 'Elf',
    attributes: {
      strength: 4,
      agility: 5,
      wits: 3,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Endurance: 3,
      Melee: 4,
      Stealth: 2,
      Move: 3,
      Markmanship: 4,
      Insight: 3,
      Survival: 2,
    },
    talents: ['common:Talents.PathOfTheEnemy2'],
    gear: [],
    weapons: [
      meleeWeapons.BroadSword,
      meleeWeapons.Dagger,
      rangedWeapons.LongBow,
    ],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
}

export const dwarfTypicalKins: { [K in DwarfKin]: TypicalKin<K, 'Dwarf'> } = {
  Belderranian: {
    kin: 'Belderranian',
    kinType: 'Dwarf',
    attributes: {
      strength: 4,
      agility: 2,
      wits: 3,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 3,
      Melee: 3,
      Crafting: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.Battleaxe],
    armors: [armors.Chainmail],
    shields: [shields.Large],
    helmets: [helmets.ClosedHelmet],
  },
  Meromannian: {
    kin: 'Meromannian',
    kinType: 'Dwarf',
    attributes: {
      strength: 4,
      agility: 3,
      wits: 3,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 2,
      Melee: 2,
      Insight: 2,
      Markmanship: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.Warhammer, rangedWeapons.LightCrossbow],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
  Canide: {
    kin: 'Canide',
    kinType: 'Dwarf',
    attributes: {
      strength: 5,
      agility: 3,
      wits: 2,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 4,
      Endurance: 2,
      Melee: 3,
      Scouting: 2,
      Survival: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.TwoHandedAxe],
    armors: [armors.Plate],
    shields: [],
    helmets: [helmets.ClosedHelmet],
  },
  Crombe: {
    kin: 'Crombe',
    kinType: 'Dwarf',
    attributes: {
      strength: 3,
      agility: 3,
      wits: 4,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Crafting: 3,
      Lore: 2,
      Performance: 3,
      Healing: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.Mace],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
}

export const ogreTypicalKins: { [K in OgreKin]: TypicalKin<K, 'Ogre'> } = {
  Ogre: {
    kin: 'Ogre',
    kinType: 'Ogre',
    description: 'common:Description.Ogre',
    attributes: {
      strength: 6,
      agility: 2,
      wits: 1,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 4,
      Endurance: 2,
      Melee: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.LargeClub],
    armors: [],
    shields: [],
    helmets: [],
  },
}

export const orcTypicalKins: { [K in OrcKin]: TypicalKin<K, 'Orc'> } = {
  Urhur: {
    kin: 'Urhur',
    kinType: 'Orc',
    attributes: {
      strength: 4,
      agility: 3,
      wits: 3,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 2,
      Melee: 2,
      Lore: 1,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.Scimitar],
    armors: [armors.StuddedLeather],
    shields: [shields.Large],
    helmets: [],
  },
  Roka: {
    kin: 'Roka',
    kinType: 'Orc',
    attributes: {
      strength: 5,
      agility: 2,
      wits: 2,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 2,
      Melee: 2,
      Scouting: 1,
      Survival: 1,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.Flail],
    armors: [armors.StuddedLeather],
    shields: [],
    helmets: [],
  },
  Isir: {
    kin: 'Isir',
    kinType: 'Orc',
    description: 'common:Description.Isir',
    attributes: {
      strength: 4,
      agility: 3,
      wits: 3,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 2,
      Melee: 3,
      Markmanship: 2,
      Survival: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.TwoHandedSword],
    armors: [armors.StuddedLeather],
    shields: [],
    helmets: [helmets.ClosedHelmet],
  },
  Viraga: {
    kin: 'Viraga',
    kinType: 'Orc',
    attributes: {
      strength: 3,
      agility: 4,
      wits: 4,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Stealth: 2,
      Move: 2,
      Markmanship: 2,
      Lore: 2,
      Insight: 3,
      Manipulation: 2,
    },
    talents: ['common:Talents.PathOfKiller2'],
    gear: [],
    weapons: [
      meleeWeapons.ShortSword,
      rangedWeapons.ThrowingKnife,
      rangedWeapons.ThrowingKnife,
      rangedWeapons.ThrowingKnife,
      rangedWeapons.ThrowingKnife,
    ],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
  Drifter: {
    kin: 'Drifter',
    kinType: 'Orc',
    attributes: {
      strength: 4,
      agility: 3,
      wits: 2,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Might: 1,
      Melee: 2,
      Insight: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.Scimitar],
    armors: [armors.StuddedLeather],
    shields: [],
    helmets: [helmets.StuddedLeather],
  },
}

export const wolfkinTypicalKins: { [K in WolfKin]: TypicalKin<K, 'Wolfkin'> } =
  {
    Wolfkin: {
      kin: 'Wolfkin',
      kinType: 'Wolfkin',
      attributes: {
        strength: 4,
        agility: 4,
        wits: 2,
        empathy: 2,
      },
      skills: {
        ...defaultSkillsValues(),
        Might: 1,
        Endurance: 3,
        Melee: 3,
        Scouting: 3,
        Survival: 2,
      },
      talents: ['common:Talents.PathOfForest2'],
      gear: [],
      weapons: [meleeWeapons.ShortSpear, meleeWeapons.Knife],
      armors: [armors.Leather],
      shields: [],
      helmets: [],
    },
  }

export const saurianTypicalKins: {
  [K in SaurianKin]: TypicalKin<K, 'Saurian'>
} = {
  Saurian: {
    kin: 'Saurian',
    kinType: 'Saurian',
    attributes: {
      strength: 4,
      agility: 3,
      wits: 2,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Endurance: 1,
      Melee: 2,
      Scouting: 2,
      Survival: 3,
    },
    talents: [],
    gear: [],
    weapons: [],
    armors: [
      {
        bodyPart: 'Body',
        type: 'Natural',
        rating: 3,
        features: [],
      },
    ],
    shields: [],
    helmets: [],
  },
}

export const whinerTypicalKins: {
  [K in WhinerKin]: TypicalKin<K, 'Whiner'>
} = {
  Whiner: {
    kin: 'Whiner',
    kinType: 'Whiner',
    attributes: {
      strength: 1,
      agility: 3,
      wits: 2,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Stealth: 3,
      Move: 3,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.ShortSpear],
    armors: [],
    shields: [],
    helmets: [],
  },
}

export const halflingAndGoblinTypicalKins: {
  [K in HalflingAndGoblinKin]: TypicalKin<K, 'HalflingAndGoblin'>
} = {
  Halfling: {
    kin: 'Halfling',
    kinType: 'HalflingAndGoblin',
    attributes: {
      strength: 2,
      agility: 4,
      wits: 3,
      empathy: 4,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 1,
      Crafting: 2,
      Stealth: 2,
      SleightOfHand: 1,
      Insight: 2,
      Manipulation: 2,
    },
    talents: [],
    gear: [],
    weapons: [meleeWeapons.ShortSword, rangedWeapons.Sling],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
  Goblin: {
    kin: 'Goblin',
    kinType: 'HalflingAndGoblin',
    description: 'common:Description.Goblin',
    attributes: {
      strength: 2,
      agility: 4,
      wits: 4,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 1,
      Move: 1,
      Stealth: 2,
      Markmanship: 1,
      Insight: 2,
      Manipulation: 2,
    },
    talents: [],
    gear: ['common:Gear.D6Copper'],
    weapons: [
      meleeWeapons.ShortSword,
      meleeWeapons.ShortSpear,
      rangedWeapons.Sling,
    ],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
}

export const believerTypicalKins: {
  [K in BelieversKin]: TypicalKin<K, 'Believers'>
} = {
  RavenSister: {
    kin: 'RavenSister',
    kinType: 'Believers',
    attributes: {
      strength: 3,
      agility: 3,
      wits: 3,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Move: 1,
      Markmanship: 2,
      Lore: 3,
      Survival: 1,
      Insight: 2,
      Manipulation: 1,
      Healing: 2,
    },
    talents: ['common:Talents.PathOfHealing2OrShiftingShapes2OrPathOfSight2'],
    gear: ['common:Gear.D6Copper'],
    weapons: [meleeWeapons.Staff, meleeWeapons.Dagger],
    armors: [],
    shields: [],
    helmets: [],
  },
  BlackWing: {
    kin: 'BlackWing',
    kinType: 'Believers',
    attributes: {
      strength: 4,
      agility: 5,
      wits: 4,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 4,
      Move: 3,
      Stealth: 4,
      Markmanship: 4,
      Lore: 1,
      Survival: 2,
      Insight: 3,
      Manipulation: 2,
    },
    talents: [
      'common:Talents.PathOfKiller2',
      'common:Talents.Executioner2',
      'common:Talents.FastFootwork',
    ],
    gear: ['common:Gear.VialOfPoison', 'common:Gear.ValuableFind'],
    weapons: [
      meleeWeapons.BroadSword,
      meleeWeapons.Scimitar,
      meleeWeapons.Dagger,
      rangedWeapons.LightCrossbow,
    ],
    armors: [armors.Leather],
    shields: [],
    helmets: [],
  },
  RustBrother: {
    kin: 'RustBrother',
    kinType: 'Believers',
    attributes: {
      strength: 3,
      agility: 3,
      wits: 3,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 2,
      Move: 1,
      Markmanship: 2,
      Lore: 3,
      Survival: 1,
      Insight: 2,
      Manipulation: 1,
      Healing: 2,
    },
    talents: ['common:Talents.PathOfBlood2OrPathOfDeath2'],
    gear: ['common:Gear.D6Copper'],
    weapons: [meleeWeapons.Staff, meleeWeapons.Dagger],
    armors: [],
    shields: [],
    helmets: [],
  },
  IronGuard: {
    kin: 'IronGuard',
    kinType: 'Believers',
    attributes: {
      strength: 5,
      agility: 4,
      wits: 3,
      empathy: 2,
    },
    skills: {
      ...defaultSkillsValues(),
      Melee: 4,
      Move: 2,
      Might: 2,
      Endurance: 2,
      Markmanship: 3,
      Scouting: 2,
    },
    talents: [
      'common:Talents.PathOfTheBlade2OrPathOfTheEnemy2',
      'common:Talents.Threatening',
      'common:Talents.ColdBlooded',
    ],
    gear: ['common:Gear.CombatTrainedHorse', 'common:Gear.ValuableFind'],
    weapons: [
      meleeWeapons.LongSword,
      meleeWeapons.Flail,
      rangedWeapons.HeavyCrossbow,
    ],
    armors: [armors.Chainmail, armors.Plate],
    shields: [shields.Large],
    helmets: [helmets.GreatHelm],
  },
  HemeSister: {
    kin: 'HemeSister',
    kinType: 'Believers',
    attributes: {
      strength: 3,
      agility: 3,
      wits: 3,
      empathy: 3,
    },
    skills: {
      ...defaultSkillsValues(),
      Lore: 2,
      Insight: 2,
      Healing: 2,
    },
    talents: ['common:Talents.PathOfBlood2OrPathOfDeath2'],
    gear: ['common:Gear.SimpleFind'],
    weapons: [meleeWeapons.Staff, meleeWeapons.Dagger],
    armors: [],
    shields: [],
    helmets: [],
  },
}
