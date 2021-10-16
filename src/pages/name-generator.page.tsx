import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { KinNameList, PageHeader, Parchment } from '../components'
import {
  getRandomAilanderName,
  getRandomAlderlanderarName,
  getRandomAsleneName,
} from '../functions/name.functions'
import { HumanKin } from '../models/name.model'

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
              title={HumanKin.Ailander}
              nameFunc={getRandomAilanderName}
            ></KinNameList>
          </Parchment>
        </div>

        <div tw=" flex-basis[500px]">
          <Parchment>
            <KinNameList
              tw="p-0"
              title={HumanKin.Alderlander}
              nameFunc={getRandomAlderlanderarName}
            ></KinNameList>
          </Parchment>
        </div>

        <div tw=" flex-basis[500px]">
          <Parchment>
            <KinNameList
              tw="p-0"
              title={HumanKin.Aslene}
              nameFunc={getRandomAsleneName}
            ></KinNameList>
          </Parchment>
        </div>
      </div>
    </div>
  )
}
