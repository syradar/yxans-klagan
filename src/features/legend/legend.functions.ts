import { TranslationKey } from '../../store/translations/translation.model'
import {
  getRandomInt,
  rollD6,
  rollD66,
  rollD8,
} from '../../functions/dice.functions'
export const generateLegend = () => {
  const { description, age } = timeAgo()
  const adjective = getText(ADJECTIVE)
  const who_or_what = getText(WHO_OR_WHAT)

  if (who_or_what.text() === 'legend:who_or_what.monster') {
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
  description: TranslationKey<'legend' | 'common'>
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
      description: 'legend:time_ago.before_shift',
      age: 0,
    }
  )
}

type TimeAgo = {
  roll: number[]
  text: TranslationKey<'legend' | 'common'>
  ageRange: [number, number]
}

const TIME_AGO: TimeAgo[] = [
  {
    text: 'legend:time_ago.before_shift',
    ageRange: [1100, 3000],
    roll: [11, 12],
  },
  {
    text: 'legend:time_ago.before_blood_mist',
    ageRange: [300, 1100],
    roll: [13, 14, 15, 16, 21, 22, 23, 24, 25, 26],
  },
  {
    text: 'legend:time_ago.during_alder_wars',
    ageRange: [305, 360],
    roll: [31, 32, 33, 34, 35, 36, 41, 42, 43],
  },
  {
    text: 'legend:time_ago.during_blood_mist',
    ageRange: [5, 280],
    roll: [44, 45, 46, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66],
  },
]

export type LegendTableItem = {
  roll: number[]
  text: () => TranslationKey<'common' | 'legend'>
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
      text: () => 'common:empty',
    }
  )
}

const ADJECTIVE: LegendTableItem[] = [
  { roll: [11], text: () => 'legend:adjective.blood_thirsty' },
  { roll: [12], text: () => 'legend:adjective.vengeful' },
  { roll: [13], text: () => 'legend:adjective.greedy' },
  { roll: [14], text: () => 'legend:adjective.unhappy' },
  { roll: [15], text: () => 'legend:adjective.ingenious' },
  { roll: [16], text: () => 'legend:adjective.enterprising' },
  { roll: [21], text: () => 'legend:adjective.kind' },
  { roll: [22], text: () => 'legend:adjective.perseverant' },
  { roll: [23, 24], text: () => 'legend:adjective.treacherous' },
  { roll: [25, 26], text: () => 'legend:adjective.moral' },
  { roll: [31, 32], text: () => 'legend:adjective.skilled' },
  { roll: [33, 34], text: () => 'legend:adjective.stingy' },
  { roll: [35, 36], text: () => 'legend:adjective.vain' },
  { roll: [41, 42], text: () => 'legend:adjective.wise' },
  { roll: [43, 44], text: () => 'legend:adjective.beautiful' },
  { roll: [45, 46], text: () => 'legend:adjective.honorable' },
  { roll: [51, 52], text: () => 'legend:adjective.jealous' },
  { roll: [53, 54], text: () => 'legend:adjective.cruel' },
  { roll: [55, 56], text: () => 'legend:adjective.determined' },
  { roll: [61, 62], text: () => 'legend:adjective.cunning' },
  { roll: [63, 64], text: () => 'legend:adjective.scared' },
  { roll: [65, 66], text: () => 'legend:adjective.evil' },
]

