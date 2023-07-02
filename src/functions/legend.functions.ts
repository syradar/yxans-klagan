import { TranslationKey } from '../store/translations/translation.model'
import { getRandomInt, rollD6, rollD66, rollD8 } from './dice.functions'
export const generateLegend = () => {
  const { description, age } = timeAgo()
  const adjective = getText(ADJECTIVE)
  const who_or_what = getText(WHO_OR_WHAT)

  if (who_or_what.text() === 'session:who_or_what.monster') {
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
      description: 'session:time_ago.before_shift',
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
    text: 'session:time_ago.before_shift',
    ageRange: [1100, 3000],
    roll: [11, 12],
  },
  {
    text: 'session:time_ago.before_blood_mist',
    ageRange: [300, 1100],
    roll: [13, 14, 15, 16, 21, 22, 23, 24, 25, 26],
  },
  {
    text: 'session:time_ago.during_alder_wars',
    ageRange: [305, 360],
    roll: [31, 32, 33, 34, 35, 36, 41, 42, 43],
  },
  {
    text: 'session:time_ago.during_blood_mist',
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
      text: () => 'common:empty',
    }
  )
}

const ADJECTIVE: LegendTableItem[] = [
  { roll: [11], text: () => 'session:adjective.blood_thirsty' },
  { roll: [12], text: () => 'session:adjective.vengeful' },
  { roll: [13], text: () => 'session:adjective.greedy' },
  { roll: [14], text: () => 'session:adjective.unhappy' },
  { roll: [15], text: () => 'session:adjective.ingenious' },
  { roll: [16], text: () => 'session:adjective.enterprising' },
  { roll: [21], text: () => 'session:adjective.kind' },
  { roll: [22], text: () => 'session:adjective.perseverant' },
  { roll: [23, 24], text: () => 'session:adjective.treacherous' },
  { roll: [25, 26], text: () => 'session:adjective.moral' },
  { roll: [31, 32], text: () => 'session:adjective.skilled' },
  { roll: [33, 34], text: () => 'session:adjective.stingy' },
  { roll: [35, 36], text: () => 'session:adjective.vain' },
  { roll: [41, 42], text: () => 'session:adjective.wise' },
  { roll: [43, 44], text: () => 'session:adjective.beautiful' },
  { roll: [45, 46], text: () => 'session:adjective.honorable' },
  { roll: [51, 52], text: () => 'session:adjective.jealous' },
  { roll: [53, 54], text: () => 'session:adjective.cruel' },
  { roll: [55, 56], text: () => 'session:adjective.determined' },
  { roll: [61, 62], text: () => 'session:adjective.cunning' },
  { roll: [63, 64], text: () => 'session:adjective.scared' },
  { roll: [65, 66], text: () => 'session:adjective.evil' },
]

const WHO_OR_WHAT: LegendTableItem[] = [
  { roll: [11], text: () => 'session:who_or_what.elf' },
  { roll: [12], text: () => 'session:who_or_what.dwarf' },
  { roll: [13], text: () => 'session:who_or_what.peddler' },
  { roll: [14], text: () => 'session:who_or_what.smith' },
  { roll: [15], text: () => 'session:who_or_what.farmer' },
  { roll: [16], text: () => 'session:who_or_what.apprentice' },
  { roll: [21], text: () => 'session:who_or_what.druid' },
  { roll: [22], text: () => 'session:who_or_what.shepherd' },
  { roll: [23, 24], text: () => 'session:who_or_what.raven_sister' },
  { roll: [25, 26], text: () => 'session:who_or_what.rust_brother' },
  { roll: [31, 32], text: () => 'session:who_or_what.rider' },
  { roll: [33, 34], text: () => 'session:who_or_what.treasure_hunter' },
  { roll: [35, 36], text: () => 'session:who_or_what.priest' },
  { roll: [41, 42], text: () => 'session:who_or_what.sorcerer' },
  { roll: [43, 44], text: () => 'session:who_or_what.robber_chieftain' },
  { roll: [45, 46], text: () => 'session:who_or_what.warrior' },
  { roll: [51, 52], text: () => 'session:who_or_what.lord' },
  { roll: [53, 54], text: () => 'session:who_or_what.prince' },
  { roll: [55, 56], text: () => 'session:who_or_what.princess' },
  { roll: [61, 62], text: () => 'session:who_or_what.queen' },
  { roll: [63, 64], text: () => 'session:who_or_what.king' },
  {
    roll: [65, 66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 1:
          return 'session:who_or_what.soldiers'
        case 2:
          return 'session:who_or_what.village'
        case 3:
          return 'session:who_or_what.cult'
        case 4:
          return 'session:who_or_what.band_of_robbers'
        case 5:
          return 'session:who_or_what.cabal'
        case 6:
          return 'session:who_or_what.monster'

        default:
          return 'session:who_or_what.band_of_robbers'
      }
    },
    pronoun: 'Third',
  },
]

