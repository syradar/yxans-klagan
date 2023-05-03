import { TranslationKey } from '../store/translations/translation.model'
import { getRandomInt, rollD6, rollD66, rollD8 } from './dice.functions'
export const generateLegend = () => {
  const { description, age } = timeAgo()
  const adjective = getText(ADJECTIVE)
  const who_or_what = getText(WHO_OR_WHAT)

  if (who_or_what.text() === 'session:WhoOrWhat.Monster') {
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

  return {
    description,
    age,
    adjective,
    who_or_what,
    who_searched_for,
    because,
    location,
    distance,
    terrain,
    direction,
    what_happened,
    its_told_that,
    adjective_adversary,
    adversary,
  }
}

interface TimeAgoResult {
  description: TranslationKey<'session' | 'common'>
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
      description: 'session:TimeAgo.BeforeShift',
      age: 0,
    }
  )
}

type TimeAgo = {
  roll: number[]
  text: TranslationKey<'session' | 'common'>
  ageRange: [number, number]
}

const TIME_AGO: TimeAgo[] = [
  {
    text: 'session:TimeAgo.BeforeShift',
    ageRange: [1100, 3000],
    roll: [11, 12],
  },
  {
    text: 'session:TimeAgo.BeforeBloodMist',
    ageRange: [300, 1100],
    roll: [13, 14, 15, 16, 21, 22, 23, 24, 25, 26],
  },
  {
    text: 'session:TimeAgo.DuringAlderWars',
    ageRange: [305, 360],
    roll: [31, 32, 33, 34, 35, 36, 41, 42, 43],
  },
  {
    text: 'session:TimeAgo.DuringBloodMist',
    ageRange: [5, 280],
    roll: [44, 45, 46, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66],
  },
]

export type LegendTableItem = {
  roll: number[]
  text: () => TranslationKey<'common' | 'session'>
  count?: number
  pronoun?: 'Third'
}

const getText = (
  arr: LegendTableItem[],
  diceFn: () => number = rollD66,
): LegendTableItem => {
  const roll = diceFn()

  return (
    arr.find((a) => a.roll.includes(roll)) ?? {
      roll: [0],
      text: () => 'common:Empty',
    }
  )
}

const ADJECTIVE: LegendTableItem[] = [
  { roll: [11], text: () => 'session:Adjective.BloodThirsty' },
  { roll: [12], text: () => 'session:Adjective.Vengeful' },
  { roll: [13], text: () => 'session:Adjective.Greedy' },
  { roll: [14], text: () => 'session:Adjective.Unhappy' },
  { roll: [15], text: () => 'session:Adjective.Ingenious' },
  { roll: [16], text: () => 'session:Adjective.Enterprising' },
  { roll: [21], text: () => 'session:Adjective.Kind' },
  { roll: [22], text: () => 'session:Adjective.Perseverant' },
  { roll: [23, 24], text: () => 'session:Adjective.Treacherous' },
  { roll: [25, 26], text: () => 'session:Adjective.Moral' },
  { roll: [31, 32], text: () => 'session:Adjective.Skilled' },
  { roll: [33, 34], text: () => 'session:Adjective.Stingy' },
  { roll: [35, 36], text: () => 'session:Adjective.Vain' },
  { roll: [41, 42], text: () => 'session:Adjective.Wise' },
  { roll: [43, 44], text: () => 'session:Adjective.Beautiful' },
  { roll: [45, 46], text: () => 'session:Adjective.Honorable' },
  { roll: [51, 52], text: () => 'session:Adjective.Jealous' },
  { roll: [53, 54], text: () => 'session:Adjective.Cruel' },
  { roll: [55, 56], text: () => 'session:Adjective.Determined' },
  { roll: [61, 62], text: () => 'session:Adjective.Cunning' },
  { roll: [63, 64], text: () => 'session:Adjective.Scared' },
  { roll: [65, 66], text: () => 'session:Adjective.Evil' },
]

