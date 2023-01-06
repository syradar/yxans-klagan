import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Encounter } from '../components/encounter'
import { Label } from '../components/Label'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { ParchmentButton } from '../components/ParchmentButton'
import Stack, { Train } from '../components/Stack'
import { allEncounters } from '../data/encounter.data'
import { ValidLanguage } from '../models/language.model'
import { getTerrainKeys, Terrain } from '../models/terrain.model'
import { EncounterLogEntry, useEncounter } from './encounter/useEncounter'

export const EncounterPage = () => {
  const { t, i18n } = useTranslation(['encounters', 'common'])
  const { encounter, encounterLog, generateNewEncounter } = useEncounter()

  const handleClick = useCallback(
    (terrain: Terrain) => {
      generateNewEncounter(terrain, i18n.language as ValidLanguage)
    },
    [generateNewEncounter, i18n.language],
  )

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('Title')}</PageHeader>

      <div>
        <Label> {t('TerrainType')}</Label>
        <Train spacing="small">
          {getTerrainKeys().map((terrain) => (
            <ParchmentButton
              key={terrain}
              onClick={() => {
                handleClick(terrain)
              }}
            >
              {t(`Terrain.${terrain}`, { ns: 'common' })}
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
  const { t, i18n } = useTranslation(['encounters', 'common'])

  return (
    <Stack.Vertical>
      {encounterLog.map((entry) => (
        <Parchment key={entry.id} small>
          <div>
            <div className="yx-prose text-lg">
              {t(`Terrain.${entry.terrain}`, { ns: 'common' })}
            </div>
            <ul className="flex flex-col gap-1">
              {entry.encounters.map((el) => (
                <li className="flex gap-1" key={el.keyId}>
                  <div className="">
                    {el.id}:{' '}
                    {allEncounters[i18n.language as ValidLanguage][el.id].title}
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
