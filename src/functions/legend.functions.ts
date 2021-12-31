import { TFunction } from 'react-i18next'
import { getRandomInt, rollD6, rollD66, rollD8 } from './dice.functions'

export const generateLegend = (
  t: TFunction<('session' | 'common')[]>,
): string => {
  const { description, age } = timeAgo()
  const adjective = getText(ADJECTIVE)
  const who_or_what = getText(WHO_OR_WHAT)

  if (who_or_what.text() === 'WhoOrWhat.Monster') {
    who_or_what.pronoun = undefined
  }

  const who_searched_for = getText(WHO_SEARCHED_FOR)
  const because = getText(BECAUSE)
  const location = getText(LOCATION)
  const distance = getText(DISTANCE, rollD6)
  const terrain = getText(TERRAIN)
  const direction = getText(DIRECTION, rollD8)
  const what_happened = getText(WHAT_HAPPENED)
  const its_told_that = getText(ITS_TOLD_THAT)
  const adjective_adversary = getText(ADJECTIVE_ADVERSARY)
  const adversary = getText(ADVERSARY)

  const sentences = [
    [
      t(`ALongTimeAgo`, { ns: ['session', 'common'] }),
      t(description, { ns: ['session', 'common'] }),
      t(`YearsAgo`, { years: age, ns: ['session', 'common'] }),
      t(`ThereWas`, { ns: ['session', 'common'] }),
      t(adjective.text(), { ns: ['session', 'common'] }),
      t(who_or_what.text(), { ns: ['session', 'common'] }),
      t(`WhoSearched`, { ns: ['session', 'common'] }),
      t(who_searched_for.text(), { ns: ['session', 'common'] }),
      t(`BecauseOf`, { ns: ['session', 'common'] }),
      t(because.text(), { ns: ['session', 'common'] }),
      t(`AndTraveledTo`, { ns: ['session', 'common'] }),
      t(location.text(), { ns: ['session', 'common'] }),
      t(`Located`, { ns: ['session', 'common'] }),
      t(distance.text(), { ns: ['session', 'common'] }),
      t(terrain.text(), { ns: ['session', 'common'] }),
      t(`InTheDirectionOf`, { ns: ['session', 'common'] }),
      t(direction.text(), { ns: ['session', 'common'] }),
    ].join(' '),
    [
      who_or_what.pronoun === 'Third'
        ? t(`AsTheLegendGoesItIsSaidThat`, {
            context: who_or_what.pronoun,
            ns: ['session', 'common'],
          })
        : t(`AsTheLegendGoesItIsSaidThat`, {
            ns: ['session', 'common'],
          }),
      t(what_happened.text(), {
        context: who_or_what.pronoun,
        ns: ['session', 'common'],
      }),
      t(`AndThatAtTheLocationThere`, { ns: ['session', 'common'] }),
      t(its_told_that.text(), { ns: ['session', 'common'] }),
      t(`ButAlso`, { ns: ['session', 'common'] }),
      getAdversary(adversary, adjective_adversary, t),
    ].join(' '),
  ].join('. ')

  return `${sentences}.`
}

interface TimeAgoResult {
  description: string
  age: number
}

const timeAgo = (): TimeAgoResult => {
  const roll = rollD66()

  const time = TIME_AGO.find((ta) => ta.roll.includes(roll))
  if (time) {
    return {
      description: time.text,
      age: getRandomInt(time.ageRange[0], time.ageRange[1]),
    }
  }

  return (
    time ?? {
      description: 'TimeAgo.BeforeShift',
      age: 0,
    }
  )
}

type TimeAgo = {
  roll: number[]
  text: string
  ageRange: [number, number]
}

