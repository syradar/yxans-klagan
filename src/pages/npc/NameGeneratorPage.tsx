import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { KinNameList } from './KinNameList'
import {
  getRandomAilanderName,
  getRandomAlderlanderName,
  getRandomAsleneName,
} from './name'

export const NameGeneratorPage = () => {
  const t = useAppSelector(selectTranslateFunction(['names', 'common']))

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('names:title')}</PageHeader>

      <div className="flex flex-wrap gap-4 lg:grid lg:grid-cols-2">
        <div className="flex-auto">
          <Parchment>
            <KinNameList
              title="ailander"
              nameFunc={getRandomAilanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div className="flex-auto">
          <Parchment>
            <KinNameList
              title="alderlander"
              nameFunc={getRandomAlderlanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div className=" flex-auto">
          <Parchment>
            <KinNameList
              title="aslene"
              nameFunc={getRandomAsleneName}
            ></KinNameList>
          </Parchment>
        </div>
      </div>
    </div>
  )
}

export default NameGeneratorPage
