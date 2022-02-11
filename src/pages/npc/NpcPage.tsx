import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { Button } from '../../components/Button'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { Pancake, Train } from '../../components/Stack'
import { getRandomCharacteristic } from './characteristics'
import { NPC } from './npc'
import { getRandomOccupation } from './occupation'

export const NpcPage = () => {
  const { t, i18n } = useTranslation(['npc', 'common'])

  const createNPC = (): NPC => ({
    occupation: getRandomOccupation(),
    characteristic: getRandomCharacteristic(),
  })

  const [npc, setNpc] = useState<NPC>(createNPC())

  const generateOccupation = () => {
    setNpc(createNPC())
  }

  return (
    <div tw="flex flex-col gap-y-8 w-full pb-16">
      <PageHeader>{t('Title')}</PageHeader>
      <Parchment deps={[i18n.language, npc]}>
        <Pancake>
          <Train>
            <Button isSmall onClick={() => generateOccupation()}>
              {t('NpcButton')}
            </Button>
          </Train>

          <div tw="text-lg lg:(text-2xl)" className="yx-prose">
            {t(`Occupation.${npc.occupation}`)}
          </div>
          <div tw="text-lg lg:(text-2xl)" className="yx-prose">
            {t(`Characteristic.${npc.characteristic}`)}
          </div>
        </Pancake>
      </Parchment>
    </div>
  )
}

export default NpcPage
