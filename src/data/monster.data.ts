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
    name: 'common:Monster.Giant',
    attributes: { ...defaultAttributes, strength: 12, agility: 2 },
    pageReference: 120,
  },
  {
    name: 'common:Monster.AbyssWorm',
    attributes: { ...defaultAttributes, strength: 14, agility: 2 },
    pageReference: 72,
  },
  {
    name: 'common:Monster.Bloodling',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    pageReference: 74,
  },
  {
    name: 'common:Monster.DragonSmall',
    attributes: {
      strength: 32,
      agility: 2,
      wits: 4,
      empathy: 2,
    },
    pageReference: 82,
  },
  {
    name: 'common:Monster.DragonLarge',
    attributes: {
      strength: 48,
      agility: 4,
      wits: 6,
      empathy: 3,
    },
    pageReference: 82,
  },
  {
    name: 'common:Monster.Drakewyrm',
    attributes: {
      strength: 25,
      agility: 3,
      wits: 5,
      empathy: 2,
    },
    pageReference: 84,
  },
  {
    name: 'common:Monster.DeathKnight',
    attributes: {
      strength: 12,
      agility: 3,
      wits: 3,
      empathy: 2,
    },
    pageReference: 86,
  },
  {
    name: 'common:Monster.Ent',
    attributes: {
      strength: 16,
      agility: 3,
      wits: 5,
      empathy: 3,
    },
    pageReference: 88,
  },
  {
    name: 'common:Monster.Wyvern',
    attributes: { ...defaultAttributes, strength: 14, agility: 5 },
    pageReference: 90,
  },
  {
    name: 'common:Monster.Ghost',
    attributes: {
      strength: 8,
      agility: 3,
      wits: 3,
      empathy: 2,
    },
    pageReference: 92,
  },
  {
    name: 'common:Monster.Gryphon',
    attributes: { ...defaultAttributes, strength: 12, agility: 5 },
    pageReference: 94,
  },
  {
    name: 'common:Monster.GrayBear',
    attributes: { ...defaultAttributes, strength: 14, agility: 2 },
    pageReference: 96,
  },
  {
    name: 'common:Monster.Harpies',
    attributes: {
      strength: 8,
      agility: 3,
      wits: 2,
      empathy: 1,
    },
    pageReference: 98,
  },
  {
    name: 'common:Monster.Hydra',
    attributes: { ...defaultAttributes, strength: 4, agility: 4 },
    pageReference: 100,
  },
  {
    name: 'common:Monster.Insectoid',
    attributes: { ...defaultAttributes, strength: 5, agility: 3 },
    pageReference: 102,
  },
  {
    name: 'common:Monster.GiantSquid',
    attributes: { ...defaultAttributes, strength: 14, agility: 4 },
    pageReference: 106,
  },
  {
    name: 'common:Monster.Manticore',
    attributes: { ...defaultAttributes, strength: 15, agility: 4 },
    pageReference: 108,
  },
  {
    name: 'common:Monster.Minotaur',
    attributes: {
      strength: 10,
      agility: 4,
      wits: 2,
      empathy: 2,
    },
    pageReference: 110,
  },
  {
    name: 'common:Monster.NightWarg',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    pageReference: 112,
  },
  {
    name: 'common:Monster.RestlessDead',
    attributes: { ...defaultAttributes, strength: 3, agility: 2 },
    pageReference: 114,
  },
  {
    name: 'common:Monster.Skeleton',
    attributes: { ...defaultAttributes, strength: 3, agility: 2 },
    pageReference: 114,
  },
  {
    name: 'common:Monster.Ghoul',
    attributes: { ...defaultAttributes, strength: 4, agility: 2 },
    pageReference: 114,
  },
  {
    name: 'common:Monster.SeaSerpent',
    attributes: { ...defaultAttributes, strength: 18, agility: 3 },
    pageReference: 116,
  },
  {
    name: 'common:Monster.StranglingVine',
    attributes: { ...defaultAttributes, strength: 8, agility: 3 },
    pageReference: 118,
  },
  {
    name: 'common:Monster.Troll',
    attributes: { ...defaultAttributes, strength: 8, agility: 3 },
    pageReference: 120,
  },
]
