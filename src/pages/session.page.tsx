import React, { useState } from 'react'
import 'twin.macro'
import { PageHeader, Parchment } from '../components'
import { generateLegend } from '../functions/legend.functions'

export const SessionPage = () => {
  const [legend, setLegend] = useState(generateLegend())
  const getLegend = () => setLegend(generateLegend())

  return (
    <div tw="flex flex-col gap-y-8 w-full items-center">
      <PageHeader>Spelmöte</PageHeader>

      <div tw="">
        <div tw="w-[65ch]">
          <Parchment>
            <button
              tw="flex gap-2 items-center mb-4 focus:outline-none hover:text-yellow-600"
              onClick={() => getLegend()}
            >
              <h2 tw="text-4xl text-center flex" className="yx-heading">
                Sägen
              </h2>
              <span>🔄</span>
            </button>
            <div>{legend}</div>
          </Parchment>
        </div>
      </div>
    </div>
  )
}
