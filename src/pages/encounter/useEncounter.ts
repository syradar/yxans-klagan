import { nanoid } from 'nanoid'
import { useState } from 'react'
import { rollD66 } from '../../functions/dice.functions'
import { getRandomEncounter } from '../../functions/encounter.functions'
import { EncounterViewModel } from '../../models/encounter.model'
import { Terrain } from '../../models/terrain.model'
import { ValidLanguage } from '../../hooks/useValidLanguage'
import { at, head } from '../../functions/array.functions'

type EncounterViewModelWithId = EncounterViewModel & { keyId: string }

export type EncounterLogEntry = {
  id: string
  terrain: Terrain
  encounters: EncounterViewModelWithId[]
}

const newEncounter = (
  terrain: Terrain,
  lang: ValidLanguage,
): EncounterViewModelWithId => {
  const roll = rollD66()

  return {
    ...getRandomEncounter(roll, terrain, lang),
    keyId: nanoid(),
  }
}

export const useEncounter = () => {
  const [encounterLog, setEncounterLog] = useState<EncounterLogEntry[]>([])

  const generateNewEncounter = (terrain: Terrain, lang: ValidLanguage) => {
    const isNewTerrain = head(encounterLog)
      .map(el => el.terrain !== terrain)
      .unwrapOr(true)

    const generatedEncounter = newEncounter(terrain, lang)

    setEncounterLog(prev => {
      const p0 = at(prev, 0)

      if (!isNewTerrain && p0.some) {
        const p0s = p0.safeUnwrap()

        return [
          {
            ...p0s,
            encounters: [generatedEncounter, ...p0s.encounters],
          },
          ...prev.slice(1),
        ].slice(0, 10)
      }

      return [
        {
          id: nanoid(),
          terrain,
          encounters: [generatedEncounter],
        },
        ...prev,
      ].slice(0, 10)
    })
  }

  const currentEncounter = encounterLog[0]?.encounters[0]

  return {
    encounter: currentEncounter,
    generateNewEncounter,
    encounterLog,
  }
}
