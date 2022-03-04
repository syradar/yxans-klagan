import { villageNamesSv, villageNamesEn } from '../data/village-name.data'
import { ValidLanguage } from '../models/language.model'

import { choose } from './dice.functions'
import { capitalize } from './utils.functions'

type LanguageVillageNameModelMap = { [VL in ValidLanguage]: VillageNameData }

const languageVillageNameModelMap: LanguageVillageNameModelMap = {
  sv: villageNamesSv,
  en: villageNamesEn,
}

export interface VillageNameData {
  prefix: readonly string[]
  suffix: readonly string[]
}

export const getFormattedVillageName = (
  lang: ValidLanguage,
  choiceFunc = choose,
): string => {
  const affixes = getVillagePrefixAndSuffix(lang, choiceFunc)

  return formatVillageName(affixes, lang)
}

const getVillagePrefixAndSuffix = (
  lang: ValidLanguage,
  choiceFunc = choose,
): [string, string] => {
  const { prefix, suffix } = languageVillageNameModelMap[lang]

  return [choiceFunc(prefix), choiceFunc(suffix)]
}

const formatVillageName = (
  prefixAndSuffix: [string, string],
  lang: ValidLanguage,
) => {
  const separator = lang === 'en' ? ' ' : ''

  return prefixAndSuffix
    .map((fix) => (lang === 'en' ? capitalize(fix) : fix))
    .join(separator)
}
