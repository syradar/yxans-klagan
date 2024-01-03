import { Option } from 'ts-results'
import { villageNamesEn, villageNamesSv } from '../data/village-name.data'
import { ValidLanguage } from '../hooks/useValidLanguage'
import { choose } from './dice.functions'
import { optionTypeGuard } from './option'
import { capitalize } from './utils'

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
): [Option<string>, Option<string>] => {
  const { prefix, suffix } = languageVillageNameModelMap[lang]

  return [choiceFunc(prefix), choiceFunc(suffix)]
}

const formatVillageName = (
  prefixAndSuffix: [Option<string>, Option<string>],
  lang: ValidLanguage,
) => {
  const separator = lang === 'en' ? ' ' : ''

  return prefixAndSuffix
    .filter(optionTypeGuard)
    .map(fix => fix.map(f => (lang === 'en' ? capitalize(f) : f)).safeUnwrap())

    .join(separator)
}
