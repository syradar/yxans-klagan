import { nanoid } from 'nanoid'
import {
  weightedRandom,
  WeightedChoice,
  choose,
} from '../../functions/dice.functions'
import { ValidLanguage } from '../../models/language.model'
import { Character } from './character'
import { VillageInstitution } from './village-generator'

export type Inn = {
  name: { [L in ValidLanguage]: string }
  id: string
  oddity: InnOddity
  speciality: InnSpecialty
  guest: InnGuest
  owner: Character
}

export const createRandomInn = ({ owner }: VillageInstitution): Inn => {
  const name = {
    sv: createRandomInnName('sv'),
    en: createRandomInnName('en'),
  }
  const { oddity, guest, speciality } =
    weightedRandom(innQuirksWithWeights).value

  return {
    id: nanoid(),
    name,
    oddity,
    speciality,
    guest,
    owner,
  }
}

const innOddity = [
  'violenceIsInTheAir',
  'barrelsInsteadOfChairsAndPlanksInsteadOfTables',
  'bigFireplace',
  'peltsOnWalls',
  'longCommunalTable',
  'gamblingDen',
  'mediocreBard',
  'niceDog',
  'grumpyOwner',
  'monsterHeadOnWall',
  'singingWaiter',
  'stompedFloor',
  'birthdayParty',
  'drunkAdventurers',
] as const
export type InnOddity = typeof innOddity[number]

const innSpecialty = [
  'cheapDilutedBeer',
  'meatStew',
  'grilledRodent',
  'stewedTurnips',
  'saltBird',
  'bloodSoup',
  'fierySpiceWine',
  'roastedPiglet',
  'swampStew',
  'vegetableMush',
  'saltedFish',
  'cookedCrow',
  'bearStew',
  'dwarvenStrongAle',
] as const
export type InnSpecialty = typeof innSpecialty[number]

const innGuest = [
  'escapedCriminal',
  'unhappyFarmer',
  'scarredTreasureHunter',
  'dirtyAndSullenHunter',
  'silentRavenSister',
  'noisyBandit',
  'oldWarVeteran',
  'nobleInDisguise',
  'secretiveSpellbinder',
  'annoyingJester',
  'dustyTraveller',
  'hungryDwarf',
  'frostyElf',
  'scoutingThief',
] as const
export type InnGuest = typeof innGuest[number]

type InnQuirk = {
  oddity: InnOddity
  speciality: InnSpecialty
  guest: InnGuest
}

const innQuirksWithWeights: WeightedChoice<InnQuirk>[] = [
  {
    weight: 3,
    value: {
      speciality: 'cheapDilutedBeer',
      guest: 'escapedCriminal',
      oddity: 'violenceIsInTheAir',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'meatStew',
      guest: 'unhappyFarmer',
      oddity: 'barrelsInsteadOfChairsAndPlanksInsteadOfTables',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'grilledRodent',
      guest: 'scarredTreasureHunter',
      oddity: 'bigFireplace',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'stewedTurnips',
      guest: 'dirtyAndSullenHunter',
      oddity: 'peltsOnWalls',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'saltBird',
      guest: 'silentRavenSister',
      oddity: 'longCommunalTable',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'bloodSoup',
      guest: 'noisyBandit',
      oddity: 'gamblingDen',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'fierySpiceWine',
      guest: 'oldWarVeteran',
      oddity: 'mediocreBard',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'roastedPiglet',
      guest: 'nobleInDisguise',
      oddity: 'niceDog',
    },
  },
  {
    weight: 3,
    value: {
      speciality: 'swampStew',
      guest: 'secretiveSpellbinder',
      oddity: 'grumpyOwner',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'vegetableMush',
      guest: 'annoyingJester',
      oddity: 'monsterHeadOnWall',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'saltedFish',
      guest: 'dustyTraveller',
      oddity: 'singingWaiter',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'cookedCrow',
      guest: 'hungryDwarf',
      oddity: 'stompedFloor',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'bearStew',
      guest: 'frostyElf',
      oddity: 'birthdayParty',
    },
  },
  {
    weight: 2,
    value: {
      speciality: 'dwarvenStrongAle',
      guest: 'scoutingThief',
      oddity: 'drunkAdventurers',
    },
  },
]

