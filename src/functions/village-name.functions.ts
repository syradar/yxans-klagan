import { villageNamesEn } from '../data/village-name.data'
import { ValidLanguage } from '../hooks/useValidLanguage'
import { choose } from './dice.functions'
import { capitalize } from './utils.functions'

type LanguageVillageNameModelMap = { [VL in ValidLanguage]: VillageNameData }

const languageVillageNameModelMap: LanguageVillageNameModelMap = {
  es: villageNamesEn,
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
  const separator = lang === 'es' ? ' ' : ''

  return prefixAndSuffix
    .map((fix) => (lang === 'es' ? capitalize(fix) : fix))
    .join(separator)
}
