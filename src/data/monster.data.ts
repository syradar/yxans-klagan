import { Attributes } from '../models/attributes.model'
import { Monster } from '../models/monster.model'

const defaultAttributes: Attributes = {
  agility: 0,
  empathy: 0,
  strength: 0,
  wits: 0,
}

export const bookMonsters: Monster[] = [
  {
    name: 'Giant',
    attributes: { ...defaultAttributes, strength: 12, agility: 2 },
    pageReference: 120,
  },
  {
    name: 'AbyssWorm',
    attributes: { ...defaultAttributes, strength: 14, agility: 2 },
    pageReference: 72,
  },
  {
    name: 'Bloodling',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    pageReference: 74,
  },
  {
    name: 'DragonSmall',
    attributes: {
      strength: 32,
      agility: 2,
      wits: 4,
      empathy: 2,
    },
    pageReference: 82,
  },
  {
    name: 'DragonLarge',
    attributes: {
      strength: 48,
      agility: 4,
      wits: 6,
      empathy: 3,
    },
    pageReference: 82,
  },
  {
    name: 'Drakewyrm',
    attributes: {
      strength: 25,
      agility: 3,
      wits: 5,
      empathy: 2,
    },
    pageReference: 84,
  },
  {
    name: 'DeathKnight',
    attributes: {
      strength: 12,
      agility: 3,
      wits: 3,
      empathy: 2,
    },
    pageReference: 86,
  },
  {
    name: 'Ent',
    attributes: {
      strength: 16,
      agility: 3,
      wits: 5,
      empathy: 3,
    },
    pageReference: 88,
  },
  {
    name: 'Wyvern',
    attributes: { ...defaultAttributes, strength: 14, agility: 5 },
    pageReference: 90,
  },
  {
    name: 'Ghost',
    attributes: {
      strength: 8,
      agility: 3,
      wits: 3,
      empathy: 2,
    },
    pageReference: 92,
  },
  {
    name: 'Gryphon',
    attributes: { ...defaultAttributes, strength: 12, agility: 5 },
    pageReference: 94,
  },
  {
    name: 'GrayBear',
    attributes: { ...defaultAttributes, strength: 14, agility: 2 },
    pageReference: 96,
  },
  {
    name: 'Harpies',
    attributes: {
      strength: 8,
      agility: 3,
      wits: 2,
      empathy: 1,
    },
    pageReference: 98,
  },
  {
    name: 'Hydra',
    attributes: { ...defaultAttributes, strength: 4, agility: 4 },
    pageReference: 100,
  },
  {
    name: 'Insectoid',
    attributes: { ...defaultAttributes, strength: 5, agility: 3 },
    pageReference: 102,
  },
  {
    name: 'GiantSquid',
    attributes: { ...defaultAttributes, strength: 14, agility: 4 },
    pageReference: 106,
  },
  {
    name: 'Manticore',
    attributes: { ...defaultAttributes, strength: 15, agility: 4 },
    pageReference: 108,
  },
  {
    name: 'Minotaur',
    attributes: {
      strength: 10,
      agility: 4,
      wits: 2,
      empathy: 2,
    },
    pageReference: 110,
  },
  {
    name: 'NightWarg',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    pageReference: 112,
  },
  {
    name: 'RestlessDead',
    attributes: { ...defaultAttributes, strength: 3, agility: 2 },
    pageReference: 114,
  },
  {
    name: 'Skeleton',
    attributes: { ...defaultAttributes, strength: 3, agility: 2 },
    pageReference: 114,
  },
  {
    name: 'Ghoul',
    attributes: { ...defaultAttributes, strength: 4, agility: 2 },
    pageReference: 114,
  },
  {
    name: 'SeaSerpent',
    attributes: { ...defaultAttributes, strength: 18, agility: 3 },
    pageReference: 116,
  },
  {
    name: 'StranglingVine',
    attributes: { ...defaultAttributes, strength: 8, agility: 3 },
    pageReference: 118,
  },
  {
    name: 'Troll',
    attributes: { ...defaultAttributes, strength: 8, agility: 3 },
    pageReference: 120,
  },
]
