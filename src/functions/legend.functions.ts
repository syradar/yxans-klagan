import {
  getRandomInt,
  getRandomT6,
  getRandomT66,
  getRandomT8,
} from './dice.functions'

export const generateLegend = (): string => {
  const longTimeAgo = `För länge sedan`
  const { description, age } = timeAgo()

  return [
    longTimeAgo,
    description,
    `(${age} ES) var det en`,
    getText(ADJECTIVE),
    getText(WHO_OR_WHAT),
    'som sökte',
    getText(WHO_SEARCHED_FOR),
    'på grund av',
    getText(BECAUSE),
    'och begav sig till',
    getText(LOCATION),
    'som ligger',
    getText(DISTANCE, getRandomT6),
    'i',
    getText(TERRAIN),
    'i riktning',
    `${getText(DIRECTION, getRandomT8)}.`,
    'Enligt sägnen sägs det att hen',
    getText(WHAT_HAPPENED),
    'och på platsen finns',
    getText(ITS_TOLD_THAT),
    'men också',
    getText(ADJECTIVE_ADVERSARY),
    `${getText(ADVERSARY)}.`,
  ].join(' ')
}

interface TimeAgoResult {
  description: string
  age: number
}

const timeAgo = (): TimeAgoResult => {
  const roll = getRandomT66()

  const time = TIME_AGO.find((ta) => ta.roll.includes(roll))
  if (time) {
    return {
      description: time.text,
      age: getRandomInt(time.ageRange[0], time.ageRange[1]),
    }
  }

  return (
    time ?? {
      description: 'innan blodsdimmans tid',
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
    text: 'innan skiftet',
    ageRange: [1100, 3000],
    roll: [11, 12],
  },
  {
    text: 'innan blodsdimman',
    ageRange: [300, 1100],
    roll: [13, 14, 15, 16, 21, 22, 23, 24, 25, 26],
  },
  {
    text: 'under de alderländska krigen',
    ageRange: [305, 360],
    roll: [31, 32, 33, 34, 35, 36, 41, 42, 43],
  },
  {
    text: 'under blodsdimmans tid',
    ageRange: [5, 280],
    roll: [44, 45, 46, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66],
  },
]

interface LegendTableItem {
  roll: number[]
  text: () => string
}

const getText = (
  arr: LegendTableItem[],
  diceFn: () => number = getRandomT66,
): string => {
  const roll = diceFn()

  const result = arr.find((a) => a.roll.includes(roll)) ?? {
    text: () => '',
    roll: [],
  }

  return result.text()
}

const ADJECTIVE: LegendTableItem[] = [
  { roll: [11], text: () => 'blodtörstig' },
  { roll: [12], text: () => 'hämndlysten' },
  { roll: [13], text: () => 'girig' },
  { roll: [14], text: () => 'olyckligt' },
  { roll: [15], text: () => 'påhittig' },
  { roll: [16], text: () => 'driftig' },
  { roll: [21], text: () => 'vänlig' },
  { roll: [22], text: () => 'uthållig' },
  { roll: [23, 24], text: () => 'lömsk' },
  { roll: [25, 26], text: () => 'moralisk' },
  { roll: [31, 32], text: () => 'skicklig' },
  { roll: [33, 34], text: () => 'snål' },
  { roll: [35, 36], text: () => 'fåfäng' },
  { roll: [41, 42], text: () => 'vis' },
  { roll: [43, 44], text: () => 'vacker' },
  { roll: [45, 46], text: () => 'ärofull' },
  { roll: [51, 52], text: () => 'missunnsam' },
  { roll: [53, 54], text: () => 'grym' },
  { roll: [55, 56], text: () => 'handlingskraftig' },
  { roll: [61, 62], text: () => 'listig' },
  { roll: [63, 64], text: () => 'rädd' },
  { roll: [65, 66], text: () => 'ond' },
]

const WHO_OR_WHAT: LegendTableItem[] = [
  { roll: [11], text: () => 'alv' },
  { roll: [12], text: () => 'dvärg' },
  { roll: [13], text: () => 'nasare' },
  { roll: [14], text: () => 'smed' },
  { roll: [15], text: () => 'bonde' },
  { roll: [16], text: () => 'lärling' },
  { roll: [21], text: () => 'druid' },
  { roll: [22], text: () => 'herde' },
  { roll: [23, 24], text: () => 'korpsyster' },
  { roll: [25, 26], text: () => 'rostbroder' },
  { roll: [31, 32], text: () => 'riddare/ryttare' },
  { roll: [33, 34], text: () => 'skattletare' },
  { roll: [35, 36], text: () => 'präst' },
  { roll: [41, 42], text: () => 'magiker' },
  { roll: [43, 44], text: () => 'rövarhövding' },
  { roll: [45, 46], text: () => 'krigare' },
  { roll: [51, 52], text: () => 'furste' },
  { roll: [53, 54], text: () => 'prins' },
  { roll: [55, 56], text: () => 'prinsessa' },
  { roll: [61, 62], text: () => 'drottning' },
  { roll: [63, 64], text: () => 'kung' },
  {
    roll: [65, 66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 1:
          return 'trupp'
        case 2:
          return 'by'
        case 3:
          return 'kult'
        case 4:
          return 'rövarband'
        case 5:
          return 'kabal'
        case 6:
          return 'monster'

        default:
          return 'rövarband'
      }
    },
  },
]

