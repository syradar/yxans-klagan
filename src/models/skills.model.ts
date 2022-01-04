export type AllSkills =
  | 'Might'
  | 'Endurance'
  | 'Melee'
  | 'Crafting'
  | 'Stealth'
  | 'SleightOfHand'
  | 'Move'
  | 'Markmanship'
  | 'Scouting'
  | 'Lore'
  | 'Survival'
  | 'Insight'
  | 'Manipulation'
  | 'Performance'
  | 'Healing'
  | 'AnimalHandling'

export type MonsterSkills = Extract<
  AllSkills,
  'Move' | 'Melee' | 'Scouting' | 'Stealth'
>

export type AllSkillsValues = { [S in AllSkills]: number }
export type MonsterSkillsValues = { [S in MonsterSkills]: number }

export type AllSkillsValuesViewModel = [AllSkills, number][]