const WHO_OR_WHAT: LegendTableItem[] = [
  { roll: [11], text: () => 'session:WhoOrWhat.Elf' },
  { roll: [12], text: () => 'session:WhoOrWhat.Dwarf' },
  { roll: [13], text: () => 'session:WhoOrWhat.Peddler' },
  { roll: [14], text: () => 'session:WhoOrWhat.Smith' },
  { roll: [15], text: () => 'session:WhoOrWhat.Farmer' },
  { roll: [16], text: () => 'session:WhoOrWhat.Apprentice' },
  { roll: [21], text: () => 'session:WhoOrWhat.Druid' },
  { roll: [22], text: () => 'session:WhoOrWhat.Shepherd' },
  { roll: [23, 24], text: () => 'session:WhoOrWhat.RavenSister' },
  { roll: [25, 26], text: () => 'session:WhoOrWhat.RustBrother' },
  { roll: [31, 32], text: () => 'session:WhoOrWhat.Rider' },
  { roll: [33, 34], text: () => 'session:WhoOrWhat.TreasureHunter' },
  { roll: [35, 36], text: () => 'session:WhoOrWhat.Priest' },
  { roll: [41, 42], text: () => 'session:WhoOrWhat.Sorcerer' },
  { roll: [43, 44], text: () => 'session:WhoOrWhat.RobberChieftain' },
  { roll: [45, 46], text: () => 'session:WhoOrWhat.Warrior' },
  { roll: [51, 52], text: () => 'session:WhoOrWhat.Lord' },
  { roll: [53, 54], text: () => 'session:WhoOrWhat.Prince' },
  { roll: [55, 56], text: () => 'session:WhoOrWhat.Princess' },
  { roll: [61, 62], text: () => 'session:WhoOrWhat.Queen' },
  { roll: [63, 64], text: () => 'session:WhoOrWhat.King' },
  {
    roll: [65, 66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 1:
          return 'session:WhoOrWhat.Soldiers'
        case 2:
          return 'session:WhoOrWhat.Village'
        case 3:
          return 'session:WhoOrWhat.Cult'
        case 4:
          return 'session:WhoOrWhat.BandOfRobbers'
        case 5:
          return 'session:WhoOrWhat.Cabal'
        case 6:
          return 'session:WhoOrWhat.Monster'

        default:
          return 'session:WhoOrWhat.BandOfRobbers'
      }
    },
    pronoun: 'Third',
  },
]

const WHO_SEARCHED_FOR: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:SearchedFor.Weapon' },
  { roll: [15, 16, 21, 22], text: () => 'session:SearchedFor.Love' },
  { roll: [23, 24, 25, 26], text: () => 'session:SearchedFor.Friend' },
  { roll: [31, 32, 33, 34], text: () => 'session:SearchedFor.Enemy' },
  { roll: [35, 36, 41, 42], text: () => 'session:SearchedFor.Treasure' },
  { roll: [43, 44, 45, 46], text: () => 'session:SearchedFor.Map' },
  { roll: [51, 52, 53, 54], text: () => 'session:SearchedFor.FamilyMember' },
  { roll: [55, 56, 61, 62], text: () => 'session:SearchedFor.Artifact' },
  { roll: [63, 44, 65, 66], text: () => 'session:SearchedFor.Monster' },
]

const BECAUSE: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:Because.Love' },
  { roll: [15, 16], text: () => 'session:Because.Friendship' },
  { roll: [21, 22, 23, 24], text: () => 'session:Because.Promise' },
  { roll: [25, 26, 31, 32, 33], text: () => 'session:Because.Prophecy' },
  { roll: [35, 36, 41], text: () => 'session:Because.Bet' },
  { roll: [42, 43, 44, 45], text: () => 'session:Because.Duty' },
  { roll: [46, 51, 52], text: () => 'session:Because.War' },
  { roll: [53, 54, 55], text: () => 'session:Because.Honor' },
  { roll: [56, 61], text: () => 'session:Because.Insanity' },
  { roll: [62, 63], text: () => 'session:Because.Dreams' },
  { roll: [64, 65, 66], text: () => 'session:Because.Greed' },
]

const LOCATION: LegendTableItem[] = [
  { roll: [11, 12, 13, 14, 15, 16], text: () => 'session:Location.Ruin' },
  { roll: [21, 21], text: () => 'session:Location.Farm' },
  { roll: [23, 24, 25, 26], text: () => 'session:Location.Grave' },
  { roll: [31, 32, 33, 34], text: () => 'session:Location.Tower' },
  { roll: [35, 36], text: () => 'session:Location.Fortress' },
  { roll: [41, 42, 43], text: () => 'session:Location.Village' },
  { roll: [44, 45, 46, 51, 52, 53], text: () => 'session:Location.Cave' },
  { roll: [54, 55, 56], text: () => 'session:Location.Hill' },
  { roll: [61, 62, 63], text: () => 'session:Location.Tree' },
  { roll: [64, 65, 66], text: () => 'session:Location.WaterSource' },
]

