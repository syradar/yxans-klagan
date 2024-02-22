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
import { HumanKin, humanKinTranslationDict } from './name'
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
          {t(humanKinTranslationDict[title])}
        </Typography>
        <ParchmentButton buttonType="primary" onPress={() => getNames()}>
          <>
            <ArrowPathIcon className="size-5" />
            {t('names:create_new_names')}
          </>
        </ParchmentButton>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <Typography variant="h3">{t('common:gender.women')}</Typography>
          <NameList names={names.female}></NameList>
        </div>

        <div>
          <Typography variant="h3">{t('common:gender.men')}</Typography>
          <NameList names={names.male}></NameList>
        </div>
      </div>
    </div>
  )
}