const TIME_AGO: TimeAgo[] = [
  {
    text: 'TimeAgo.BeforeShift',
    ageRange: [1100, 3000],
    roll: [11, 12],
  },
  {
    text: 'TimeAgo.BeforeBloodMist',
    ageRange: [300, 1100],
    roll: [13, 14, 15, 16, 21, 22, 23, 24, 25, 26],
  },
  {
    text: 'TimeAgo.DuringAlderWars',
    ageRange: [305, 360],
    roll: [31, 32, 33, 34, 35, 36, 41, 42, 43],
  },
  {
    text: 'TimeAgo.DuringBloodMist',
    ageRange: [5, 280],
    roll: [44, 45, 46, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66],
  },
]

interface LegendTableItem {
  roll: number[]
  text: () => string
  count?: number
  pronoun?: 'Third'
}

const getText = (
  arr: LegendTableItem[],
  diceFn: () => number = rollD66,
): LegendTableItem => {
  const roll = diceFn()

  const result = arr.find((a) => a.roll.includes(roll)) ?? {
    text: () => '',
    roll: [],
  }

  return result
}

const getAdversary = (
  adversary: LegendTableItem,
  adjective: LegendTableItem,
  t: TFunction<('session' | 'common')[]>,
): string => {
  const _t = (key: string): string =>
    t(key, {
      ns: ['session', 'common'],
    })
  if (adversary.text() !== 'Adversary.DemonWithCount') {
    return `${_t(adjective.text())} ${_t(adversary.text())}`
  }

  const count = rollD6()

  return `${count} ${_t(adjective.text())} ${_t(adversary.text())}`
}

const ADJECTIVE: LegendTableItem[] = [
  { roll: [11], text: () => 'Adjective.BloodThirsty' },
  { roll: [12], text: () => 'Adjective.Vengeful' },
  { roll: [13], text: () => 'Adjective.Greedy' },
  { roll: [14], text: () => 'Adjective.Unhappy' },
  { roll: [15], text: () => 'Adjective.Ingenious' },
  { roll: [16], text: () => 'Adjective.Enterprising' },
  { roll: [21], text: () => 'Adjective.Kind' },
  { roll: [22], text: () => 'Adjective.Perseverant' },
  { roll: [23, 24], text: () => 'Adjective.Treacherous' },
  { roll: [25, 26], text: () => 'Adjective.Moral' },
  { roll: [31, 32], text: () => 'Adjective.Skilled' },
  { roll: [33, 34], text: () => 'Adjective.Stingy' },
  { roll: [35, 36], text: () => 'Adjective.Vain' },
  { roll: [41, 42], text: () => 'Adjective.Wise' },
  { roll: [43, 44], text: () => 'Adjective.Beautiful' },
  { roll: [45, 46], text: () => 'Adjective.Honorable' },
  { roll: [51, 52], text: () => 'Adjective.Jealous' },
  { roll: [53, 54], text: () => 'Adjective.Cruel' },
  { roll: [55, 56], text: () => 'Adjective.Determined' },
  { roll: [61, 62], text: () => 'Adjective.Cunning' },
  { roll: [63, 64], text: () => 'Adjective.Scared' },
  { roll: [65, 66], text: () => 'Adjective.Evil' },
]

