import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { ParchmentButton } from '../components/ParchmentButton'
import { generateLegend } from '../functions/legend.functions'
import { ArrowPathIcon } from '@heroicons/react/20/solid'

export const SessionPage = () => {
  const { t, i18n } = useTranslation(['session', 'common'])
  const [legend, setLegend] = useState(generateLegend(t))
  const getLegend = useCallback(() => setLegend(generateLegend(t)), [t])

  useEffect(() => {
    getLegend()
  }, [getLegend, i18n.language])

  return (
    <div className="flex w-full flex-col gap-y-4">
      <PageHeader>{t('session:Title')}</PageHeader>

      <ParchmentButton onClick={() => getLegend()}>
        <ArrowPathIcon className="h-5 w-5" />
        <div>{t('session:Legend')}</div>
      </ParchmentButton>

      <div className="">
        <div className="flex max-w-prose flex-col gap-8 lg:w-[65ch]">
          <Parchment>
            <div className="yx-prose">{legend}</div>
          </Parchment>
        </div>
      </div>
    </div>
  )
}

export default SessionPage
