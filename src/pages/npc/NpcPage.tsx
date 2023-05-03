import { useState } from 'react'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Pancake } from '../../components/Stack'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import {
  getRandomCharacteristic,
  getRandomKinType,
  getRandomOccupation,
  getRandomQuirk,
  NPC,
} from './npc'

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
      <PageHeader>{t('npc:Title')}</PageHeader>
      <ParchmentButton onPress={() => generateOccupation()}>
        {t('npc:NpcButton')}
      </ParchmentButton>
      <Parchment>
        <Pancake>
          <div className="yx-prose">
            {t(`npc:Occupation.${npc.occupation}`)}
          </div>
          <div className="yx-prose">
            {t(`npc:Characteristic.${npc.characteristic}`)}
          </div>
          <div className="yx-prose">{t(`npc:Quirk.${npc.quirk}`)}</div>
        </Pancake>
      </Parchment>
    </div>
  )
}

export default NpcPage
