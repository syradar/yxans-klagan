import { MeleeWeaponType, RangedWeaponType, Weapon } from '../weapon'

export const meleeWeapons: { [W in MeleeWeaponType]: Weapon<W, 'melee'> } = {
  knife: {
    name: 'knife',
    category: 'melee',
    grip: '1h',
    bonus: 1,
    damage: 1,
    range: 'armsLength',
    features: ['light', 'pointed'],
  },
  dagger: {
    name: 'dagger',
    category: 'melee',
    grip: '1h',
    bonus: 1,
    damage: 1,
    range: 'armsLength',
    features: ['light', 'edged', 'pointed'],
  },
  falchion: {
    name: 'falchion',
    category: 'melee',
    grip: '1h',
    bonus: 1,
    damage: 2,
    range: 'armsLength',
    features: ['edged', 'pointed'],
  },
  shortSword: {
    name: 'shortSword',
    category: 'melee',
    grip: '1h',
    bonus: 2,
    damage: 1,
    range: 'armsLength',
    features: ['edged', 'parrying', 'pointed'],
  },
  broadSword: {
    name: 'broadSword',
    category: 'melee',
    grip: '1h',
    bonus: 2,
    damage: 2,
    range: 'armsLength',
    features: ['edged', 'parrying', 'pointed'],
  },
  longSword: {
    name: 'longSword',
    category: 'melee',
    grip: '1h',
    bonus: 2,
    damage: 2,
    range: 'armsLength',
    features: ['heavy', 'edged', 'pointed', 'parrying'],
  },
  twoHandedSword: {
    name: 'twoHandedSword',
    category: 'melee',
    grip: '2h',
    bonus: 2,
    damage: 3,
    range: 'armsLength',
    features: ['heavy', 'edged', 'pointed', 'parrying'],
  },
  scimitar: {
    name: 'scimitar',
    category: 'melee',
    grip: '1h',
    bonus: 1,
    damage: 2,
    range: 'armsLength',
    features: ['edged', 'pointed', 'hook', 'parrying'],
  },
  handaxe: {
    name: 'handaxe',
    category: 'melee',
    grip: '1h',
    bonus: 2,
    damage: 2,
    range: 'armsLength',
    features: ['edged', 'hook'],
  },
  battleaxe: {
    name: 'battleaxe',
    category: 'melee',
    grip: '1h',
    bonus: 2,
    damage: 2,
    range: 'armsLength',
    features: ['heavy', 'edged', 'hook'],
  },
  twoHandedAxe: {
    name: 'twoHandedAxe',
    category: 'melee',
    grip: '2h',
    bonus: 2,
    damage: 3,
    range: 'armsLength',
    features: ['heavy', 'edged', 'hook'],
  },
  mace: {
    name: 'mace',
    category: 'melee',
    grip: '1h',
    bonus: 2,
    damage: 1,
    range: 'armsLength',
    features: ['blunt'],
  },
  morningstar: {
    name: 'morningstar',
    category: 'melee',
    grip: '1h',
    bonus: 2,
    damage: 2,
    range: 'armsLength',
    features: ['blunt'],
  },
  warhammer: {
    name: 'warhammer',
    category: 'melee',
    grip: '1h',
    bonus: 2,
    damage: 2,
    range: 'armsLength',
    features: ['blunt', 'hook'],
  },
  flail: {
    name: 'flail',
    category: 'melee',
    grip: '1h',
    bonus: 1,
    damage: 2,
    range: 'near',
    features: ['blunt'],
  },
  club: {
    name: 'club',
    category: 'melee',
    grip: '1h',
    bonus: 1,
    damage: 1,
    range: 'armsLength',
    features: ['blunt'],
  },
  largeClub: {
    name: 'largeClub',
    category: 'melee',
    grip: '2h',
    bonus: 1,
    damage: 2,
    range: 'armsLength',
    features: ['heavy', 'blunt'],
  },
  heavyWarhammer: {
    name: 'heavyWarhammer',
    category: 'melee',
    grip: '2h',
    bonus: 2,
    damage: 3,
    range: 'armsLength',
    features: ['heavy', 'blunt', 'hook'],
  },
  staff: {
    name: 'staff',
    category: 'melee',
    grip: '2h',
    bonus: 1,
    damage: 1,
    range: 'near',
    features: ['blunt', 'hook', 'parrying'],
  },
  shortSpear: {
    name: 'shortSpear',
    category: 'melee',
    grip: '1h',
    bonus: 1,
    damage: 1,
    range: 'near',
    features: ['pointed'],
  },
  longSpear: {
    name: 'longSpear',
    category: 'melee',
    grip: '2h',
    bonus: 2,
    damage: 1,
    range: 'near',
    features: ['pointed'],
  },
  pike: {
    name: 'pike',
    category: 'melee',
    grip: '2h',
    bonus: 2,
    damage: 2,
    range: 'near',
    features: ['heavy', 'pointed'],
  },
  halberd: {
    name: 'halberd',
    category: 'melee',
    grip: '2h',
    bonus: 2,
    damage: 2,
    range: 'near',
    features: ['heavy', 'pointed', 'edged', 'hook'],
  },
  trident: {
    name: 'trident',
    category: 'melee',
    grip: '2h',
    bonus: 1,
    damage: 2,
    range: 'near',
    features: ['pointed', 'hook'],
  },
}

export const rangedWeapons: { [W in RangedWeaponType]: Weapon<W, 'ranged'> } = {
  throwingKnife: {
    name: 'throwingKnife',
    category: 'ranged',
    grip: '1h',
    bonus: 1,
    damage: 1,
    range: 'near',
    features: ['light'],
  },
  throwingAxe: {
    name: 'throwingAxe',
    category: 'ranged',
    grip: '1h',
    bonus: 1,
    damage: 2,
    range: 'near',
    features: [],
  },
  throwingSpear: {
    name: 'throwingSpear',
    category: 'ranged',
    grip: '1h',
    bonus: 2,
    damage: 1,
    range: 'short',
    features: [],
  },
  sling: {
    name: 'sling',
    category: 'ranged',
    grip: '1h',
    bonus: 1,
    damage: 1,
    range: 'short',
    features: ['light'],
  },
  shortBow: {
    name: 'shortBow',
    category: 'ranged',
    grip: '2h',
    bonus: 2,
    damage: 1,
    range: 'short',
    features: ['light'],
  },
  longBow: {
    name: 'longBow',
    category: 'ranged',
    grip: '2h',
    bonus: 2,
    damage: 1,
    range: 'long',
    features: ['light'],
  },
  lightCrossbow: {
    name: 'lightCrossbow',
    category: 'ranged',
    grip: '2h',
    bonus: 2,
    damage: 2,
    range: 'long',
    features: ['loadingIsLongAction'],
  },
  heavyCrossbow: {
    name: 'heavyCrossbow',
    category: 'ranged',
    grip: '2h',
    bonus: 1,
    damage: 3,
    range: 'long',
    features: ['heavy', 'loadingIsLongAction'],
  },
}
