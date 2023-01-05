import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReloadIcon } from '../components/icons/reload-icon'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { generateLegend } from '../functions/legend.functions'

export const SessionPage = () => {
  const { t, i18n } = useTranslation(['session', 'common'])
  const [legend, setLegend] = useState(generateLegend(t))
  const getLegend = useCallback(() => setLegend(generateLegend(t)), [t])

  useEffect(() => {
    getLegend()
  }, [getLegend, i18n.language])

  return (
    <div className="flex w-full flex-col items-center gap-y-8">
      <PageHeader>{t('Title')}</PageHeader>

      <div className="">
        <div className="flex max-w-prose flex-col gap-8 lg:w-[65ch]">
          <Parchment>
            <button
              className="mb-4 flex items-center gap-2 hover:text-red-500"
              onClick={() => getLegend()}
              type="button"
            >
              <h2 className="yx-heading flex text-center text-4xl">
                {t('Legend')}
              </h2>
              <ReloadIcon container={`w-6 h-6`} svg={``}></ReloadIcon>
            </button>
            <div className="yx-prose">{legend}</div>
          </Parchment>
        </div>
      </div>
    </div>
  )
}

export default SessionPage
