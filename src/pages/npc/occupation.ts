import { compose } from 'rambda'
import { choose } from '../../functions/dice.functions'

const occupation = [
  'Soldier',
  'FortuneSeeker',
  'Bandit',
  'SlaveTrader',
  'TreasureHunter',
  'Beggar',
  'Actor',
  'Lumberjack',
  'Hunter',
  'Farmer',
  'Laborer',
  'Jester',
  'Wanderer',
  'Fisher',
  'Noble',
  'Child',
  'Trader',
  'Brewer',
  'Carpenter',
  'Apprentice',
  'Thief',
  'Druid',
  'Baker',
  'Refugee',
  'Assassin',
  'Smith',
  'Gravedigger',
  'RustBrother',
  'Shepherd',
  'Braggart',
  'Cook',
  'Cultist',
  'Guard',
  'Messenger',
  'Miner',
  'Academic',
] as const

export type Occupation = typeof occupation[number]

export const getOccupations = (): Occupation[] => [...occupation]

export const getRandomOccupation = compose(choose, getOccupations)