const WHO_SEARCHED_FOR: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:searched_for.weapon' },
  { roll: [15, 16, 21, 22], text: () => 'session:searched_for.love' },
  { roll: [23, 24, 25, 26], text: () => 'session:searched_for.friend' },
  { roll: [31, 32, 33, 34], text: () => 'session:searched_for.enemy' },
  { roll: [35, 36, 41, 42], text: () => 'session:searched_for.treasure' },
  { roll: [43, 44, 45, 46], text: () => 'session:searched_for.map' },
  { roll: [51, 52, 53, 54], text: () => 'session:searched_for.family_member' },
  { roll: [55, 56, 61, 62], text: () => 'session:searched_for.artifact' },
  { roll: [63, 44, 65, 66], text: () => 'session:searched_for.monster' },
]

const BECAUSE: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:because.love' },
  { roll: [15, 16], text: () => 'session:because.friendship' },
  { roll: [21, 22, 23, 24], text: () => 'session:because.promise' },
  { roll: [25, 26, 31, 32, 33], text: () => 'session:because.prophecy' },
  { roll: [35, 36, 41], text: () => 'session:because.bet' },
  { roll: [42, 43, 44, 45], text: () => 'session:because.duty' },
  { roll: [46, 51, 52], text: () => 'session:because.war' },
  { roll: [53, 54, 55], text: () => 'session:because.honor' },
  { roll: [56, 61], text: () => 'session:because.insanity' },
  { roll: [62, 63], text: () => 'session:because.dreams' },
  { roll: [64, 65, 66], text: () => 'session:because.greed' },
]

const LOCATION: LegendTableItem[] = [
  { roll: [11, 12, 13, 14, 15, 16], text: () => 'session:location.ruin' },
  { roll: [21, 21], text: () => 'session:location.farm' },
  { roll: [23, 24, 25, 26], text: () => 'session:location.grave' },
  { roll: [31, 32, 33, 34], text: () => 'session:location.tower' },
  { roll: [35, 36], text: () => 'session:location.fortress' },
  { roll: [41, 42, 43], text: () => 'session:location.village' },
  { roll: [44, 45, 46, 51, 52, 53], text: () => 'session:location.cave' },
  { roll: [54, 55, 56], text: () => 'session:location.hill' },
  { roll: [61, 62, 63], text: () => 'session:location.tree' },
  { roll: [64, 65, 66], text: () => 'session:location.water_source' },
]

