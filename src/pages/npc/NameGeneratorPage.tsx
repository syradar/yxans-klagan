import { useTranslation } from 'react-i18next'
import { KinNameList } from './KinNameList'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import {
  getRandomAilanderName,
  getRandomAlderlanderName,
  getRandomAsleneName,
} from './name'

export const NameGeneratorPage = () => {
  const { t } = useTranslation('names')

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('Title')}</PageHeader>

      <div className="flex flex-wrap gap-4 xl:min-w-[600px]">
        <div className="basis-[500px]">
          <Parchment>
            <KinNameList
              title="Ailander"
              nameFunc={getRandomAilanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div className="basis-[500px]">
          <Parchment>
            <KinNameList
              title="Alderlander"
              nameFunc={getRandomAlderlanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div className=" basis-[500px]">
          <Parchment>
            <KinNameList
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