const WHO_OR_WHAT: LegendTableItem[] = [
  { roll: [11], text: () => 'WhoOrWhat.Elf' },
  { roll: [12], text: () => 'WhoOrWhat.Dwarf' },
  { roll: [13], text: () => 'WhoOrWhat.Peddler' },
  { roll: [14], text: () => 'WhoOrWhat.Smith' },
  { roll: [15], text: () => 'WhoOrWhat.Farmer' },
  { roll: [16], text: () => 'WhoOrWhat.Apprentice' },
  { roll: [21], text: () => 'WhoOrWhat.Druid' },
  { roll: [22], text: () => 'WhoOrWhat.Shepherd' },
  { roll: [23, 24], text: () => 'WhoOrWhat.RavenSister' },
  { roll: [25, 26], text: () => 'WhoOrWhat.RustBrother' },
  { roll: [31, 32], text: () => 'WhoOrWhat.Rider' },
  { roll: [33, 34], text: () => 'WhoOrWhat.TreasureHunter' },
  { roll: [35, 36], text: () => 'WhoOrWhat.Priest' },
  { roll: [41, 42], text: () => 'WhoOrWhat.Sorcerer' },
  { roll: [43, 44], text: () => 'WhoOrWhat.RobberChieftain' },
  { roll: [45, 46], text: () => 'WhoOrWhat.Warrior' },
  { roll: [51, 52], text: () => 'WhoOrWhat.Lord' },
  { roll: [53, 54], text: () => 'WhoOrWhat.Prince' },
  { roll: [55, 56], text: () => 'WhoOrWhat.Princess' },
  { roll: [61, 62], text: () => 'WhoOrWhat.Queen' },
  { roll: [63, 64], text: () => 'WhoOrWhat.King' },
  {
    roll: [65, 66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 1:
          return 'WhoOrWhat.Soldiers'
        case 2:
          return 'WhoOrWhat.Village'
        case 3:
          return 'WhoOrWhat.Cult'
        case 4:
          return 'WhoOrWhat.BandOfRobbers'
        case 5:
          return 'WhoOrWhat.Cabal'
        case 6:
          return 'WhoOrWhat.Monster'

        default:
          return 'WhoOrWhat.BandOfRobbers'
      }
    },
    pronoun: 'Third',
  },
]

const WHO_SEARCHED_FOR: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'SearchedFor.Weapon' },
  { roll: [15, 16, 21, 22], text: () => 'SearchedFor.Love' },
  { roll: [23, 24, 25, 26], text: () => 'SearchedFor.Friend' },
  { roll: [31, 32, 33, 34], text: () => 'SearchedFor.Enemy' },
  { roll: [35, 36, 41, 42], text: () => 'SearchedFor.Treasure' },
  { roll: [43, 44, 45, 46], text: () => 'SearchedFor.Map' },
  { roll: [51, 52, 53, 54], text: () => 'SearchedFor.FamilyMember' },
  { roll: [55, 56, 61, 62], text: () => 'SearchedFor.Artifact' },
  { roll: [63, 44, 65, 66], text: () => 'SearchedFor.Monster' },
]

const BECAUSE: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'Because.Love' },
  { roll: [15, 16], text: () => 'Because.Friendship' },
  { roll: [21, 22, 23, 24], text: () => 'Because.Promise' },
  { roll: [25, 26, 31, 32, 33], text: () => 'Because.Prophecy' },
  { roll: [35, 36, 41], text: () => 'Because.Bet' },
  { roll: [42, 43, 44, 45], text: () => 'Because.Duty' },
  { roll: [46, 51, 52], text: () => 'Because.War' },
  { roll: [53, 54, 55], text: () => 'Because.Honor' },
  { roll: [56, 61], text: () => 'Because.Insanity' },
  { roll: [62, 63], text: () => 'Because.Dreams' },
  { roll: [64, 65, 66], text: () => 'Because.Greed' },
]

const LOCATION: LegendTableItem[] = [
  { roll: [11, 12, 13, 14, 15, 16], text: () => 'Location.Ruin' },
  { roll: [21, 21], text: () => 'Location.Farm' },
  { roll: [23, 24, 25, 26], text: () => 'Location.Grave' },
  { roll: [31, 32, 33, 34], text: () => 'Location.Tower' },
  { roll: [35, 36], text: () => 'Location.Fortress' },
  { roll: [41, 42, 43], text: () => 'Location.Village' },
  { roll: [44, 45, 46, 51, 52, 53], text: () => 'Location.Cave' },
  { roll: [54, 55, 56], text: () => 'Location.Hill' },
  { roll: [61, 62, 63], text: () => 'Location.Tree' },
  { roll: [64, 65, 66], text: () => 'Location.WaterSource' },
]

