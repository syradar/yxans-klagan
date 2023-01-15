import { useTranslation } from 'react-i18next'
import { useValidLanguage } from '../hooks/useValidLanguage'
import { LanguageNameMap } from '../pages/npc/name2'

interface NameProps {
  name: LanguageNameMap
}
export const Name = ({ name }: NameProps) => {
  const { t } = useTranslation(['names'])
  const currentLang = useValidLanguage()

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
