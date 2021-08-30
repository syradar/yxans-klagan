import React, { useState } from 'react'
import 'twin.macro'
import { Parchment } from '../components/parchment'
import { range } from '../functions/array.functions'
import {
  getRandomAlderlänningarName,
  getRandomAslenerName,
  getRandomEländerName,
} from '../functions/name.functions'
import { Gender } from '../models/general.model'

export const NameGeneratorPage = () => {
  const randomEländerNames = (count = 10) => ({
    female: range(count).map((_) => getRandomEländerName(Gender.Female)),
    male: range(count).map((_) => getRandomEländerName(Gender.Male)),
  })

  const [eländerNames, setEländerNames] = useState(randomEländerNames())
  const getEländerNames = () => setEländerNames(randomEländerNames())

  const randomAlderlänningarNames = (count = 10) => ({
    female: range(count).map((_) => getRandomAlderlänningarName(Gender.Female)),
    male: range(count).map((_) => getRandomAlderlänningarName(Gender.Male)),
  })

  const [alderlänningarNames, setAlderlänningarNames] = useState(
    randomAlderlänningarNames(),
  )
  const getAlderlänningarNames = () =>
    setAlderlänningarNames(randomAlderlänningarNames())

  const randomAslenerNames = (count = 10) => ({
    female: range(count).map((_) => getRandomAslenerName(Gender.Female)),
    male: range(count).map((_) => getRandomAslenerName(Gender.Male)),
  })

  const [aslenerNames, setAslenerNames] = useState(randomAslenerNames())
  const getAslenerNames = () => setAslenerNames(randomAslenerNames())

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <h1 tw="text-center text-6xl" className="yx-heading">
        Namn
      </h1>
      <div tw="grid grid-cols-2 gap-4">
        <div tw="max-w-prose w-full">
          <Parchment>
            <button
              tw="flex gap-2 items-center mb-4 focus:outline-none hover:text-yellow-600"
              onClick={() => getEländerNames()}
            >
              <h2 tw="text-4xl text-center flex" className="yx-heading">
                Eländare
              </h2>
              <span>🔄</span>
            </button>
            <div tw="grid grid-cols-2">
              <div>
                <h3 tw="text-2xl" className="yx-heading">
                  Kvinnor
                </h3>

                {eländerNames.female.length > 0 && (
                  <ul>
                    {eländerNames.female.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <h3 tw="text-2xl" className="yx-heading">
                  Män
                </h3>

                {eländerNames.male.length > 0 && (
                  <ul>
                    {eländerNames.male.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Parchment>
        </div>
        <div tw="max-w-prose w-full">
          <Parchment>
            <button
              tw="flex gap-2 items-center mb-4 focus:outline-none hover:text-yellow-600"
              onClick={() => getAlderlänningarNames()}
            >
              <h2 tw="text-4xl text-center flex" className="yx-heading">
                Alderlänningar
              </h2>
              <span>🔄</span>
            </button>

            <div tw="grid grid-cols-2">
              <div>
                <h3 tw="text-2xl" className="yx-heading">
                  Kvinnor
                </h3>

                {alderlänningarNames.female.length > 0 && (
                  <ul>
                    {alderlänningarNames.female.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <h3 tw="text-2xl" className="yx-heading">
                  Män
                </h3>

                {alderlänningarNames.male.length > 0 && (
                  <ul>
                    {alderlänningarNames.male.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Parchment>
        </div>
        <div tw="max-w-prose w-full">
          <Parchment>
            <button
              tw="flex gap-2 items-center mb-4 focus:outline-none hover:text-yellow-600"
              onClick={() => getAslenerNames()}
            >
              <h2 tw="text-4xl text-center flex" className="yx-heading">
                Aslener
              </h2>
              <span>🔄</span>
            </button>

            <div tw="grid grid-cols-2">
              <div>
                <h3 tw="text-2xl" className="yx-heading">
                  Kvinnor
                </h3>

                {aslenerNames.female.length > 0 && (
                  <ul>
                    {aslenerNames.female.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <h3 tw="text-2xl" className="yx-heading">
                  Män
                </h3>

                {aslenerNames.male.length > 0 && (
                  <ul>
                    {aslenerNames.male.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Parchment>
        </div>
      </div>
    </div>
  )
}
