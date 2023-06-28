import { useEffect, useState } from 'react'
import { z } from 'zod'
import { useLocalStorage } from './use-local-storage'

const validLanguageSchema = z.union([z.literal('en'), z.literal('sv')])
export const validLanguages = ['en', 'sv'] as const
export type ValidLanguage = (typeof validLanguages)[number]

export const useValidLanguage = () => {
  const [lsLang, setLsLang] = useLocalStorage<ValidLanguage>(
    'language',
    'en',
    validLanguageSchema,
  )
  const [language, _setLanguageState] = useState<ValidLanguage>('en')

  useEffect(() => {
    if (lsLang !== language && validLanguages.includes(lsLang)) {
      _setLanguageState(lsLang)
    }
  }, [lsLang, language])

  const setLanguage = (lang: ValidLanguage) => {
    if (validLanguages.includes(lang)) {
      setLsLang(lang)
    }
  }

  return [language, setLanguage] as const
}
