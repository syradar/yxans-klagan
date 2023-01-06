import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { EncounterViewModel } from '../models/encounter.model'
import { Terrain } from '../models/terrain.model'
import { Parchment } from './parchment'

interface EncounterProps {
  encounter: EncounterViewModel
}

export const Encounter = ({ encounter }: EncounterProps) => {
  const { t } = useTranslation(['encounters', 'common'])

  const formatTerrains = (terrains: Terrain[]): string => {
    if (terrains.length >= 9) {
      return t('Terrain.All', { ns: 'common' })
    }

    return terrains
      .map((terrain) => t(`Terrain.${terrain}`, { ns: 'common' }))
      .join(', ')
  }

  return (
    <div>
      <Parchment>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-4 p-2 text-center text-4xl font-bold">
            {encounter.id}
          </div>
          <h2 className="yx-heading flex text-center text-4xl">
            {encounter.title}
          </h2>
        </div>
        <div>
          {t('TerrainType')}: {formatTerrains(encounter.terrains)}
        </div>
        <div>
          {t('Page', { ns: 'common' })}: {encounter.page}
        </div>
      </Parchment>
    </div>
  )
}