const WHO_OR_WHAT: LegendTableItem[] = [
  { roll: [11], text: () => 'legend:who_or_what.elf' },
  { roll: [12], text: () => 'legend:who_or_what.dwarf' },
  { roll: [13], text: () => 'legend:who_or_what.peddler' },
  { roll: [14], text: () => 'legend:who_or_what.smith' },
  { roll: [15], text: () => 'legend:who_or_what.farmer' },
  { roll: [16], text: () => 'legend:who_or_what.apprentice' },
  { roll: [21], text: () => 'legend:who_or_what.druid' },
  { roll: [22], text: () => 'legend:who_or_what.shepherd' },
  { roll: [23, 24], text: () => 'legend:who_or_what.raven_sister' },
  { roll: [25, 26], text: () => 'legend:who_or_what.rust_brother' },
  { roll: [31, 32], text: () => 'legend:who_or_what.rider' },
  { roll: [33, 34], text: () => 'legend:who_or_what.treasure_hunter' },
  { roll: [35, 36], text: () => 'legend:who_or_what.priest' },
  { roll: [41, 42], text: () => 'legend:who_or_what.sorcerer' },
  { roll: [43, 44], text: () => 'legend:who_or_what.robber_chieftain' },
  { roll: [45, 46], text: () => 'legend:who_or_what.warrior' },
  { roll: [51, 52], text: () => 'legend:who_or_what.lord' },
  { roll: [53, 54], text: () => 'legend:who_or_what.prince' },
  { roll: [55, 56], text: () => 'legend:who_or_what.princess' },
  { roll: [61, 62], text: () => 'legend:who_or_what.queen' },
  { roll: [63, 64], text: () => 'legend:who_or_what.king' },
  {
    roll: [65, 66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 1:
          return 'legend:who_or_what.soldiers'
        case 2:
          return 'legend:who_or_what.village'
        case 3:
          return 'legend:who_or_what.cult'
        case 4:
          return 'legend:who_or_what.band_of_robbers'
        case 5:
          return 'legend:who_or_what.cabal'
        case 6:
          return 'legend:who_or_what.monster'

        default:
          return 'legend:who_or_what.band_of_robbers'
      }
    },
    pronoun: 'Third',
  },
]

const WHO_SEARCHED_FOR: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'legend:searched_for.weapon' },
  { roll: [15, 16, 21, 22], text: () => 'legend:searched_for.love' },
  { roll: [23, 24, 25, 26], text: () => 'legend:searched_for.friend' },
  { roll: [31, 32, 33, 34], text: () => 'legend:searched_for.enemy' },
  { roll: [35, 36, 41, 42], text: () => 'legend:searched_for.treasure' },
  { roll: [43, 44, 45, 46], text: () => 'legend:searched_for.map' },
  { roll: [51, 52, 53, 54], text: () => 'legend:searched_for.family_member' },
  { roll: [55, 56, 61, 62], text: () => 'legend:searched_for.artifact' },
  { roll: [63, 44, 65, 66], text: () => 'legend:searched_for.monster' },
]

const BECAUSE: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'legend:because.love' },
  { roll: [15, 16], text: () => 'legend:because.friendship' },
  { roll: [21, 22, 23, 24], text: () => 'legend:because.promise' },
  { roll: [25, 26, 31, 32, 33], text: () => 'legend:because.prophecy' },
  { roll: [35, 36, 41], text: () => 'legend:because.bet' },
  { roll: [42, 43, 44, 45], text: () => 'legend:because.duty' },
  { roll: [46, 51, 52], text: () => 'legend:because.war' },
  { roll: [53, 54, 55], text: () => 'legend:because.honor' },
  { roll: [56, 61], text: () => 'legend:because.insanity' },
  { roll: [62, 63], text: () => 'legend:because.dreams' },
  { roll: [64, 65, 66], text: () => 'legend:because.greed' },
]

const LOCATION: LegendTableItem[] = [
  { roll: [11, 12, 13, 14, 15, 16], text: () => 'legend:location.ruin' },
  { roll: [21, 21], text: () => 'legend:location.farm' },
  { roll: [23, 24, 25, 26], text: () => 'legend:location.grave' },
  { roll: [31, 32, 33, 34], text: () => 'legend:location.tower' },
  { roll: [35, 36], text: () => 'legend:location.fortress' },
  { roll: [41, 42, 43], text: () => 'legend:location.village' },
  { roll: [44, 45, 46, 51, 52, 53], text: () => 'legend:location.cave' },
  { roll: [54, 55, 56], text: () => 'legend:location.hill' },
  { roll: [61, 62, 63], text: () => 'legend:location.tree' },
  { roll: [64, 65, 66], text: () => 'legend:location.water_source' },
]

