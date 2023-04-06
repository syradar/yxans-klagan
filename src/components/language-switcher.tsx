import { useTranslation } from 'react-i18next'

import { ValidLanguage } from '../models/language.model'
import { LanguageButton } from './language-button'
import Stack from './Stack'

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('core')

  const changeLanguage = (lng: ValidLanguage) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Stack.Horizontal center>
      <LanguageButton
        onClick={() => changeLanguage('sv')}
        disabled={i18n.language === 'sv'}
      >
        {t('Language-Swedish')}
      </LanguageButton>
      <LanguageButton
        onClick={() => changeLanguage('en')}
        disabled={i18n.language === 'en'}
      >
        {t('Language-English')}
      </LanguageButton>
    </Stack.Horizontal>
  )
}
