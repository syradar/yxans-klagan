import { defaultAttributes } from '../../../models/attributes.model'
import { CommunityMonster } from '../community-monster.model'

export const communityMonsters: CommunityMonster[] = [
  {
    id: 'giant-spider',
    name: 'common:community_monster.giant_spider.name',
    description: 'common:community_monster.giant_spider.description',
    credits: [{ name: 'Bjorn Heikenberg' }],
    attributes: {
      ...defaultAttributes,
      strength: 11,
      agility: 4,
    },
    armor: {
      label: 'shell',
      values: [false, false],
    },
    movement: {
      distance: 1,
      type: 'climbing',
    },
    skills: {
      melee: 0,
      move: 2,
      scouting: 0,
      stealth: 3,
    },
    attacks: [
      {
        type: 'bite',
        range: 'armsLength',
        damage: (ctx) => ({
          slash: ctx.attributes.strength + 1,
        }),
        attack: (ctx) => ctx.attributes.agility + 4,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.bite.description',
        chance: 1,
      },
      {
        type: 'stab',
        range: 'armsLength',
        damage: (ctx) => ({
          stab: ctx.attributes.strength + 2,
          poison: {
            type: 'paralyzing',
            potency: 6,
          },
        }),
        attack: (ctx) => ctx.attributes.agility + 5,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.stab.description',
        chance: 1,
      },
      {
        type: 'pounce',
        range: 'near',
        damage: (ctx) => ({
          blunt: ctx.attributes.strength + 2,
        }),
        attack: (ctx) => ctx.attributes.agility + 5,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.pounce.description',
        chance: 1,
      },
      {
        type: 'webshot',
        range: 'near',
        damage: (_ctx) => ({
          poison: {
            type: 'paralyzing',
            potency: 1,
          },
        }),
        attack: (_ctx) => 7,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.webshot.description',
        chance: 1,
      },
      {
        type: 'piercing_shriek',
        range: 'near',
        damage: (_ctx) => ({
          fear: true,
        }),
        attack: (_ctx) => 5,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.piercing_shriek.description',
        chance: 1,
      },
      {
        type: 'call_the_brood',
        range: 'short',
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.call_the_brood.description',
        chance: 1,
      },
    ],
  },
  {
    id: 'giant-spiderling',
    name: 'common:community_monster.giant_spiderling.name',
    description: 'common:community_monster.giant_spiderling.description',
    credits: [{ name: 'Bjorn Heikenberg' }],
    armor: {
      label: 'shell',
      values: [false],
    },
    attributes: {
      ...defaultAttributes,
      strength: 4,
      agility: 4,
    },
    movement: {
      distance: 1,
      type: 'climbing',
    },
    skills: {
      melee: 2,
      move: 3,
      scouting: 0,
      stealth: 3,
    },
    attacks: [
      {
        type: 'bite',
        range: 'armsLength',
        damage: (ctx) => ({
          slash: ctx.attributes.strength + 1,
          poison: {
            type: 'paralyzing',
            potency: 6,
          },
        }),
        attack: (ctx) => ctx.attributes.agility,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.bite.description',
        chance: 1,
      },
    ],
  },
  {
    id: 'golem-clay',
    name: 'common:community_monster.golem_clay.name',
    description: 'common:community_monster.golem_clay.description',
    credits: [{ name: 'Craig Atkins' }],
    attributes: {
      ...defaultAttributes,
      strength: 11,
      agility: 3,
    },
    armor: {
      label: 'shell',
      values: [false, false, false, false, false],
    },
    movement: {
      distance: 1,
      type: 'running',
    },
    skills: {
      melee: 0,
      move: 0,
      scouting: 0,
      stealth: 0,
    },
    attacks: [
      {
        type: 'claySmash',
        range: 'armsLength',
        damage: () => ({
          blunt:  1,
        }),
        attack: () => 9,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.clay_smash.description',
        chance: 1,
      },
      {
        type: 'clayPunch',
        range: 'armsLength',
        damage: () => ({
          blunt: 1,
        }),
        attack: () => 10,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.clay_punch.description',
        chance: 1,
      },
      {
        type: 'hastyReaction',
        range: 'armsLength',
        damage: () => ({
        }),
        attack: () => 0,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.hasty_reaction.description',
        chance: 1,
      },
      {
        type: 'earthRumble',
        range: 'short',
        damage: (_ctx) => ({
          fear: true,
        }),
        attack: (_ctx) => 8,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.earth_rumble.description',
        chance: 1,
      },
      {
        type: 'groundQuake',
        range: 'near',
        damage: (_ctx) => ({
          blunt: 1,
        }),
        attack: (_ctx) => 7,
        singleUse: false,
        valid: (_ctx) => true,
        description: 'monster:attack.ground_quake.description',
        chance: 1,
      },
      {
        type: 'golemRampage',
        range: 'armsLength',
        singleUse: false,
        attack: (_ctx) => 8,
        damage: (_ctx) => ({
          blunt: 2,
        }),
        valid: (_ctx) => true,
        description: 'monster:attack.golem_rampage.description',
        chance: 1,
      },
    ],
  },
]
