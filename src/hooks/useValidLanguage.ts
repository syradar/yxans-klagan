import { useState, useEffect } from 'react'
import { ValidLanguage, validLanguages } from '../models/language.model'
import { useLocalStorage } from './use-local-storage'

export const useValidLanguage = () => {
  const [lsLang, setLsLang] = useLocalStorage('language', 'en')
  const [language, _setLanguageState] = useState<ValidLanguage>('en')

  useEffect(() => {
    if (
      lsLang !== language &&
      validLanguages.includes(lsLang as ValidLanguage)
    ) {
      _setLanguageState(lsLang as ValidLanguage)
    }
  }, [lsLang, language])

  const setLanguage = (lang: ValidLanguage) => {
    if (validLanguages.includes(lang)) {
      setLsLang(lang)
    }
  }

  return [language, setLanguage] as const
}
