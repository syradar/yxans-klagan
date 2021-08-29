import React from 'react'
import 'twin.macro'
import { Button } from '../components'
import { Parchment } from '../components/parchment'

export const NameGeneratorPage = () => {
  return (
    <div tw="flex flex-col gap-y-8">
      <h1 tw="text-center text-6xl" className="yx-heading">
        Namn
      </h1>
      <Parchment>
        <h2 tw="text-4xl text-center" className="yx-heading">
          Mäniskonamn
        </h2>

        <Button
          variant="primary"
          onClick={() => {
            console.log('name')
          }}
        >
          Ge mig fler namn
        </Button>
      </Parchment>
    </div>
  )
}
