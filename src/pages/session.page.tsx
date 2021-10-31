import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'
import { ReloadIcon } from '../components/icons/reload-icon'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { generateLegend } from '../functions/legend.functions'

export const SessionPage = () => {
  const { t, i18n } = useTranslation(['session', 'common'])
  const [legend, setLegend] = useState(generateLegend(t))
  const getLegend = () => setLegend(generateLegend(t))

  useEffect(() => {
    getLegend()
  }, [i18n.language])

  return (
    <div tw="flex flex-col gap-y-8 w-full items-center">
      <PageHeader>{t('Title')}</PageHeader>

      <div tw="">
        <div tw="max-w-prose lg:(w-[65ch]) flex flex-col gap-8">
          <Parchment deps={[legend]}>
            <button
              tw="flex gap-2 items-center mb-4 hover:text-yellow-500"
              onClick={() => getLegend()}
            >
              <h2 tw="text-4xl text-center flex" className="yx-heading">
                {t('Legend')}
              </h2>
              <ReloadIcon container={tw`w-6 h-6`} svg={tw``}></ReloadIcon>
            </button>
            <div className="yx-prose">{legend}</div>
          </Parchment>
        </div>
      </div>
    </div>
  )
}
