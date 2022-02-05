import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { KinNameList } from '../components/kin-name-list'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import {
  getRandomAilanderName,
  getRandomAlderlanderName,
  getRandomAsleneName,
} from '../functions/name.functions'

export const NameGeneratorPage = () => {
  const { t } = useTranslation('names')

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>{t('Title')}</PageHeader>

      <div tw="flex flex-wrap xl:(min-w-[600px]) gap-4">
        <div tw=" flex-basis[500px]">
          <Parchment>
            <KinNameList
              tw="p-0"
              title="Ailander"
              nameFunc={getRandomAilanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div tw=" flex-basis[500px]">
          <Parchment>
            <KinNameList
              tw="p-0"
              title="Alderlander"
              nameFunc={getRandomAlderlanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div tw=" flex-basis[500px]">
          <Parchment>
            <KinNameList
              tw="p-0"
              title="Aslene"
              nameFunc={getRandomAsleneName}
            ></KinNameList>
          </Parchment>
        </div>
      </div>
    </div>
  )
}

export default NameGeneratorPage
