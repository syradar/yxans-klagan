import { useState } from 'react'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { ParchmentButton } from '../../components/ParchmentButton'
import { withId } from '../../functions/utils.functions'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { chacteristicTranslationDict } from './characteristics'
import {
  getRandomCharacteristic,
  getRandomKinType,
  getRandomOccupation,
  getRandomQuirk,
  NPC,
} from './npc'
import { occupationTranslationDict } from './occupation'
import { quirkTranslationDict } from './quirk'

export const NpcPage = () => {
  const t = useAppSelector(selectTranslateFunction(['npc', 'common']))

  const createNPC = (): NPC => ({
    kin: getRandomKinType(),
    name: 'Testnamn',
    occupation: getRandomOccupation(),
    characteristic: getRandomCharacteristic(),
    quirk: getRandomQuirk(),
  })

  const [npc, setNpc] = useState<NPC>(createNPC())

  const generateOccupation = () => {
    setNpc(createNPC())
  }

  return (
    <div className="flex w-full flex-col gap-y-8 pb-16">
      <PageHeader>{t('npc:title')}</PageHeader>
      <ParchmentButton onPress={() => generateOccupation()}>
        {t('npc:npc_button')}
      </ParchmentButton>
      <Parchment>
        <div className="yx-prose">
          {[
            t(occupationTranslationDict[npc.occupation]),
            t(chacteristicTranslationDict[npc.characteristic]),
            t(quirkTranslationDict[npc.quirk]),
          ]
            .map(withId)
            .map(({ id, value }) => (
              <p key={id} className="mt-4 first:mt-0">
                {value}
              </p>
            ))}
        </div>
      </Parchment>
    </div>
  )
}

export default NpcPage
