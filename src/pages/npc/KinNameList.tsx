import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { useCallback, useEffect, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Typography } from '../../components/Typography'
import { range } from '../../functions/array.functions'
import { Gender } from '../../models/gender.model'
import { useAppSelector } from '../../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../../store/translations/translation.slice'
import { NameList } from './NameList'
import { HumanKin } from './name'
import { ValidLanguage } from '../../hooks/useValidLanguage'

interface KinNameListProps {
  title: HumanKin
  nameFunc: (g: Gender, lang: ValidLanguage) => string[]
}

export const KinNameList = ({ title, nameFunc }: KinNameListProps) => {
  const t = useAppSelector(selectTranslateFunction(['names', 'common']))
  const currentLanguage = useAppSelector(selectCurrentLanguage)

  const randomNames = useCallback(
    (count = 10) => ({
      female: range(count).map((_) => nameFunc('Female', currentLanguage)),
      male: range(count).map((_) => nameFunc('Male', currentLanguage)),
    }),
    [currentLanguage, nameFunc],
  )

  const [names, setNames] = useState(randomNames())
  const getNames = () => setNames(randomNames())

  useEffect(() => {
    setNames(randomNames())
  }, [currentLanguage, randomNames])

  return (
    <div>
      <div className="mb-4 flex flex-col flex-wrap justify-between gap-2 lg:flex-row lg:items-center">
        <Typography variant="h2" parchment useMargin={false}>
          {t(`common:Kin.Human.${title}`)}
        </Typography>
        <ParchmentButton buttonType="primary" onPress={() => getNames()}>
          <>
            <ArrowPathIcon className="h-5 w-5" />
            {t('names:CreateNewNames')}
          </>
        </ParchmentButton>
      </div>
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
