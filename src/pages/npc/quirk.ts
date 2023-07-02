import { translationDict } from '../../functions/translation-dict'

const quirks = [
  'family_dream',
  'skill_gambler',
  'haunted_by_dream',
  'chewing_narcotics',
  'has_treasure_map',
  'alder_spy',
  'too_sensitive',
  'squeamish',
  'obsessed_with_monster',
  'cultist',
  'sleeps_bad',
  'legendary_pickpocket',
  'only_survivor',
  'worships_god_in_the_deep',
  'possessed_by_demon',
  'avenge_parent',
  'bankrupt',
  'hates_competitor',
  'hides_secret',
  'will_do_anything',
  'expensive_habits',
  'likes_to_scare',
  'believes_to_be_royal',
  'wants_revenge',
  'interested_poetry',
  'cheater',
  'gossips',
  'doubter',
  'dreams_of_killing',
  'touchy',
  'storyteller',
  'will_take_over',
  'craving_beer',
  'believes_to_be_folllowed',
  'swears',
  'theory_of_world',
] as const

export type Quirk = (typeof quirks)[number]
export const getQuirks = () => [...quirks]

export const quirkTranslationDict = translationDict(quirks, 'npc', 'quirk.')
