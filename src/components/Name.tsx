import { LanguageNameMap } from '../pages/npc/name2'
import { useAppSelector } from '../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../store/translations/translation.slice'

interface NameProps {
  name: LanguageNameMap
}
export const Name = ({ name }: NameProps) => {
  const t = useAppSelector(selectTranslateFunction(['names']))
  const currentLang = useAppSelector(selectCurrentLanguage)

  return (
    <div>
      {name[currentLang].firstName}
      {name[currentLang]?.familyName && ` ${name[currentLang].familyName}`}
      {name[currentLang]?.homeName &&
        ` ${t('names:OF')} ${name[currentLang].homeName}`}
      {name[currentLang]?.nickName &&
        ` ${t('names:THE')} ${name[currentLang].nickName}`}
    </div>
  )
}
