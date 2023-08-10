import { useCallback } from 'react'
import { Encounter } from '../components/encounter'
import { Label } from '../components/Label'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { ParchmentButton } from '../components/ParchmentButton'
import Stack, { Train } from '../components/Stack'
import { allEncounters } from '../data/encounter.data'
import {
  getTerrainKeys,
  Terrain,
  terrainTranslationDict,
} from '../models/terrain.model'
import { useAppSelector } from '../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../store/translations/translation.slice'
import { EncounterLogEntry, useEncounter } from './encounter/useEncounter'

export const EncounterPage = () => {
  const t = useAppSelector(selectTranslateFunction(['encounter', 'common']))
  const currentLanguage = useAppSelector(selectCurrentLanguage)
  const { encounter, encounterLog, generateNewEncounter } = useEncounter()

  const handleClick = useCallback(
    (terrain: Terrain) => {
      generateNewEncounter(terrain, currentLanguage)
    },
    [generateNewEncounter, currentLanguage],
  )

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('encounter:title')}</PageHeader>

      <div>
        <Label> {t('encounter:terrain_type')}</Label>
        <Train spacing="small">
          {getTerrainKeys().map(terrain => (
            <ParchmentButton
              key={terrain}
              onPress={() => {
                handleClick(terrain)
              }}
            >
              {t(terrainTranslationDict[terrain])}
            </ParchmentButton>
          ))}
        </Train>
      </div>

      <div className="grid w-full auto-cols-auto gap-16 md:grid-flow-col">
        {encounter ? (
          <div className="max-w-prose lg:w-[65ch]">
            <Encounter encounter={encounter}></Encounter>
          </div>
        ) : null}

        <EncounterLog encounterLog={encounterLog}></EncounterLog>
      </div>
    </div>
  )
}

export default EncounterPage

const EncounterLog = ({
  encounterLog,
}: {
  encounterLog: EncounterLogEntry[]
}) => {
  const t = useAppSelector(selectTranslateFunction(['common']))
  const currentLanguage = useAppSelector(selectCurrentLanguage)

  return (
    <Stack.Vertical>
      {encounterLog.map(entry => (
        <Parchment
          key={entry.id}
          padding="sm"
        >
          <div>
            <div className="yx-prose text-lg">
              {t(terrainTranslationDict[entry.terrain])}
            </div>
            <ul className="flex flex-col gap-1">
              {entry.encounters.map(el => (
                <li
                  className="flex gap-1"
                  key={el.keyId}
                >
                  <div className="">
                    {el.id}: {allEncounters[currentLanguage][el.id].title}
                  </div>
                  <div>(s. {el.page})</div>
                </li>
              ))}
            </ul>
          </div>
        </Parchment>
      ))}
    </Stack.Vertical>
  )
}
