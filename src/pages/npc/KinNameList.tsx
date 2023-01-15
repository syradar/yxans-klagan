import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { range } from '../../functions/array.functions'
import { Gender } from '../../models/gender.model'
import { ValidLanguage } from '../../models/language.model'
import { HumanKin } from './name'
import { NameList } from './NameList'
import { Typography } from '../../components/Typography'
import { ParchmentButton } from '../../components/ParchmentButton'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

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
      <div className="mb-4 flex flex-col flex-wrap justify-between gap-2 lg:flex-row lg:items-center">
        <Typography variant="h2" parchment useMargin={false}>
          {t(`common:Kin.Human.${title}`)}
        </Typography>
        <ParchmentButton buttonType="primary" onClick={() => getNames()}>
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
