import { useTranslation } from 'react-i18next'
import { ParchmentCard } from '../../components/card'
import { LabelValue } from '../../components/LabelValue'
import { Name } from '../../components/Name'
import Stack from '../../components/Stack'
import { Typography } from '../../components/Typography'
import { useValidLanguage } from '../../hooks/useValidLanguage'
import { Inn } from './inn-generator'

export const InnView = ({ inn }: { inn: Inn }) => {
  const { t } = useTranslation(['village'])
  const currentLang = useValidLanguage()

  return (
    <ParchmentCard subtle>
      <div>
        <Stack.Vertical spacing="none">
          <div className="text-sm">{t('village:Inns.Inn')}</div>
          <Typography parchment variant="h3">
            {inn.name[currentLang]}
          </Typography>
        </Stack.Vertical>

        <div className="flex flex-wrap gap-8">
          <LabelValue label={t('village:Inns.Oddities.Oddity')}>
            {t(`village:Inns.Oddities.${inn.oddity}`)}
          </LabelValue>
          <LabelValue label={t('village:Inns.Specialities.Speciality')}>
            {t(`village:Inns.Specialities.${inn.speciality}`)}
          </LabelValue>
          <LabelValue label={t('village:Inns.Guests.Guest')}>
            {t(`village:Inns.Guests.${inn.guest}`)}
          </LabelValue>
          <LabelValue label={t('village:Institutions.Owner')}>
            <Name name={inn.owner.name}></Name>
          </LabelValue>
        </div>
      </div>
    </ParchmentCard>
  )
}
