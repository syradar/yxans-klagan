import { useCallback, useState } from 'react'
import { LabelValue } from '../../components/LabelValue'
import { Name } from '../../components/Name'
import { ParchmentButton } from '../../components/ParchmentButton'
import Stack from '../../components/Stack'
import { Stat } from '../../components/Stat'
import { Typography } from '../../components/Typography'
import { ParchmentCard } from '../../components/card'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { useAppSelector } from '../../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../../store/translations/translation.slice'
import { InnView } from './InnView'
import { Village, createRandomVillage } from './village-generator'

export const VillagePage = () => {
  const [village, setVillage] = useState<Village>(createRandomVillage())
  const t = useAppSelector(selectTranslateFunction(['village']))
  const currentLang = useAppSelector(selectCurrentLanguage)

  const generateNewVillageName = useCallback(() => {
    setVillage(createRandomVillage())
  }, [])

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('village:PageTitle')}</PageHeader>

      <div>{t('village:PageDescription')}</div>

      <ParchmentButton onPress={generateNewVillageName}>
        {t('village:CreateNewVillage')}
      </ParchmentButton>

      <Parchment>
        <div>{t(`village:Size.${village.size}`)}</div>
        <Typography variant="h2" parchment>
          {village.name[currentLang]}
        </Typography>

        <Stack.Vertical>
          <div className="flex flex-wrap gap-6">
            <Stat flexGreedy label={t(`village:Inhabitants`)}>
              {village.inhabitants} st
            </Stat>
            <Stat flexGreedy label={t('village:Age')}>
              {village.age} {t('village:Years')}
            </Stat>
            <Stat flexGreedy label={t('village:Founded')}>
              {t(`village:Ages.${village.builtWhen}`)}
            </Stat>
          </div>

          {village.leader ? (
            <ParchmentCard subtle>
              <section>
                {t('village:Leader.Leader')}
                <Typography variant="h3" parchment>
                  <Name name={village.leader.name}></Name>
                </Typography>
                <div className="flex flex-wrap gap-6">
                  <Stat label={t('village:Leader.Type.Type')}>
                    {t(`village:Leader.Type.${village.leader.type}`)}
                  </Stat>
                  <Stat label={t('village:Leader.Oddities.Oddity')}>
                    {t(`village:Leader.Oddities.${village.leader.oddity}`)}
                  </Stat>
                </div>
              </section>
            </ParchmentCard>
          ) : null}
          <section>
            <Typography variant="h3" parchment>
              {t('village:Quirks')}
            </Typography>
            <div className="flex flex-wrap gap-6">
              <Stat flexGreedy label={t('village:Problems.Problem')}>
                {t(`village:Problems.${village.problem}`)}
              </Stat>
              <Stat flexGreedy label={t('village:Fames.Fame')}>
                {t(`village:Fames.${village.fame}`)}
              </Stat>
              <Stat flexGreedy label={t('village:Oddities.Oddity')}>
                {t(`village:Oddities.${village.oddity}`)}
              </Stat>
            </div>
          </section>

          <section>
            {village.inns.length > 0 || village.institutions.length > 0 ? (
              <section className="flex flex-col gap-4">
                <Typography variant="h3" parchment>
                  {t('village:Institutions.Institutions')}
                </Typography>

                <Stack.Vertical>
                  {village.inns.length !== 0
                    ? village.inns.map((inn) => (
                        <InnView key={inn.id} inn={inn}></InnView>
                      ))
                    : null}

                  {village.institutions.length !== 0 ? (
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                      {village.institutions.map((institution) => (
                        <div
                          key={institution.id}
                          className="rounded border p-4 font-medium"
                        >
                          <Stack.Vertical>
                            <div>
                              {t(`village:Institutions.${institution.type}`)}
                            </div>
                            <LabelValue label={t('village:Institutions.Owner')}>
                              <Name name={institution.owner.name} />
                            </LabelValue>
                          </Stack.Vertical>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </Stack.Vertical>
              </section>
            ) : null}
          </section>
        </Stack.Vertical>
      </Parchment>
    </div>
  )
}

export default VillagePage
