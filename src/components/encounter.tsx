import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { getTerrainName } from '../functions/terrain.functions'
import { EncounterViewModel } from '../models/encounter.model'
import { Terrain } from '../models/terrain.model'
import { Parchment } from './parchment'

interface EncounterProps {
  encounter: EncounterViewModel
}

export const Encounter = ({ encounter }: EncounterProps) => {
  const [transition, setTransition] = useState(false)

  const formatTerrains = (terrains: Terrain[]): string => {
    if (terrains.length >= 9) {
      return 'Alla'
    }

    return terrains.map(getTerrainName).join(', ')
  }

  useEffect(() => {
    setTransition(true)

    setTimeout(() => {
      setTransition(false)
    }, 100)
  }, [encounter])

  return (
    <div
      tw="transition-transform translate-y-0"
      css={[transition && tw`translate-y-2`]}
    >
      <Parchment deps={[encounter.id]}>
        <div tw="flex gap-2 mb-4 items-center">
          <div tw="text-4xl text-center font-bold p-2 border-4 w-12 flex items-center justify-center aspect-ratio[1] h-12 rounded-full">
            {encounter.id}
          </div>
          <h2 tw="text-4xl text-center flex" className="yx-heading">
            {encounter.title}
          </h2>
        </div>
        <div>Terrängtyp: {formatTerrains(encounter.terrains)}</div>
        <div>Sida: {encounter.page}</div>
      </Parchment>
    </div>
  )
}