const DISTANCE: LegendTableItem[] = [
  { roll: [1], text: () => 'Distance.Here' },
  { roll: [2], text: () => 'Distance.CloseBy' },
  { roll: [3], text: () => 'Distance.OneDaysMarch' },
  { roll: [4], text: () => 'Distance.ManyDaysMarch' },
  { roll: [5], text: () => 'Distance.FarAway' },
  { roll: [6], text: () => 'Distance.TheOtherSide' },
]

const TERRAIN: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'ATerrain.RuinCity' },
  { roll: [15, 16, 21], text: () => 'ATerrain.Swamp' },
  { roll: [22, 23, 24], text: () => 'ATerrain.Mire' },
  { roll: [25, 26, 31, 32, 33, 34], text: () => 'ATerrain.Plains' },
  { roll: [35, 36, 41, 42, 43, 44], text: () => 'ATerrain.Forest' },
  { roll: [45, 46, 51, 52, 53], text: () => 'ATerrain.Hills' },
  { roll: [54, 55, 56, 61, 62, 63], text: () => 'ATerrain.DarkForest' },
  { roll: [64], text: () => 'ATerrain.Lake' },
  { roll: [65, 66], text: () => 'ATerrain.Mountain' },
]

const DIRECTION: LegendTableItem[] = [
  { roll: [1], text: () => 'Direction.North' },
  { roll: [2], text: () => 'Direction.NorthEast' },
  { roll: [3], text: () => 'Direction.East' },
  { roll: [4], text: () => 'Direction.SouthEast' },
  { roll: [5], text: () => 'Direction.South' },
  { roll: [6], text: () => 'Direction.SouthWest' },
  { roll: [7], text: () => 'Direction.West' },
  { roll: [8], text: () => 'Direction.NorthWest' },
]

const WHAT_HAPPENED: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'WhatHappened.Betrayed' },
  { roll: [15, 21, 22], text: () => 'WhatHappened.Murdered' },
  { roll: [23, 24, 25, 26], text: () => 'WhatHappened.NeverSeenAgain' },
  { roll: [31, 32, 33], text: () => 'WhatHappened.StarvedToDeath' },
  { roll: [34, 35, 36], text: () => 'WhatHappened.CommitedSuicide' },
  { roll: [41, 42, 43, 44], text: () => 'WhatHappened.DiedInBattle' },
  { roll: [45, 46, 51, 52], text: () => 'WhatHappened.Charmed' },
  { roll: [53, 54, 55, 56], text: () => 'WhatHappened.Possessed' },
  { roll: [61, 62, 63], text: () => 'WhatHappened.CameBackChanged' },
  { roll: [64, 65, 66], text: () => 'WhatHappened.StillLooking' },
]

const ITS_TOLD_THAT: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'ItsToldThat.Gold' },
  { roll: [15, 16, 21, 22], text: () => 'ItsToldThat.Artifact' },
  { roll: [23, 24, 25, 26], text: () => 'ItsToldThat.Armor' },
  { roll: [31, 32, 33], text: () => 'ItsToldThat.Weapon' },
  { roll: [34, 35, 36], text: () => 'ItsToldThat.Book' },
  { roll: [41, 42, 43, 44], text: () => 'ItsToldThat.Treasure' },
  {
    roll: [45, 45, 46, 51, 52],
    text: () => 'ItsToldThat.WarChest',
  },
  {
    roll: [53, 54, 55, 56],
    text: () => 'ItsToldThat.Remains',
  },
  { roll: [61, 62, 63], text: () => 'ItsToldThat.DwarvenArtifact' },
  { roll: [64, 65, 66], text: () => 'ItsToldThat.ElfRuby' },
]
const ADJECTIVE_ADVERSARY: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'AdjectiveAdversary.Aggresive' },
  { roll: [15, 16, 21, 22], text: () => 'AdjectiveAdversary.BloodThirsty' },
  { roll: [23, 24, 25], text: () => 'AdjectiveAdversary.Cruel' },
  { roll: [26, 31, 32], text: () => 'AdjectiveAdversary.Horrible' },
  { roll: [33, 34], text: () => 'AdjectiveAdversary.Hungry' },
  { roll: [35, 36, 41, 42, 43], text: () => 'AdjectiveAdversary.Guarding' },
  { roll: [44, 45, 46], text: () => 'AdjectiveAdversary.Starving' },
  { roll: [51, 52, 53, 54], text: () => 'AdjectiveAdversary.Greedy' },
  { roll: [55, 56, 61], text: () => 'AdjectiveAdversary.Crazy' },
  { roll: [62, 63], text: () => 'AdjectiveAdversary.Murderous' },
  { roll: [64, 65], text: () => 'AdjectiveAdversary.Manic' },
  { roll: [66], text: () => 'AdjectiveAdversary.Hunting' },
]

