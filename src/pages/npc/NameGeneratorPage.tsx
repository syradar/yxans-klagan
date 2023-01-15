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

      <div className="flex flex-wrap gap-4 lg:grid lg:grid-cols-2">
        <div className="flex-auto">
          <Parchment>
            <KinNameList
              title="Ailander"
              nameFunc={getRandomAilanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div className="flex-auto">
          <Parchment>
            <KinNameList
              title="Alderlander"
              nameFunc={getRandomAlderlanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div className=" flex-auto">
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
