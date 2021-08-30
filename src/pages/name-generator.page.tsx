import React, { useState } from 'react'
import 'twin.macro'
import { Button } from '../components'
import { Parchment } from '../components/parchment'
import { range } from '../functions/array.functions'
import { getRandomEländerName } from '../functions/name.functions'
import { Gender } from '../models/general.model'

export const NameGeneratorPage = () => {
  const getNames = (count: number, gender: Gender) =>
    range(count).map((_) => getRandomEländerName(gender))

  const [erländerNames, setErländerNames] = useState<string[]>(
    getNames(10, Gender.Female),
  )
  const [maleErländerNames, setMaleErländerNames] = useState<string[]>(
    getNames(10, Gender.Male),
  )

  const getErländerNames = () => {
    setErländerNames(getNames(10, Gender.Female))
    setMaleErländerNames(getNames(10, Gender.Male))
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
        <div tw="grid grid-cols-2">
          <div>
            <h3 tw="text-2xl" className="yx-heading">
              Kvinnor
            </h3>

            {erländerNames.length > 0 && (
              <ul>
                {erländerNames.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h3 tw="text-2xl" className="yx-heading">
              Män
            </h3>

            {maleErländerNames.length > 0 && (
              <ul>
                {maleErländerNames.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Parchment>
    </div>
  )
}
