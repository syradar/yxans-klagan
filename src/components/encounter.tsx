import { allEncounters } from '../data/encounter.data'
import { EncounterViewModel } from '../models/encounter.model'
import { terrainTranslationDict } from '../models/terrain.model'
import { useAppSelector } from '../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../store/translations/translation.slice'
import { Parchment } from './parchment'
import Stack from './Stack'
import { Tag } from './Tag'

interface EncounterProps {
  encounter: EncounterViewModel
}

export const Encounter = ({ encounter }: EncounterProps) => {
  const t = useAppSelector(selectTranslateFunction(['common', 'encounter']))
  const currentLanguage = useAppSelector(selectCurrentLanguage)

  return (
    <div>
      <Parchment>
        <Stack.Vertical>
          <div className="flex items-center gap-2">
            <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 p-2 text-center text-2xl font-bold">
              {encounter.id}
            </div>
            <h2 className="yx-heading flex text-center text-4xl">
              {/*
               //TODO: fix the exclamation mark <> null assertion
               */}
              {allEncounters[currentLanguage][encounter.id]!.title}
            </h2>
          </div>
          <div>
            <>
              {t('common:page')}. {encounter.page}
            </>
          </div>
          <Stack.Horizontal
            spacing="small"
            wrap
          >
            {encounter.possibleTerrains.map(pt => (
              <Tag key={pt}>{t(terrainTranslationDict[pt])}</Tag>
            ))}
          </Stack.Horizontal>
        </Stack.Vertical>
      </Parchment>
    </div>
  )
}