const DISTANCE: LegendTableItem[] = [
  { roll: [1], text: () => 'legend:distance.here' },
  { roll: [2], text: () => 'legend:distance.close_by' },
  { roll: [3], text: () => 'legend:distance.one_days_march' },
  { roll: [4], text: () => 'legend:distance.many_days_march' },
  { roll: [5], text: () => 'legend:distance.far_away' },
  { roll: [6], text: () => 'legend:distance.the_other_side' },
]

const TERRAIN: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'common:aterrain.ruin_city' },
  { roll: [15, 16, 21], text: () => 'common:aterrain.swamp' },
  { roll: [22, 23, 24], text: () => 'common:aterrain.mire' },
  { roll: [25, 26, 31, 32, 33, 34], text: () => 'common:aterrain.plains' },
  { roll: [35, 36, 41, 42, 43, 44], text: () => 'common:aterrain.forest' },
  { roll: [45, 46, 51, 52, 53], text: () => 'common:aterrain.hills' },
  { roll: [54, 55, 56, 61, 62, 63], text: () => 'common:aterrain.dark_forest' },
  { roll: [64], text: () => 'common:aterrain.lake' },
  { roll: [65, 66], text: () => 'common:aterrain.mountain' },
]

const DIRECTION: LegendTableItem[] = [
  { roll: [1], text: () => 'common:direction.north' },
  { roll: [2], text: () => 'common:direction.north_east' },
  { roll: [3], text: () => 'common:direction.east' },
  { roll: [4], text: () => 'common:direction.south_east' },
  { roll: [5], text: () => 'common:direction.south' },
  { roll: [6], text: () => 'common:direction.south_west' },
  { roll: [7], text: () => 'common:direction.west' },
  { roll: [8], text: () => 'common:direction.north_west' },
]

const WHAT_HAPPENED: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'legend:what_happened.betrayed' },
  { roll: [15, 21, 22], text: () => 'legend:what_happened.murdered' },
  {
    roll: [23, 24, 25, 26],
    text: () => 'legend:what_happened.never_seen_again',
  },
  { roll: [31, 32, 33], text: () => 'legend:what_happened.starved_to_death' },
  { roll: [34, 35, 36], text: () => 'legend:what_happened.commited_suicide' },
  {
    roll: [41, 42, 43, 44],
    text: () => 'legend:what_happened.died_in_battle',
  },
  { roll: [45, 46, 51, 52], text: () => 'legend:what_happened.charmed' },
  { roll: [53, 54, 55, 56], text: () => 'legend:what_happened.possessed' },
  { roll: [61, 62, 63], text: () => 'legend:what_happened.came_back_changed' },
  { roll: [64, 65, 66], text: () => 'legend:what_happened.still_looking' },
]

const ITS_TOLD_THAT: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'legend:its_told_that.gold' },
  { roll: [15, 16, 21, 22], text: () => 'legend:its_told_that.artifact' },
  { roll: [23, 24, 25, 26], text: () => 'legend:its_told_that.armor' },
  { roll: [31, 32, 33], text: () => 'legend:its_told_that.weapon' },
  { roll: [34, 35, 36], text: () => 'legend:its_told_that.book' },
  { roll: [41, 42, 43, 44], text: () => 'legend:its_told_that.treasure' },
  {
    roll: [45, 45, 46, 51, 52],
    text: () => 'legend:its_told_that.war_chest',
  },
  {
    roll: [53, 54, 55, 56],
    text: () => 'legend:its_told_that.remains',
  },
  { roll: [61, 62, 63], text: () => 'legend:its_told_that.dwarven_artifact' },
  { roll: [64, 65, 66], text: () => 'legend:its_told_that.elf_ruby' },
]
const ADJECTIVE_ADVERSARY: LegendTableItem[] = [
  {
    roll: [11, 12, 13, 14],
    text: () => 'legend:adjective_adversary.aggresive',
  },
  {
    roll: [15, 16, 21, 22],
    text: () => 'legend:adjective_adversary.blood_thirsty',
  },
  { roll: [23, 24, 25], text: () => 'legend:adjective_adversary.cruel' },
  { roll: [26, 31, 32], text: () => 'legend:adjective_adversary.horrible' },
  { roll: [33, 34], text: () => 'legend:adjective_adversary.hungry' },
  {
    roll: [35, 36, 41, 42, 43],
    text: () => 'legend:adjective_adversary.guarding',
  },
  { roll: [44, 45, 46], text: () => 'legend:adjective_adversary.starving' },
  { roll: [51, 52, 53, 54], text: () => 'legend:adjective_adversary.greedy' },
  { roll: [55, 56, 61], text: () => 'legend:adjective_adversary.crazy' },
  { roll: [62, 63], text: () => 'legend:adjective_adversary.murderous' },
  { roll: [64, 65], text: () => 'legend:adjective_adversary.manic' },
  { roll: [66], text: () => 'legend:adjective_adversary.hunting' },
]

