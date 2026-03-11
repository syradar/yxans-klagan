import { LabelValue } from '../../components/LabelValue'
import Name from '../../components/Name'
import Stack from '../../components/Stack'
import { Typography } from '../../components/Typography'
import { ParchmentCard } from '../../components/card'
import { useAppSelector } from '../../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../../store/translations/translation.slice'
import {
  Inn,
  innGuestTranslationDict,
  innOddityTranslationDict,
  innSpecialtyTranslationDict,
} from './inn-generator'

export const InnView = ({ inn }: { inn: Inn }) => {
  const t = useAppSelector(selectTranslateFunction(['village']))
  const currentLang = useAppSelector(selectCurrentLanguage)

  return (
    <ParchmentCard subtle>
      <div>
        <Stack.Vertical spacing="none">
          <div className="text-sm">{t('village:inns.inn')}</div>
          <Typography parchment variant="h3">
            {inn.name[currentLang]}
          </Typography>
        </Stack.Vertical>

        <div className="flex flex-wrap gap-8">
          <LabelValue label={t('village:inns.oddities.oddity')}>
            {t(innOddityTranslationDict[inn.oddity])}
          </LabelValue>
          <LabelValue label={t('village:inns.specialities.speciality')}>
            {t(innSpecialtyTranslationDict[inn.speciality])}
          </LabelValue>
          <LabelValue label={t('village:inns.guests.guest')}>
            {t(innGuestTranslationDict[inn.guest])}
          </LabelValue>
          <LabelValue label={t('village:institutions.owner')}>
            <Name names={inn.owner.name}></Name>
          </LabelValue>
        </div>
      </div>
    </ParchmentCard>
  )
}
