import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Grid, Pancake } from '../components/Stack'
import { Stat } from '../components/Stat'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { finds } from '../data/find.data'
import { createFindViewModel, getRandomFind } from '../functions/find.functions'
import {
  Find,
  FindChance,
  FindLocation,
  FindType,
  FindViewModel,
} from '../models/find.model'
import { Unique, getId } from '../models/utils.model'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'

export const FindsPage = () => {
  const t = useAppSelector(selectTranslateFunction(['finds', 'common']))
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
    <div className="flex w-full flex-col gap-y-8 pb-16">
      <PageHeader>{t('finds:Title')}</PageHeader>
      <div className="w-full md:mx-auto md:max-w-screen-md">
        <div className="flex flex-col gap-16">
          <Grid cols="2">
            <Pancake>
              <h2 className="yx-heading  text-center text-3xl">
                {t('finds:Find.Location.Carried')}
              </h2>
              <Button
                variant="secondary"
                extraCss="max-w-full border-yellow-800 bg-gradient-to-bl  from-yellow-800 to-yellow-600 px-0
                text-yellow-50 hover:to-yellow-500 hover:text-yellow-50 focus-visible:outline focus-visible:outline-black"
                onPress={() => updateFindData('Carried', 'Simple')}
              >
                {t('finds:Find.Type.Simple')}
              </Button>
              <Button
                variant="secondary"
                extraCss="max-w-full border-gray-300 bg-gradient-to-bl from-gray-300 to-gray-100
                px-0 text-gray-800 hover:to-gray-50 hover:text-gray-800 focus-visible:outline focus-visible:outline-black"
                onPress={() => updateFindData('Carried', 'Valuable')}
              >
                {t('finds:Find.Type.Valuable')}
              </Button>
              <Button
                variant="secondary"
                extraCss="max-w-full border-yellow-400 bg-gradient-to-bl from-yellow-400 to-yellow-100 px-0
                text-yellow-900 hover:to-yellow-50  hover:text-yellow-900 focus-visible:outline focus-visible:outline-black"
                onPress={() => updateFindData('Carried', 'Precious')}
              >
                {t('finds:Find.Type.Precious')}
              </Button>
            </Pancake>
            <Pancake>
              <h2 className="yx-heading  text-center text-3xl">
                {t('finds:Find.Location.Lair')}
              </h2>
              <Button
                extraCss="max-w-full border-yellow-800 bg-gradient-to-bl from-yellow-800 to-yellow-600 px-0 text-yellow-50 hover:to-yellow-500 hover:text-yellow-50 focus-visible:outline focus-visible:outline-black"
                variant="secondary"
                onPress={() => updateFindData('Lair', 'Simple')}
              >
                {t('finds:Find.Type.Simple')}
              </Button>
              <Button
                extraCss="max-w-full border-gray-300 bg-gradient-to-bl from-gray-300 px-0 text-gray-800 hover:to-gray-50 hover:text-gray-800  focus-visible:outline focus-visible:outline-black"
                variant="secondary"
                onPress={() => updateFindData('Lair', 'Valuable')}
              >
                {t('finds:Find.Type.Valuable')}
              </Button>
              <Button
                extraCss="max-w-full border-yellow-400 bg-gradient-to-bl from-yellow-400 to-yellow-100 px-0 text-yellow-900 hover:to-yellow-50  hover:text-yellow-900 focus-visible:outline focus-visible:outline-black"
                variant="secondary"
                onPress={() => updateFindData('Lair', 'Precious')}
              >
                {t('finds:Find.Type.Precious')}
              </Button>
            </Pancake>
          </Grid>
          <div
            className={`
             transition-transform
            ${transition ? 'translate-y-1' : 'translate-y-0'}`}
          >
            <Parchment>
              <Pancake>
                <h2 className="yx-heading mb-4 text-center text-2xl lg:text-4xl">
                  {t(`finds:Find.${find.title}`)}
                </h2>

                <Pancake>
                  <Stat size="large" label={t('finds:Value')}>
                    {find.value.length > 0
                      ? find.value
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          .map((v) => `${v.coins} ${t(v.label as any)}`)
                          .join(', ')
                      : '–'}
                  </Stat>
                  <Grid cols="3">
                    <Stat label={t('common:Weight.Weight')}>
                      {t(find.weight)}
                    </Stat>
                    <Stat label={t('finds:Type')}>
                      {t(`finds:Find.Type.${find.type}`)}
                    </Stat>
                    <Stat label={t('finds:Location')}>
                      {t(`finds:Find.Location.${find.location}`)}
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
