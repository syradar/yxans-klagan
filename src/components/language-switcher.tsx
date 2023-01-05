import { useTranslation } from 'react-i18next'

import { ValidLanguage } from '../models/language.model'
import { LanguageButton } from './language-button'
import { Pancake } from './Stack'

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('core')

  const changeLanguage = (lng: ValidLanguage) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="px-2">
      <Pancake spacing="none">
        <LanguageButton
          selected={i18n.language === 'sv'}
          onClick={() => changeLanguage('sv')}
          disabled={i18n.language === 'sv'}
        >
          {t('Language-Swedish')}
        </LanguageButton>
        <LanguageButton
          selected={i18n.language === 'en'}
          onClick={() => changeLanguage('en')}
          disabled={i18n.language === 'en'}
        >
          {t('Language-English')}
        </LanguageButton>
      </Pancake>
    </div>
  )
}
