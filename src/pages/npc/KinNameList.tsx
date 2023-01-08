import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { range } from '../../functions/array.functions'
import { Gender } from '../../models/gender.model'
import { ValidLanguage } from '../../models/language.model'
import { HumanKin } from './name'
import { ReloadIcon } from '../../components/icons/reload-icon'
import { NameList } from './NameList'

interface KinNameListProps {
  title: HumanKin
  nameFunc: (g: Gender, lang: ValidLanguage) => string[]
}

export const KinNameList = ({ title, nameFunc }: KinNameListProps) => {
  const { t, i18n } = useTranslation(['common', 'names'])

  const randomNames = useCallback(
    (count = 10) => ({
      female: range(count).map((_) =>
        nameFunc('Female', i18n.language as ValidLanguage),
      ),
      male: range(count).map((_) =>
        nameFunc('Male', i18n.language as ValidLanguage),
      ),
    }),
    [i18n.language, nameFunc],
  )

  const [names, setNames] = useState(randomNames())
  const getNames = () => setNames(randomNames())

  useEffect(() => {
    setNames(randomNames())
  }, [i18n.language, randomNames])

  return (
    <div>
      <button
        type="button"
        className="mb-4 flex items-center gap-2 hover:text-red-500"
        onClick={() => getNames()}
      >
        <h2 className="yx-heading flex text-center text-2xl lg:text-4xl">
          {t(`common:Kin.Human.${title}`)}
        </h2>
        <ReloadIcon container={`w-6 h-6`} svg={``}></ReloadIcon>
      </button>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold uppercase">
            {t('common:Gender.Women')}
          </h3>
          <NameList names={names.female}></NameList>
        </div>

        <div>
          <h3 className="text-2xl font-semibold uppercase">
            {t('common:Gender.Men')}
          </h3>
          <NameList names={names.male}></NameList>
        </div>
      </div>
    </div>
  )
}