const DISTANCE: LegendTableItem[] = [
  { roll: [1], text: () => 'session:Distance.Here' },
  { roll: [2], text: () => 'session:Distance.CloseBy' },
  { roll: [3], text: () => 'session:Distance.OneDaysMarch' },
  { roll: [4], text: () => 'session:Distance.ManyDaysMarch' },
  { roll: [5], text: () => 'session:Distance.FarAway' },
  { roll: [6], text: () => 'session:Distance.TheOtherSide' },
]

const TERRAIN: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'common:ATerrain.RuinCity' },
  { roll: [15, 16, 21], text: () => 'common:ATerrain.Swamp' },
  { roll: [22, 23, 24], text: () => 'common:ATerrain.Mire' },
  { roll: [25, 26, 31, 32, 33, 34], text: () => 'common:ATerrain.Plains' },
  { roll: [35, 36, 41, 42, 43, 44], text: () => 'common:ATerrain.Forest' },
  { roll: [45, 46, 51, 52, 53], text: () => 'common:ATerrain.Hills' },
  { roll: [54, 55, 56, 61, 62, 63], text: () => 'common:ATerrain.DarkForest' },
  { roll: [64], text: () => 'common:ATerrain.Lake' },
  { roll: [65, 66], text: () => 'common:ATerrain.Mountain' },
]

const DIRECTION: LegendTableItem[] = [
  { roll: [1], text: () => 'common:Direction.North' },
  { roll: [2], text: () => 'common:Direction.NorthEast' },
  { roll: [3], text: () => 'common:Direction.East' },
  { roll: [4], text: () => 'common:Direction.SouthEast' },
  { roll: [5], text: () => 'common:Direction.South' },
  { roll: [6], text: () => 'common:Direction.SouthWest' },
  { roll: [7], text: () => 'common:Direction.West' },
  { roll: [8], text: () => 'common:Direction.NorthWest' },
]

const WHAT_HAPPENED: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:WhatHappened.Betrayed' },
  { roll: [15, 21, 22], text: () => 'session:WhatHappened.Murdered' },
  { roll: [23, 24, 25, 26], text: () => 'session:WhatHappened.NeverSeenAgain' },
  { roll: [31, 32, 33], text: () => 'session:WhatHappened.StarvedToDeath' },
  { roll: [34, 35, 36], text: () => 'session:WhatHappened.CommitedSuicide' },
  { roll: [41, 42, 43, 44], text: () => 'session:WhatHappened.DiedInBattle' },
  { roll: [45, 46, 51, 52], text: () => 'session:WhatHappened.Charmed' },
  { roll: [53, 54, 55, 56], text: () => 'session:WhatHappened.Possessed' },
  { roll: [61, 62, 63], text: () => 'session:WhatHappened.CameBackChanged' },
  { roll: [64, 65, 66], text: () => 'session:WhatHappened.StillLooking' },
]

