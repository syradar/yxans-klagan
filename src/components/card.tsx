import { nanoid } from 'nanoid'
import { useState } from 'react'
import { getRandomInt } from '../functions/dice.functions'

export type CardProps = {
  children: React.ReactNode
  thin?: boolean
  subtle?: boolean
  extraCss?: string
}

export const Card = ({ children, subtle, thin, extraCss }: CardProps) => (
  <div
    className={`
  rounded
  ${subtle ? 'border border-gray-400' : 'bg-gray-200'}
  ${thin ? 'px-4 py-2' : 'p-4'}
  ${extraCss}
  `}
  >
    {children}
  </div>
)

type ParchmentCardProps = {
  children?: React.ReactNode
}

export const ParchmentCard = ({ children }: ParchmentCardProps) => {
  const [options] = useState({
    baseFrequency: getRandomInt(1, 10) / 100,
    numOctaves: getRandomInt(1, 5),
    scale: getRandomInt(1, 5),
    id: nanoid(),
  })

  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-1">
        <div
          className={`
          z-0 col-start-1 col-end-2 row-start-1 row-end-2 rounded bg-amber-900/25
          `}
          style={{ filter: `url(#button-filter-${options.id})` }}
        ></div>
        <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-2 flex items-center gap-2 px-4 py-2">
          {children}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="0"
        width="0"
      >
        <defs>
          <filter id={`button-filter-${options.id}`} height="1.4" width="1.4">
            <feTurbulence
              baseFrequency={options.baseFrequency}
              numOctaves={options.numOctaves}
              type="fractalNoise"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              scale={options.scale}
              result="displacement"
              xChannelSelector="R"
              in="SourceGraphic"
            />
            <feMergeNode
              in2="SourceGraphic"
              in="displacement"
              operator="atop"
              result="fbSourceGraphic"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
