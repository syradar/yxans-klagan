import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'
import { range } from '../functions/array.functions'
import { Gender } from '../models/gender.model'
import { ValidLanguage } from '../models/language.model'
import { HumanKin } from '../models/name.model'
import { ReloadIcon } from './icons'
import { NameList } from './name-list'

interface KinNameListProps {
  title: HumanKin
  nameFunc: (g: Gender, lang: ValidLanguage) => string[]
}

export const KinNameList = ({ title, nameFunc }: KinNameListProps) => {
  const { t, i18n } = useTranslation(['common', 'names'])

  const randomNames = (count = 10) => ({
    female: range(count).map((_) =>
      nameFunc(Gender.Female, i18n.language as ValidLanguage),
    ),
    male: range(count).map((_) =>
      nameFunc(Gender.Male, i18n.language as ValidLanguage),
    ),
  })

  const [names, setNames] = useState(randomNames())
  const getNames = () => setNames(randomNames())

  useEffect(() => {
    setNames(randomNames())
  }, [i18n.language])

  return (
    <div>
      <button
        tw="flex gap-2 items-center mb-4 hover:text-yellow-500"
        onClick={() => getNames()}
      >
        <h2 tw="text-2xl lg:(text-4xl) text-center flex" className="yx-heading">
          {t(`Kin.${title}`)}
        </h2>
        <ReloadIcon container={tw`w-6 h-6`} svg={tw``}></ReloadIcon>
      </button>
      <div tw="grid grid-cols-2 gap-16">
        <div>
          <h3 tw="font-semibold text-2xl uppercase">{t('Gender.Women')}</h3>
          <NameList names={names.female}></NameList>
        </div>

        <div>
          <h3 tw="font-semibold text-2xl uppercase">{t('Gender.Men')}</h3>
          <NameList names={names.male}></NameList>
        </div>
      </div>
    </div>
  )
}
