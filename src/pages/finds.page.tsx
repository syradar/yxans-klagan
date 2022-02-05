import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import tw from 'twin.macro'
import { Button } from '../components/Button'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { Grid, Pancake } from '../components/stack'
import { Stat } from '../components/stat'
import { finds } from '../data/find.data'
import { createFindViewModel, getRandomFind } from '../functions/find.functions'
import {
  Find,
  FindChance,
  FindLocation,
  FindType,
  FindViewModel,
} from '../models/find.model'
import { getId, Unique } from '../models/utils.model'

export const FindsPage = () => {
  const { t, i18n } = useTranslation(['finds'])
  const [transition, setTransition] = useState(false)

  const createFind = (
    location: FindLocation,
    type: FindType,
  ): Find<FindType, FindChance, FindLocation> & Unique => {
    return { ...getRandomFind(finds[location][type]), id: getId() }
  }

  const [findData, setFindData] = useState<
    Find<FindType, FindChance, FindLocation> & Unique
  >(createFind('Carried', 'Simple'))

  const updateFindData = (location: FindLocation, type: FindType) => {
    setFindData(() => createFind(location, type))
  }

  const [find, setFind] = useState<FindViewModel>(createFindViewModel(findData))

  useEffect(() => {
    setFind(() => createFindViewModel(findData))

    setTransition(true)

    setTimeout(() => {
      setTransition(false)
    }, 100)
  }, [findData])

  return (
    <div tw="flex flex-col gap-y-8 w-full pb-16">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="md:(max-w-screen-md w-full mx-auto)">
        <div tw="flex flex-col gap-16">
          <Grid cols="2">
            <Pancake>
              <h2 tw="text-center  text-3xl" className="yx-heading">
                {t('Find.Location.Carried')}
              </h2>
              <Button
                variant="secondary"
                tw="px-0 max-w-full bg-gradient-to-bl to-yellow-600 from-yellow-800 border-yellow-800 text-yellow-50
                hover:(to-yellow-500 from-yellow-700 border-yellow-700 text-yellow-50) focus-visible:(outline-black outline-style[solid])"
                onClick={() => updateFindData('Carried', 'Simple')}
              >
                {t('Find.Type.Simple')}
              </Button>
              <Button
                variant="secondary"
                tw="px-0 max-w-full bg-gradient-to-bl to-gray-100 from-gray-300 border-gray-300 text-gray-800
                hover:(to-gray-50 from-gray-200 border-gray-200 text-gray-800) focus-visible:(outline-black outline-style[solid])"
                onClick={() => updateFindData('Carried', 'Valuable')}
              >
                {t('Find.Type.Valuable')}
              </Button>
              <Button
                variant="secondary"
                tw="px-0 max-w-full bg-gradient-to-bl to-yellow-100 from-yellow-400 border-yellow-400 text-yellow-900
                hover:(to-yellow-50 from-yellow-300 border-yellow-300 text-yellow-900) focus-visible:(outline-black outline-style[solid])"
                onClick={() => updateFindData('Carried', 'Precious')}
              >
                {t('Find.Type.Precious')}
              </Button>
            </Pancake>
            <Pancake>
              <h2 tw="text-center  text-3xl" className="yx-heading">
                {t('Find.Location.Lair')}
              </h2>
              <Button
                tw="px-0 max-w-full bg-gradient-to-bl to-yellow-600 from-yellow-800 border-yellow-800 text-yellow-50 hover:(to-yellow-500 from-yellow-700 border-yellow-700 text-yellow-50) focus-visible:(outline-black outline-style[solid])"
                variant="secondary"
                onClick={() => updateFindData('Lair', 'Simple')}
              >
                {t('Find.Type.Simple')}
              </Button>
              <Button
                tw="px-0 max-w-full bg-gradient-to-bl from-gray-300 border-gray-300 text-gray-800 hover:(to-gray-50 from-gray-200 border-gray-200 text-gray-800) focus-visible:(outline-black outline-style[solid])"
                variant="secondary"
                onClick={() => updateFindData('Lair', 'Valuable')}
              >
                {t('Find.Type.Valuable')}
              </Button>
              <Button
                tw="px-0 max-w-full bg-gradient-to-bl to-yellow-100 from-yellow-400 border-yellow-400 text-yellow-900 hover:(to-yellow-50 from-yellow-300 border-yellow-300 text-yellow-900) focus-visible:(outline-black outline-style[solid])"
                variant="secondary"
                onClick={() => updateFindData('Lair', 'Precious')}
              >
                {t('Find.Type.Precious')}
              </Button>
            </Pancake>
          </Grid>
          <div
            tw="transition-transform translate-y-0"
            css={[transition && tw`translate-y-1`]}
          >
            <Parchment deps={[find, i18n.language]}>
              <Pancake>
                <h2
                  tw="text-center text-2xl lg:(text-4xl) mb-4"
                  className="yx-heading"
                >
                  {t(`Find.${find.title}`)}
                </h2>

                <Pancake>
                  <Stat size="large" label={t('Value')}>
                    {find.value.length > 0
                      ? find.value
                          .map((v) => `${v.coins} ${t(v.label)}`)
                          .join(', ')
                      : '–'}
                  </Stat>
                  <Grid cols="3">
                    <Stat label={t('Weight')}>{find.weight}</Stat>
                    <Stat label={t('Type')}>{t(`Find.Type.${find.type}`)}</Stat>
                    <Stat label={t('Location')}>
                      {t(`Find.Location.${find.location}`)}
                    </Stat>
                  </Grid>
                </Pancake>
              </Pancake>
            </Parchment>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindsPage
