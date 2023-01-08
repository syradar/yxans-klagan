import { useTranslation } from 'react-i18next'
import { allEncounters } from '../data/encounter.data'

import { EncounterViewModel } from '../models/encounter.model'
import { ValidLanguage } from '../models/language.model'
import { Parchment } from './parchment'
import Stack from './Stack'
import { Tag } from './Tag'

interface EncounterProps {
  encounter: EncounterViewModel
}

export const Encounter = ({ encounter }: EncounterProps) => {
  const { t, i18n } = useTranslation(['encounters', 'common'])

  return (
    <div>
      <Parchment>
        <Stack.Vertical>
          <div className="flex items-center gap-2">
            <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 p-2 text-center text-2xl font-bold">
              {encounter.id}
            </div>
            <h2 className="yx-heading flex text-center text-4xl">
              {
                allEncounters[i18n.language as ValidLanguage][encounter.id]
                  .title
              }
            </h2>
          </div>
          <div>
            <>
              {t('Page', { ns: 'common' })}. {encounter.page}
            </>
          </div>
          <Stack.Horizontal spacing="small" wrap>
            {encounter.possibleTerrains.map((pt) => (
              <Tag key={pt}>
                <>{t(`common:Terrain.${pt}`)}</>
              </Tag>
            ))}
          </Stack.Horizontal>
        </Stack.Vertical>
      </Parchment>
    </div>
  )
}
