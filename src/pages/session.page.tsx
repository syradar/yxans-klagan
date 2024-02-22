import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { ParchmentButton } from '../components/ParchmentButton'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { rollD6 } from '../functions/dice.functions'
import { LegendTableItem, generateLegend } from '../functions/legend.functions'
import { useAppSelector } from '../store/store.hooks'
import {
  TFunction,
  TranslationKey,
} from '../store/translations/translation.model'
import { selectTranslateFunction } from '../store/translations/translation.slice'

export const SessionPage = () => {
  const t = useAppSelector(selectTranslateFunction(['session', 'common']))
  const [legend, setLegend] = useState(generateLegend())

  const getAdversary = (
    adversary: LegendTableItem,
    adjective: LegendTableItem,
    t: TFunction<'common' | 'session'>,
  ): string => {
    if (adversary.text() !== 'session:adversary.demon_with_count') {
      return `${t(adjective.text())} ${t(adversary.text())}`
    }

    const count = rollD6()

    return `${count} ${t(adjective.text())} ${t(adversary.text())}`
  }

  const text = [
    [
      t('session:along_time_ago'),
      t(legend.description),
      t(`session:years_ago`, { context: { years: legend.age.toString() } }),
      t('session:there_was'),
      t(legend.adjective.text()),
      t(legend.who_or_what.text()),
      t('session:who_searched'),
      t(legend.who_searched_for.text()),
      t('session:because_of'),
      t(legend.because.text()),
      t('session:and_traveled_to'),
      t(legend.location.text()),
      t('session:located'),
      t(legend.distance.text()),
      t(legend.terrain.text()),
      t('session:in_the_direction_of'),
      t(legend.direction.text()),
    ].join(' '),
    [
      legend.who_or_what.pronoun === 'Third'
        ? t(`session:as_the_legend_goes_it_is_said_that_third`)
        : t(`session:as_the_legend_goes_it_is_said_that`),
      t(
        `${legend.what_happened.text()}${
          legend.what_happened.pronoun === 'Third' ? '_Third' : ''
        }` as TranslationKey<'session' | 'common'>,
      ),
      t(`session:and_that_at_the_location_there`),
      t(legend.its_told_that.text()),
      t(`session:but_also`),
      getAdversary(legend.adversary, legend.adjective_adversary, t),
    ].join(' '),
  ].join('. ')

  return (
    <div className="flex w-full flex-col gap-y-4">
      <PageHeader>{t('session:title')}</PageHeader>

      <ParchmentButton onPress={() => setLegend(generateLegend())}>
        <ArrowPathIcon className="size-5" />
        <div>{t('session:legend')}</div>
      </ParchmentButton>

      <div className="">
        <div className="flex max-w-prose flex-col gap-8 lg:w-[65ch]">
          <Parchment>
            <div className="yx-prose">{text}</div>
          </Parchment>
        </div>
      </div>
    </div>
  )
}

export default SessionPage