const WHO_SEARCHED_FOR: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'ett vapen' },
  { roll: [15, 16, 21, 22], text: () => 'en kärlek' },
  { roll: [23, 24, 25, 26], text: () => 'en vän i nöd' },
  { roll: [31, 32, 33, 34], text: () => 'en fiende' },
  { roll: [35, 36, 41, 42], text: () => 'en skatt' },
  { roll: [43, 44, 45, 46], text: () => 'en karta' },
  { roll: [51, 52, 53, 54], text: () => 'en familjemedlem' },
  { roll: [55, 56, 61, 62], text: () => 'en artefakt' },
  { roll: [63, 44, 65, 66], text: () => 'ett monster' },
]

const BECAUSE: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'kärlek' },
  { roll: [15, 16], text: () => 'vänskap' },
  { roll: [21, 22, 23, 24], text: () => 'ett löfte' },
  { roll: [25, 26, 31, 32, 33], text: () => 'en profetia' },
  { roll: [35, 36, 41], text: () => 'ett vad' },
  { roll: [42, 43, 44, 45], text: () => 'plikt' },
  { roll: [46, 51, 52], text: () => 'krig' },
  { roll: [53, 54, 55], text: () => 'ära' },
  { roll: [56, 61], text: () => 'vansinne' },
  { roll: [62, 63], text: () => 'drömmar' },
  { roll: [64, 65, 66], text: () => 'girighet' },
]

const LOCATION: LegendTableItem[] = [
  { roll: [11, 12, 13, 14, 15, 16], text: () => 'en ruin' },
  { roll: [21, 21], text: () => 'en gård' },
  { roll: [23, 24, 25, 26], text: () => 'en grav' },
  { roll: [31, 32, 33, 34], text: () => 'ett torn' },
  { roll: [35, 36], text: () => 'en borg' },
  { roll: [41, 42, 43], text: () => 'en by' },
  { roll: [44, 45, 46, 51, 52, 53], text: () => 'en grotta' },
  { roll: [54, 55, 56], text: () => 'en kulle' },
  { roll: [61, 62, 63], text: () => 'ett träd' },
  { roll: [64, 65, 66], text: () => 'en vattenkälla' },
]

const DISTANCE: LegendTableItem[] = [
  { roll: [1], text: () => 'här' },
  { roll: [2], text: () => 'i närheten' },
  { roll: [3], text: () => 'en dagsmarsch bort' },
  { roll: [4], text: () => 'flera dagsmarscher bort' },
  { roll: [5], text: () => 'i fjärran' },
  { roll: [6], text: () => 'på andra sidan Det glömda landet' },
]

const TERRAIN: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'ruinstad' },
  { roll: [15, 16, 21], text: () => 'träsk' },
  { roll: [22, 23, 24], text: () => 'myrmark' },
  { roll: [25, 26, 31, 32, 33, 34], text: () => 'slätt' },
  { roll: [35, 36, 41, 42, 43, 44], text: () => 'skog' },
  { roll: [45, 46, 51, 52, 53], text: () => 'kullar' },
  { roll: [54, 55, 56, 61, 62, 63], text: () => 'mörk skog' },
  { roll: [64], text: () => 'sjö' },
  { roll: [65, 66], text: () => 'berg' },
]

const DIRECTION: LegendTableItem[] = [
  { roll: [1], text: () => 'nord' },
  { roll: [2], text: () => 'nordöst' },
  { roll: [3], text: () => 'öst' },
  { roll: [4], text: () => 'sydöst' },
  { roll: [5], text: () => 'syd' },
  { roll: [6], text: () => 'sydväst' },
  { roll: [7], text: () => 'väst' },
  { roll: [8], text: () => 'nordväst' },
]