export const createRandomInnName = (lang: ValidLanguage): string => {
  const prefix = choose(lang === 'en' ? innNamePrefixesEn : innNamePrefixesSv)
  const suffix = choose(lang === 'en' ? innNameSuffixesEn : innNameSuffixesSv)

  return `${prefix} ${suffix}`
}

const innNamePrefixesSv = [
  'Tredje',
  'Lilla',
  'Röda',
  'Dimmiga',
  'Blodiga',
  'Gamla',
  'Gyllene',
  'Svala',
  'Svalkande',
  'Goda',
  'Andra',
  'Sista',
  'Stegrande',
  'Glada',
  'Sjungande',
  'Rullande',
  'Hoppande',
  'Klagande',
  'Snikna',
  'Runda',
  'Flammande',
  'Sista',
  'Silver',
  'Svarta',
  'Döda',
  'Stora',
  'Vrålande',
  'Skålande',
  'Lallande',
  'Magra',
  'Tjocka',
  'Feta',
  'Trinda',
  'Söta',
  'Larmande',
  'Griniga',
  'Lätta',
  'Stora',
  'Gula',
  'Grymma',
  'Gröna',
]

const innNameSuffixesSv = [
  'Lyktan',
  'Svinet',
  'Hjulet',
  'Stopet',
  'Sparven',
  'Geten',
  'Pilen',
  'Krukan',
  'Lammet',
  'Pigan',
  'Gubben',
  'Draken',
  'Gripen',
  'Galten',
  'Hjälten',
  'Tunnan',
  'Hoppet',
  'Barden',
  'Hunden',
  'Hästen',
  'Jungfrun',
  'Ulven',
  'Björnen',
  'Gasten',
  'Råttan',
  'Kruset',
  'Muggen',
  'Bägaren',
  'Örnen',
  'Korpen',
  'Hammaren',
  'Spiken',
  'Kråkan',
  'Druiden',
  'Riddaren',
  'Rövaren',
  'Vildsvinet',
  'Jägaren',
]

const innNamePrefixesEn = [
  'The Third',
  'The Little',
  'The Red',
  'The Misty',
  'The Bloody',
  'The Old',
  'The Golden',
  'The Cold',
  'The Refreshing',
  'The Good',
  'The Second',
  'The Last',
  'The Prancing',
  'The Happy',
  'The Singing',
  'The Rolling',
  'The Rumping',
  'The Wailing',
  'The Greedy',
  'The Round',
  'The Flaming',
  'The Last',
  'The Silver',
  'The Black',
  'The Dead',
  'The Big',
  'The Roaring',
  'The Cheering',
  'The Humming',
  'The Meagre',
  'The Fat',
  'The Thick',
  'The Round',
  'The Sweet',
  'The Boisterous',
  'The Grumpy',
  'The Fuzzy',
  'The Furry',
  'The Bitter',
]

const innNameSuffixesEn = [
  'Lantern',
  'Swine',
  'Wheel',
  'Stoop',
  'Sparrow',
  'Goat',
  'Arrow',
  'Pot',
  'Lamb',
  'Maid',
  'Man',
  'Dragon',
  'Griffin',
  'Boar',
  'Barrel',
  'Bard',
  'Dog',
  'Horse',
  'Girl',
  'Wolf',
  'Bear',
  'Ghost',
  'Rat',
  'Jar',
  'Mug',
  'Goblet',
  'Eagle',
  'Raven',
  'Hammer',
  'Spike',
  'Crow',
  'Druid',
  'Knight',
  'Bandit',
  'Wild Boar',
  'Hunter',
  'Crest',
  'Cave',
]