const ADVERSARY: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'legend:adversary.wolf_kin' },
  { roll: [15, 16, 21, 22], text: () => 'legend:adversary.slave_traders' },
  { roll: [23, 24, 25], text: () => 'legend:adversary.orcs' },
  { roll: [26, 31, 32], text: () => 'legend:adversary.ghosts' },
  { roll: [33, 34], text: () => 'legend:adversary.saurians' },
  { roll: [35, 36, 41, 42, 43], text: () => 'legend:adversary.iron_guards' },
  { roll: [44, 45, 46], text: () => 'legend:adversary.undead' },
  { roll: [51, 52, 53, 54], text: () => 'legend:adversary.robbers' },
  { roll: [55, 56, 61], text: () => 'legend:adversary.goblins' },
  { roll: [62, 63], text: () => 'legend:adversary.ogres' },
  { roll: [64, 65], text: () => getText(MONSTER_LIST).text() },
  {
    roll: [66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 5:
          return 'legend:adversary.demon_two'
        case 6:
          return 'legend:adversary.demon_with_count'

        case 1:
        case 2:
        case 3:
        case 4:
        default:
          return 'legend:adversary.demon_one'
      }
    },
  },
]

const MONSTER_LIST: LegendTableItem[] = [
  { roll: [11, 12], text: () => 'common:monster.strangling_vine' },
  { roll: [13, 14, 15], text: () => 'common:monster.gray_bear' },
  { roll: [16, 21, 22], text: () => 'common:monster.night_warg' },
  { roll: [23, 24], text: () => 'common:monster.ghost' },
  { roll: [25, 26], text: () => 'common:monster.ghoul' },
  { roll: [31, 32], text: () => 'common:monster.skeleton' },
  { roll: [33, 34], text: () => 'common:monster.restless_dead' },
  { roll: [35, 36], text: () => 'common:monster.wyvern' },
  { roll: [41, 42], text: () => 'common:monster.harpies' },
  { roll: [43], text: () => 'common:monster.minotaur' },
  { roll: [44], text: () => 'common:monster.ent' },
  { roll: [45], text: () => 'common:monster.abyss_worm' },
  { roll: [46], text: () => 'common:monster.giant_squid' },
  { roll: [51], text: () => 'common:monster.sea_serpent' },
  { roll: [52], text: () => 'common:monster.troll' },
  { roll: [53], text: () => 'common:monster.death_knight' },
  { roll: [54], text: () => 'common:monster.insectoid' },
  { roll: [55], text: () => 'common:monster.bloodling' },
  { roll: [56], text: () => 'common:monster.manticore' },
  { roll: [61], text: () => 'common:monster.gryphon' },
  { roll: [62], text: () => 'common:monster.giant' },
  { roll: [63], text: () => 'common:monster.hydra' },
  { roll: [64], text: () => 'common:monster.demon' },
  { roll: [65], text: () => 'common:monster.drakewyrm' },
  { roll: [66], text: () => 'common:monster.dragon' },
]
