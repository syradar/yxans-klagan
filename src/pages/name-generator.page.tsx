import React, { useState } from 'react'
import 'twin.macro'
import { Button } from '../components'
import { Parchment } from '../components/parchment'
import { range } from '../functions/array.functions'
import { getRandomEländerName } from '../functions/name.functions'

export const NameGeneratorPage = () => {
  const getNames = (count = 10) =>
    range(count).map((_) => getRandomEländerName())

  const [erländerNames, setErländerNames] = useState<string[]>(getNames())

  const getErländerNames = () => {
    setErländerNames(getNames())
  }

  return (
    <div tw="flex flex-col gap-y-8">
      <h1 tw="text-center text-6xl" className="yx-heading">
        Namn
      </h1>
      <Parchment>
        <h2 tw="text-4xl text-center" className="yx-heading">
          Mäniskonamn
        </h2>

        <Button variant="primary" onClick={() => getErländerNames()}>
          Erländare
        </Button>

        {erländerNames.length > 0 && (
          <ul>
            {erländerNames.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        )}
      </Parchment>
    </div>
  )
}
