import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { Button } from '../components/Button'
import { Encounter } from '../components/encounter'
import { PageHeader } from '../components/page-header'
import { Train } from '../components/stack'
import { rollD66 } from '../functions/dice.functions'
import {
  getEncounterById,
  getRandomEncounter,
} from '../functions/encounter.functions'
import { EncounterViewModel } from '../models/encounter.model'
import { ValidLanguage } from '../models/language.model'
import { getTerrainKeys, Terrain } from '../models/terrain.model'

export const EncounterPage = () => {
  const { t, i18n } = useTranslation(['encounters', 'common'])
  const [encounter, setEncounter] = useState<EncounterViewModel | undefined>(
    undefined,
  )

  const [oldTerrain, setOldTerrain] = useState<Terrain | undefined>(undefined)

  const [encounterLog, setEncounterLog] = useState<
    (EncounterViewModel & { timeStamp: number })[]
  >([])

  const generateNewEncounter = (terrain: Terrain) => {
    const roll = rollD66()
    const randomEncounter = getRandomEncounter(
      roll,
      terrain,
      i18n.language as ValidLanguage,
    )
    setEncounter(randomEncounter)

    if (
      (terrain === undefined && oldTerrain === undefined) ||
      terrain === oldTerrain
    ) {
      setEncounterLog([
        { ...randomEncounter, timeStamp: new Date().getTime() },
        ...encounterLog,
      ])
    } else {
      setEncounterLog([{ ...randomEncounter, timeStamp: new Date().getTime() }])
    }
    setOldTerrain(terrain)
  }

  const handleClick = (terrain: Terrain) => {
    generateNewEncounter(terrain)
  }

  useEffect(() => {
    if (oldTerrain && encounter) {
      setEncounter(
        getEncounterById(encounter.id, i18n.language as ValidLanguage),
      )
      setEncounterLog(
        encounterLog.map((el) => {
          return {
            ...el,
            ...getEncounterById(el.id, i18n.language as ValidLanguage),
          }
        }),
      )
    }
  }, [i18n.language])

  return (
    <div tw="flex flex-col gap-y-8 w-full items-center">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="w-full bg-gray-200 p-2">
        <Train spacing="small">
          {getTerrainKeys().map((terrain) => (
            <Button
              key={terrain}
              isSmall
              onClick={() => {
                handleClick(terrain)
              }}
            >
              {t(`Terrain.${terrain}`, { ns: 'common' })}
            </Button>
          ))}
        </Train>
      </div>

      <div tw="w-full grid md:grid-flow-col auto-cols-auto gap-16">
        {encounter && (
          <div tw="max-w-prose lg:(w-[65ch])">
            <Encounter encounter={{ ...encounter }}></Encounter>
          </div>
        )}
        {!encounter && <div></div>}
        {!encounterLog && <div></div>}
        {encounterLog && (
          <ul tw="flex flex-col gap-1">
            {encounterLog.map((el) => (
              <li tw="flex gap-1" key={el.timeStamp}>
                <div tw="font-medium">
                  {el.id}: {el.title}
                </div>
                <div>(s. {el.page})</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
