import { ValidLanguage } from '../hooks/useValidLanguage'
import { useAppDispatch, useAppSelector } from '../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
  setTranslationsAsync,
} from '../store/translations/translation.slice'
import Stack from './Stack'
import { LanguageButton } from './language-button'

export const LanguageSwitcher = () => {
  const lang = useAppSelector(selectCurrentLanguage)
  const t = useAppSelector(selectTranslateFunction(['core']))
  const dispatch = useAppDispatch()

  const changeLanguage = async (lng: ValidLanguage) => {
    await dispatch(setTranslationsAsync({ language: lng, source: 'user' }))
  }

  return (
    <Stack.Horizontal center>
      <LanguageButton
        onPress={() => changeLanguage('sv')}
        isDisabled={lang === 'sv'}
      >
        {t('core:language.swedish')}
      </LanguageButton>
      <LanguageButton
        onPress={() => changeLanguage('en')}
        isDisabled={lang === 'en'}
      >
        {t('core:language.english')}
      </LanguageButton>
    </Stack.Horizontal>
  )
}