const ADVERSARY: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'Adversary.WolfKin' },
  { roll: [15, 16, 21, 22], text: () => 'Adversary.SlaveTraders' },
  { roll: [23, 24, 25], text: () => 'Adversary.Orcs' },
  { roll: [26, 31, 32], text: () => 'Adversary.Ghosts' },
  { roll: [33, 34], text: () => 'Adversary.Saurians' },
  { roll: [35, 36, 41, 42, 43], text: () => 'Adversary.IronGuards' },
  { roll: [44, 45, 46], text: () => 'Adversary.Undead' },
  { roll: [51, 52, 53, 54], text: () => 'Adversary.Robbers' },
  { roll: [55, 56, 61], text: () => 'Adversary.Goblins' },
  { roll: [62, 63], text: () => 'Adversary.Ogres' },
  { roll: [64, 65], text: () => getText(MONSTER_LIST).text() },
  {
    roll: [66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 5:
          return 'Adversary.Demon_Two'
        case 6:
          return `Adversary.DemonWithCount`

        case 1:
        case 2:
        case 3:
        case 4:
        default:
          return 'Adversary.Demon_One'
      }
    },
  },
]

const MONSTER_LIST: LegendTableItem[] = [
  { roll: [11, 12], text: () => 'Monster.stryparranka' },
  { roll: [13, 14, 15], text: () => 'Monster.GrayBear' },
  { roll: [16, 21, 22], text: () => 'Monster.NightWarg' },
  { roll: [23, 24], text: () => 'Monster.Ghost' },
  { roll: [25, 26], text: () => 'Monster.Ghoul' },
  { roll: [31, 32], text: () => 'Monster.Skeleton' },
  { roll: [33, 34], text: () => 'Monster.RestlessDead' },
  { roll: [35, 36], text: () => 'Monster.Wyvern' },
  { roll: [41, 42], text: () => 'Monster.Harpies' },
  { roll: [43], text: () => 'Monster.Minotaur' },
  { roll: [44], text: () => 'Monster.Ent' },
  { roll: [45], text: () => 'Monster.AbyssWorm' },
  { roll: [46], text: () => 'Monster.GiantSquid' },
  { roll: [51], text: () => 'Monster.SeaSerpent' },
  { roll: [52], text: () => 'Monster.Troll' },
  { roll: [53], text: () => 'Monster.DeathKnight' },
  { roll: [54], text: () => 'Monster.Insectoid' },
  { roll: [55], text: () => 'Monster.Bloodling' },
  { roll: [56], text: () => 'Monster.Manticore' },
  { roll: [61], text: () => 'Monster.Gryphon' },
  { roll: [62], text: () => 'Monster.Giant' },
  { roll: [63], text: () => 'Monster.Hydra' },
  { roll: [64], text: () => 'Monster.Demon' },
  { roll: [65], text: () => 'Monster.Drakewyrn' },
  { roll: [66], text: () => 'Monster.Dragon' },
]
