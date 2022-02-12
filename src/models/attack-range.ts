export type WeaponRange = 'ArmsLength' | 'Near' | 'Short' | 'Long'
export type MonsterAttackRange = Extract<
  WeaponRange,
  'ArmsLength' | 'Near' | 'Short'
>