const DISTANCE: LegendTableItem[] = [
  { roll: [1], text: () => 'session:distance.here' },
  { roll: [2], text: () => 'session:distance.close_by' },
  { roll: [3], text: () => 'session:distance.one_days_march' },
  { roll: [4], text: () => 'session:distance.many_days_march' },
  { roll: [5], text: () => 'session:distance.far_away' },
  { roll: [6], text: () => 'session:distance.the_other_side' },
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
  { roll: [11, 12, 13, 14], text: () => 'session:what_happened.betrayed' },
  { roll: [15, 21, 22], text: () => 'session:what_happened.murdered' },
  {
    roll: [23, 24, 25, 26],
    text: () => 'session:what_happened.never_seen_again',
  },
  { roll: [31, 32, 33], text: () => 'session:what_happened.starved_to_death' },
  { roll: [34, 35, 36], text: () => 'session:what_happened.commited_suicide' },
  {
    roll: [41, 42, 43, 44],
    text: () => 'session:what_happened.died_in_battle',
  },
  { roll: [45, 46, 51, 52], text: () => 'session:what_happened.charmed' },
  { roll: [53, 54, 55, 56], text: () => 'session:what_happened.possessed' },
  { roll: [61, 62, 63], text: () => 'session:what_happened.came_back_changed' },
  { roll: [64, 65, 66], text: () => 'session:what_happened.still_looking' },
]

const ITS_TOLD_THAT: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:its_told_that.gold' },
  { roll: [15, 16, 21, 22], text: () => 'session:its_told_that.artifact' },
  { roll: [23, 24, 25, 26], text: () => 'session:its_told_that.armor' },
  { roll: [31, 32, 33], text: () => 'session:its_told_that.weapon' },
  { roll: [34, 35, 36], text: () => 'session:its_told_that.book' },
  { roll: [41, 42, 43, 44], text: () => 'session:its_told_that.treasure' },
  {
    roll: [45, 45, 46, 51, 52],
    text: () => 'session:its_told_that.war_chest',
  },
  {
    roll: [53, 54, 55, 56],
    text: () => 'session:its_told_that.remains',
  },
  { roll: [61, 62, 63], text: () => 'session:its_told_that.dwarven_artifact' },
  { roll: [64, 65, 66], text: () => 'session:its_told_that.elf_ruby' },
]
const ADJECTIVE_ADVERSARY: LegendTableItem[] = [
  {
    roll: [11, 12, 13, 14],
    text: () => 'session:adjective_adversary.aggresive',
  },
  {
    roll: [15, 16, 21, 22],
    text: () => 'session:adjective_adversary.blood_thirsty',
  },
  { roll: [23, 24, 25], text: () => 'session:adjective_adversary.cruel' },
  { roll: [26, 31, 32], text: () => 'session:adjective_adversary.horrible' },
  { roll: [33, 34], text: () => 'session:adjective_adversary.hungry' },
  {
    roll: [35, 36, 41, 42, 43],
    text: () => 'session:adjective_adversary.guarding',
  },
  { roll: [44, 45, 46], text: () => 'session:adjective_adversary.starving' },
  { roll: [51, 52, 53, 54], text: () => 'session:adjective_adversary.greedy' },
  { roll: [55, 56, 61], text: () => 'session:adjective_adversary.crazy' },
  { roll: [62, 63], text: () => 'session:adjective_adversary.murderous' },
  { roll: [64, 65], text: () => 'session:adjective_adversary.manic' },
  { roll: [66], text: () => 'session:adjective_adversary.hunting' },
]

const ADVERSARY: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'session:adversary.wolf_kin' },
  { roll: [15, 16, 21, 22], text: () => 'session:adversary.slave_traders' },
  { roll: [23, 24, 25], text: () => 'session:adversary.orcs' },
  { roll: [26, 31, 32], text: () => 'session:adversary.ghosts' },
  { roll: [33, 34], text: () => 'session:adversary.saurians' },
  { roll: [35, 36, 41, 42, 43], text: () => 'session:adversary.iron_guards' },
  { roll: [44, 45, 46], text: () => 'session:adversary.undead' },
  { roll: [51, 52, 53, 54], text: () => 'session:adversary.robbers' },
  { roll: [55, 56, 61], text: () => 'session:adversary.goblins' },
  { roll: [62, 63], text: () => 'session:adversary.ogres' },
  { roll: [64, 65], text: () => getText(MONSTER_LIST).text() },
  {
    roll: [66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 5:
          return 'session:adversary.demon_two'
        case 6:
          return 'session:adversary.demon_with_count'

        case 1:
        case 2:
        case 3:
        case 4:
        default:
          return 'session:adversary.demon_one'
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
