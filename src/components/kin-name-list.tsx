import React, { FC, useState } from 'react'
import 'twin.macro'
import { range } from '../functions/array.functions'
import { Gender } from '../models/general.model'

interface KinNameListProps {
  title: string
  nameFunc: (g: Gender) => string
}

const KinNameList: FC<KinNameListProps> = ({
  title,
  nameFunc,
}: KinNameListProps) => {
  const randomNames = (count = 10) => ({
    female: range(count).map((_) => nameFunc(Gender.Female)),
    male: range(count).map((_) => nameFunc(Gender.Male)),
  })

  const [names, setNames] = useState(randomNames())
  const getNames = () => setNames(randomNames())

  return (
    <>
      <button
        tw="flex gap-2 items-center mb-4 focus:outline-none hover:text-yellow-600"
        onClick={() => getNames()}
      >
        <h2 tw="text-4xl text-center flex" className="yx-heading">
          {title}
        </h2>
        <span>🔄</span>
      </button>
      <div tw="grid grid-cols-2">
        <div>
          <h3 tw="text-2xl" className="yx-heading">
            Kvinnor
          </h3>

          {names.female.length > 0 && (
            <ul>
              {names.female.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 tw="text-2xl" className="yx-heading">
            Män
          </h3>

          {names.male.length > 0 && (
            <ul>
              {names.male.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default KinNameList
