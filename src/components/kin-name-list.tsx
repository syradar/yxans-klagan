import React, { FC, useState } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { range } from '../functions/array.functions'
import { Gender } from '../models/gender.model'
import { ReloadIcon } from './icons'

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
        tw="flex gap-2 items-center mb-4 hover:text-yellow-500"
        onClick={() => getNames()}
      >
        <h2 tw="text-2xl lg:(text-4xl) text-center flex" className="yx-heading">
          {title}
        </h2>
        <ReloadIcon container={tw`w-6 h-6`} svg={tw``}></ReloadIcon>
      </button>
      <div tw="grid grid-cols-2">
        <div>
          <h3 tw="font-semibold text-2xl uppercase">Kvinnor</h3>

          {names.female.length > 0 && (
            <ul>
              {names.female.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 tw="font-semibold text-2xl uppercase">Män</h3>

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