const WHAT_HAPPENED: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'blev förrådd' },
  { roll: [15, 21, 22], text: () => 'blev mördad' },
  { roll: [23, 24, 25, 26], text: () => 'aldrig sågs mer' },
  { roll: [31, 32, 33], text: () => 'svalt ihjäl' },
  { roll: [34, 35, 36], text: () => 'tog livet av sig' },
  { roll: [41, 42, 43, 44], text: () => 'dog i strid' },
  { roll: [45, 46, 51, 52], text: () => 'blev förtrollad' },
  { roll: [53, 54, 55, 56], text: () => 'blev besatt' },
  { roll: [61, 62, 63], text: () => 'kom tillbaka förändrad' },
  { roll: [64, 65, 66], text: () => 'letar fortfarande' },
]

const ITS_TOLD_THAT: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'guld, massor av guld' },
  { roll: [15, 16, 21, 22], text: () => 'en kraftfull artefakt' },
  { roll: [23, 24, 25, 26], text: () => 'en rustning' },
  { roll: [31, 32, 33], text: () => 'ett vapen' },
  { roll: [34, 35, 36], text: () => 'en ovärderlig bok' },
  { roll: [41, 42, 43, 44], text: () => 'en stor skatt' },
  { roll: [45, 45, 46, 51, 52], text: () => 'en försvunnen krigskassa' },
  { roll: [53, 54, 55, 56], text: () => 'lämningarna av en viktig person' },
  { roll: [61, 62, 63], text: () => 'en dvärgisk artefakt' },
  { roll: [64, 65, 66], text: () => 'en alvrubin' },
]
const ADJECTIVE_ADVERSARY: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'aggresiva' },
  { roll: [15, 16, 21, 22], text: () => 'blodtörstiga' },
  { roll: [23, 24, 25], text: () => 'grymma' },
  { roll: [26, 31, 32], text: () => 'fasansfulla' },
  { roll: [33, 34], text: () => 'hungriga' },
  { roll: [35, 36, 41, 42, 43], text: () => 'vaktande' },
  { roll: [44, 45, 46], text: () => 'utsvultna' },
  { roll: [51, 52, 53, 54], text: () => 'giriga' },
  { roll: [55, 56, 61], text: () => 'galna' },
  { roll: [62, 63], text: () => 'mordiska' },
  { roll: [64, 65], text: () => 'maniska' },
  { roll: [66], text: () => 'jagande' },
]

const ADVERSARY: LegendTableItem[] = [
  { roll: [11, 12, 13, 14], text: () => 'vargmän' },
  { roll: [15, 16, 21, 22], text: () => 'slavhandlare' },
  { roll: [23, 24, 25], text: () => 'orcher' },
  { roll: [26, 31, 32], text: () => 'gastar' },
  { roll: [33, 34], text: () => 'reptilfolk' },
  { roll: [35, 36, 41, 42, 43], text: () => 'järngardister' },
  { roll: [44, 45, 46], text: () => 'odöda' },
  { roll: [51, 52, 53, 54], text: () => 'rövare' },
  { roll: [55, 56, 61], text: () => 'svartalfer' },
  { roll: [62, 63], text: () => 'resar' },
  { roll: [64, 65], text: () => getText(MONSTER_LIST) },
  {
    roll: [66],
    text: () => {
      const roll = getRandomInt(1, 6)
      switch (roll) {
        case 5:
          return 'två demoner'
        case 6:
          return `${getRandomT6()} demoner`

        case 1:
        case 2:
        case 3:
        case 4:
        default:
          return 'en demon'
      }
    },
  },
]

const MONSTER_LIST: LegendTableItem[] = [
  { roll: [11, 12], text: () => 'stryparranka' },
  { roll: [13, 14, 15], text: () => 'gråbjörn' },
  { roll: [16, 21, 22], text: () => 'nattulv' },
  { roll: [23, 24], text: () => 'gast' },
  { roll: [25, 26], text: () => 'likätare' },
  { roll: [31, 32], text: () => 'skelett' },
  { roll: [33, 34], text: () => 'vandöd' },
  { roll: [35, 36], text: () => 'flygödla' },
  { roll: [41, 42], text: () => 'harpyor' },
  { roll: [43], text: () => 'minotaur' },
  { roll: [44], text: () => 'ent' },
  { roll: [45], text: () => 'avgrundsmask' },
  { roll: [46], text: () => 'jättebläckfisk' },
  { roll: [51], text: () => 'sjöorm' },
  { roll: [52], text: () => 'troll' },
  { roll: [53], text: () => 'dödsriddare' },
  { roll: [54], text: () => 'insektoid' },
  { roll: [55], text: () => 'blodling' },
  { roll: [56], text: () => 'mantikora' },
  { roll: [61], text: () => 'grip' },
  { roll: [62], text: () => 'jätte' },
  { roll: [63], text: () => 'hydra' },
  { roll: [64], text: () => 'demon' },
  { roll: [65], text: () => 'drakorm' },
  { roll: [66], text: () => 'drake' },
]
