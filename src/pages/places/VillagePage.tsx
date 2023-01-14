import { useTranslation } from 'react-i18next'
import { Button } from '../../components/Button'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { Pancake, Train } from '../../components/Stack'

export const VillagePage = () => {
  const { t } = useTranslation(['village'])

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
    <div className="flex w-full flex-col gap-y-8 pb-16">
      <PageHeader>{t('village:Title')}</PageHeader>
      <Parchment>
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
