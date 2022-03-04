import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { Button } from '../../components/Button'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { Pancake, Train } from '../../components/Stack'

export const VillagePage = () => {
  const { t, i18n } = useTranslation(['common'])

  // const createNPC = (): NPC => ({
  //   kin: getRandomKinType(),
  //   name: 'Testnamn',
  //   occupation: getRandomOccupation(),
  //   characteristic: getRandomCharacteristic(),
  //   quirk: getRandomQuirk(),
  // })

  // const [npc, setNpc] = useState<NPC>(createNPC())

  // const generateOccupation = () => {
  //   setNpc(createNPC())
  // }

  return (
    <div tw="flex flex-col gap-y-8 w-full pb-16">
      <PageHeader>{t('Title')}</PageHeader>
      <Parchment deps={[i18n.language]}>
        <Pancake>
          <Train>
            <Button isSmall>Get village</Button>
          </Train>

          <div className="yx-prose">Village name</div>
        </Pancake>
      </Parchment>
    </div>
  )
}

export default VillagePage
