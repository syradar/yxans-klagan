import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Pancake } from '../../components/Stack'
import {
  getRandomCharacteristic,
  getRandomKinType,
  getRandomOccupation,
  getRandomQuirk,
  NPC,
} from './npc'

export const NpcPage = () => {
  const { t } = useTranslation(['npc', 'common'])

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
      <PageHeader>{t('Title')}</PageHeader>
      <ParchmentButton onClick={() => generateOccupation()}>
        {t('NpcButton')}
      </ParchmentButton>
      <Parchment>
        <Pancake>
          {/* <div className="text-lg lg:(text-2xl)" className="yx-prose">
            {t(`Kin.${npc.kin}.${npc.kin}`, { ns: 'common' })}
          </div> */}
          <div className="yx-prose">{t(`Occupation.${npc.occupation}`)}</div>
          <div className="yx-prose">
            {t(`Characteristic.${npc.characteristic}`)}
          </div>
          <div className="yx-prose">{t(`Quirk.${npc.quirk}`)}</div>
        </Pancake>
      </Parchment>
    </div>
  )
}

export default NpcPage