const ITS_TOLD_THAT: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:ItsToldThat.Gold' },
  { roll: [15, 16, 21, 22], text: () => 'session:ItsToldThat.Artifact' },
  { roll: [23, 24, 25, 26], text: () => 'session:ItsToldThat.Armor' },
  { roll: [31, 32, 33], text: () => 'session:ItsToldThat.Weapon' },
  { roll: [34, 35, 36], text: () => 'session:ItsToldThat.Book' },
  { roll: [41, 42, 43, 44], text: () => 'session:ItsToldThat.Treasure' },
  {
    roll: [45, 45, 46, 51, 52],
    text: () => 'session:ItsToldThat.WarChest',
  },
  {
    roll: [53, 54, 55, 56],
    text: () => 'session:ItsToldThat.Remains',
  },
  { roll: [61, 62, 63], text: () => 'session:ItsToldThat.DwarvenArtifact' },
  { roll: [64, 65, 66], text: () => 'session:ItsToldThat.ElfRuby' },
]
const ADJECTIVE_ADVERSARY: LegendTableItem[] = [
  {
    roll: [11, 12, 13, 14],
    text: () => 'session:AdjectiveAdversary.Aggresive',
  },
  {
    roll: [15, 16, 21, 22],
    text: () => 'session:AdjectiveAdversary.BloodThirsty',
  },
  { roll: [23, 24, 25], text: () => 'session:AdjectiveAdversary.Cruel' },
  { roll: [26, 31, 32], text: () => 'session:AdjectiveAdversary.Horrible' },
  { roll: [33, 34], text: () => 'session:AdjectiveAdversary.Hungry' },
  {
    roll: [35, 36, 41, 42, 43],
    text: () => 'session:AdjectiveAdversary.Guarding',
  },
  { roll: [44, 45, 46], text: () => 'session:AdjectiveAdversary.Starving' },
  { roll: [51, 52, 53, 54], text: () => 'session:AdjectiveAdversary.Greedy' },
  { roll: [55, 56, 61], text: () => 'session:AdjectiveAdversary.Crazy' },
  { roll: [62, 63], text: () => 'session:AdjectiveAdversary.Murderous' },
  { roll: [64, 65], text: () => 'session:AdjectiveAdversary.Manic' },
  { roll: [66], text: () => 'session:AdjectiveAdversary.Hunting' },
]

const ADVERSARY: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:Adversary.WolfKin' },
  { roll: [15, 16, 21, 22], text: () => 'session:Adversary.SlaveTraders' },
  { roll: [23, 24, 25], text: () => 'session:Adversary.Orcs' },
  { roll: [26, 31, 32], text: () => 'session:Adversary.Ghosts' },
  { roll: [33, 34], text: () => 'session:Adversary.Saurians' },
  { roll: [35, 36, 41, 42, 43], text: () => 'session:Adversary.IronGuards' },
  { roll: [44, 45, 46], text: () => 'session:Adversary.Undead' },
  { roll: [51, 52, 53, 54], text: () => 'session:Adversary.Robbers' },
  { roll: [55, 56, 61], text: () => 'session:Adversary.Goblins' },
  { roll: [62, 63], text: () => 'session:Adversary.Ogres' },
  { roll: [64, 65], text: () => getText(MONSTER_LIST).text() },
  {
    roll: [66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 5:
          return 'session:Adversary.Demon_Two'
        case 6:
          return 'session:Adversary.DemonWithCount'

        case 1:
        case 2:
        case 3:
        case 4:
        default:
          return 'session:Adversary.Demon_One'
      }
    },
  },
]

const MONSTER_LIST: LegendTableItem[] = [
  { roll: [11, 12], text: () => 'common:Monster.StranglingVine' },
  { roll: [13, 14, 15], text: () => 'common:Monster.GrayBear' },
  { roll: [16, 21, 22], text: () => 'common:Monster.NightWarg' },
  { roll: [23, 24], text: () => 'common:Monster.Ghost' },
  { roll: [25, 26], text: () => 'common:Monster.Ghoul' },
  { roll: [31, 32], text: () => 'common:Monster.Skeleton' },
  { roll: [33, 34], text: () => 'common:Monster.RestlessDead' },
  { roll: [35, 36], text: () => 'common:Monster.Wyvern' },
  { roll: [41, 42], text: () => 'common:Monster.Harpies' },
  { roll: [43], text: () => 'common:Monster.Minotaur' },
  { roll: [44], text: () => 'common:Monster.Ent' },
  { roll: [45], text: () => 'common:Monster.AbyssWorm' },
  { roll: [46], text: () => 'common:Monster.GiantSquid' },
  { roll: [51], text: () => 'common:Monster.SeaSerpent' },
  { roll: [52], text: () => 'common:Monster.Troll' },
  { roll: [53], text: () => 'common:Monster.DeathKnight' },
  { roll: [54], text: () => 'common:Monster.Insectoid' },
  { roll: [55], text: () => 'common:Monster.Bloodling' },
  { roll: [56], text: () => 'common:Monster.Manticore' },
  { roll: [61], text: () => 'common:Monster.Gryphon' },
  { roll: [62], text: () => 'common:Monster.Giant' },
  { roll: [63], text: () => 'common:Monster.Hydra' },
  { roll: [64], text: () => 'common:Monster.Demon' },
  { roll: [65], text: () => 'common:Monster.Drakewyrm' },
  { roll: [66], text: () => 'common:Monster.Dragon' },
]
