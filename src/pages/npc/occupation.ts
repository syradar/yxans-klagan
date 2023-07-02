import { translationDict } from '../../functions/translation-dict'

const occupation = [
  'soldier',
  'fortuneSeeker',
  'bandit',
  'slaveTrader',
  'treasureHunter',
  'beggar',
  'actor',
  'lumberjack',
  'hunter',
  'farmer',
  'laborer',
  'jester',
  'wanderer',
  'fisher',
  'noble',
  'child',
  'trader',
  'brewer',
  'carpenter',
  'apprentice',
  'thief',
  'druid',
  'baker',
  'refugee',
  'assassin',
  'smith',
  'gravedigger',
  'rustBrother',
  'shepherd',
  'braggart',
  'cook',
  'cultist',
  'guard',
  'messenger',
  'miner',
  'academic',
] as const

export type Occupation = (typeof occupation)[number]

export const getOccupations = (): Occupation[] => [...occupation]

export const occupationTranslationDict = translationDict(
  occupation,
  'npc',
  'occupation.',
)
