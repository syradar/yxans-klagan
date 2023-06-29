import { defaultAttributes } from '../../../models/attributes.model'
import { CommunityMonster } from '../community-monster.model'

export const communityMonsters: CommunityMonster[] = [
  {
    id: 'giant-spider',
    name: 'common:communityMonster.giantSpider.name',
    attributes: {
      ...defaultAttributes,
      strength: 11,
      agility: 4,
    },
    armor: {
      label: 'Shell',
      values: [false, false],
    },
    description: 'common:communityMonster.giantSpider.description',
    movement: {
      distance: 1,
      type: 'Climbing',
    },
    skills: {
      Melee: 0,
      Move: 2,
      Scouting: 0,
      Stealth: 3,
    },
    attacks: [
      {
        type: 'Bite',
        range: 'ArmsLength',
        damage: (ctx) => ({
          Slash: ctx.attributes.strength + 1,
        }),
        attack: (ctx) => ctx.attributes.agility + 4,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:Attack.Bite.Description',
        chance: 1,
      },
      {
        type: 'Stab',
        range: 'ArmsLength',
        damage: (ctx) => ({
          Stab: ctx.attributes.strength + 2,
          Poison: {
            type: 'Paralyzing',
            potency: 6,
          },
        }),
        attack: (ctx) => ctx.attributes.agility + 5,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:Attack.Stab.Description',
        chance: 1,
      },
      {
        type: 'Pounce',
        range: 'Near',
        damage: (ctx) => ({
          Blunt: ctx.attributes.strength + 2,
        }),
        attack: (ctx) => ctx.attributes.agility + 5,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:Attack.Pounce.Description',
        chance: 1,
      },
      {
        type: 'Webshot',
        range: 'Near',
        damage: (_ctx) => ({
          Poison: {
            type: 'Paralyzing',
            potency: 1,
          },
        }),
        attack: (_ctx) => 7,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:Attack.Webshot.Description',
        chance: 1,
      },
      {
        type: 'PiercingShriek',
        range: 'Near',
        damage: (_ctx) => ({
          Fear: true,
        }),
        attack: (_ctx) => 5,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:Attack.PiercingShriek.Description',
        chance: 1,
      },
      {
        type: 'CallTheBrood',
        range: 'Short',
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:Attack.CallTheBrood.Description',
        chance: 1,
      },
    ],
  },
  {
    id: 'giant-spiderling',
    name: 'common:communityMonster.giantSpiderling.name',
    description: 'common:communityMonster.giantSpiderling.description',
    armor: {
      label: 'Shell',
      values: [false],
    },
    attributes: {
      ...defaultAttributes,
      strength: 4,
      agility: 4,
    },
    movement: {
      distance: 1,
      type: 'Climbing',
    },
    skills: {
      Melee: 2,
      Move: 3,
      Scouting: 0,
      Stealth: 3,
    },
    attacks: [
      {
        type: 'Bite',
        range: 'ArmsLength',
        damage: (ctx) => ({
          Slash: ctx.attributes.strength + 1,
          Poison: {
            type: 'Paralyzing',
            potency: 6,
          },
        }),
        attack: (ctx) => ctx.attributes.agility,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:Attack.Bite.Description',
        chance: 1,
      },
    ],
  },
]
