import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ValidLanguage } from '../models/language.model'

export const useValidLanguage = () => {
  const { i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState<ValidLanguage>(
    i18n.language as ValidLanguage,
  )
  useEffect(() => {
    setCurrentLang(i18n.language as ValidLanguage)
  }, [i18n.language])

  return currentLang
}
