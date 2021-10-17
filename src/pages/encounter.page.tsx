import React, { useState } from 'react'
import 'twin.macro'
import { Button } from '../components/Button'
import { Encounter } from '../components/encounter'
import { PageHeader } from '../components/page-header'
import { getRandomEncounter } from '../functions/encounter.functions'
import { getTerrainName } from '../functions/terrain.functions'
import { EncounterViewModel } from '../models/encounter.model'
import { getTerrainKeys, Terrain } from '../models/terrain.model'

export const EncounterPage = () => {
  const [encounter, setEncounter] = useState<EncounterViewModel | undefined>(
    undefined,
  )

  const [oldTerrain, setOldTerrain] = useState<Terrain | undefined>(undefined)

  const [encounterLog, setEncounterLog] = useState<
    (EncounterViewModel & { timeStamp: number })[]
  >([])

  const handleClick = (terrain: Terrain) => {
    const randomEncounter = getRandomEncounter(terrain)
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

  return (
    <div tw="flex flex-col gap-y-8 w-full items-center">
      <PageHeader>Slumpmöten</PageHeader>
      <div tw="w-full bg-gray-200 p-2 grid grid-cols-2 md:grid-cols-3 lg:(flex) gap-2">
        {getTerrainKeys().map((t) => (
          <Button
            key={t}
            isSmall
            onClick={() => {
              handleClick(t)
            }}
          >
            {getTerrainName(t)}
          </Button>
        ))}
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
