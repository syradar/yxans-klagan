import { useCallback, useEffect, useState } from 'react'
import { LabelValue } from '../../components/LabelValue'
import Name from '../../components/Name'
import { ParchmentButton } from '../../components/ParchmentButton'
import Stack from '../../components/Stack'
import { Stat } from '../../components/Stat'
import { Typography } from '../../components/Typography'
import { ParchmentCard } from '../../components/card'
import { Parchment } from '../../components/parchment'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../../store/translations/translation.slice'
import { saveVillageToHex, selectMap } from '../../features/map/map-slice'
import { HexKey } from '../places/map.model'
import { InnView } from './InnView'
import {
  Village,
  ageOfVillageTranslationDict,
  createRandomVillage,
  leaderOddityTranslationDict,
  leaderTypeTranslationDict,
  villageFameTranslationDict,
  villageInstitutionTranslationDict,
  villageOddityTranslationDict,
  villageProblemTranslationDict,
  villageSizeTranslationDict,
} from './village-generator'

interface VillagePageProps {
  hexKey: HexKey;
}

export const VillagePage = ({ hexKey }: VillagePageProps) => {
  const dispatch = useAppDispatch()
  const { hexes } = useAppSelector(selectMap)
  const t = useAppSelector(selectTranslateFunction(['village']))
  const currentLang = useAppSelector(selectCurrentLanguage)

  // Buscamos si el hexágono actual ya tiene una aldea guardada
  const currentHex = hexes.find(h => h.hexKey === hexKey)
  const savedVillage = currentHex?.villageData

  const [village, setVillage] = useState<Village | undefined>(savedVillage)

  // Si cambiamos de hexágono, actualizamos la vista
  useEffect(() => {
    setVillage(currentHex?.villageData)
  }, [hexKey, currentHex?.villageData])

  const generateNewVillageName = useCallback(() => {
    if (window.confirm("¿Seguro que quieres generar una nueva aldea? Se sobrescribirá la actual.")) {
      const newVillage = createRandomVillage()
      setVillage(newVillage)
      // Lo guardamos en el estado global del mapa
      dispatch(saveVillageToHex({ hexKey, village: newVillage }))
    }
  }, [dispatch, hexKey])

  const handleGenerateFirstTime = useCallback(() => {
    const newVillage = createRandomVillage()
    setVillage(newVillage)
    dispatch(saveVillageToHex({ hexKey, village: newVillage }))
  }, [dispatch, hexKey])

if (!village) {
    // Si no hay aldea generada, el componente se vuelve invisible (lo manejaremos desde el popover)
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center border-b-2 border-amber-900 pb-2">
        <Typography variant="h2" parchment>
          Aldea de {hexKey}
        </Typography>
        <ParchmentButton small buttonType="danger" onPress={generateNewVillageName}>
          Regenerar Aldea
        </ParchmentButton>
      </div>

      <Parchment>
        <div>{t(villageSizeTranslationDict[village.size])}</div>
        <Typography variant="h2" parchment>
          {village.name[currentLang]}
        </Typography>

        <Stack.Vertical>
          <div className="flex flex-wrap gap-6">
            <Stat flexGreedy label={t(`village:inhabitants`)}>
              {village.inhabitants} st
            </Stat>
            <Stat flexGreedy label={t('village:age')}>
              {village.age} {t('village:years')}
            </Stat>
            <Stat flexGreedy label={t('village:founded')}>
              {t(ageOfVillageTranslationDict[village.builtWhen])}
            </Stat>
          </div>

          {village.leader ? (
            <ParchmentCard subtle>
              <section>
                {t('village:leader.leader')}
                <Typography variant="h3" parchment>
                  <Name names={village.leader.name}></Name>
                </Typography>
                <div className="flex flex-wrap gap-6">
                  <Stat label={t('village:leader.type.type')}>
                    {t(leaderTypeTranslationDict[village.leader.type])}
                  </Stat>
                  <Stat label={t('village:leader.oddities.oddity')}>
                    {t(leaderOddityTranslationDict[village.leader.oddity])}
                  </Stat>
                </div>
              </section>
            </ParchmentCard>
          ) : null}
          <section>
            <Typography variant="h3" parchment>
              {t('village:quirks')}
            </Typography>
            <div className="flex flex-wrap gap-6">
              <Stat flexGreedy label={t('village:problems.problem')}>
                {t(villageProblemTranslationDict[village.problem])}
              </Stat>
              <Stat flexGreedy label={t('village:fames.fame')}>
                {t(villageFameTranslationDict[village.fame])}
              </Stat>
              <Stat flexGreedy label={t('village:oddities.oddity')}>
                {t(villageOddityTranslationDict[village.oddity])}
              </Stat>
            </div>
          </section>

          <section>
            {village.inns.length > 0 || village.institutions.length > 0 ? (
              <section className="flex flex-col gap-4">
                <Typography variant="h3" parchment>
                  {t('village:institutions.institutions')}
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
                              {t(
                                villageInstitutionTranslationDict[
                                  institution.type
                                ],
                              )}
                            </div>
                            <LabelValue label={t('village:institutions.owner')}>
                              <Name names={institution.owner.name} />
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
