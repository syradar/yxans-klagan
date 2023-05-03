import { nanoid } from 'nanoid'
import { useState } from 'react'
import { getRandomInt } from '../functions/dice.functions'

type ParchmentProps = {
  children?: React.ReactNode
  small?: boolean
}

export const Parchment = ({ children, small }: ParchmentProps) => {
  const [options] = useState({
    baseFrequency: getRandomInt(3, 8) / 100,
    numOctaves: getRandomInt(2, 5),
    scale: getRandomInt(3, 10),
    id: nanoid(),
  })

  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <div
        className="z-0 col-start-1 col-end-2 row-start-1 row-end-2  border-2 border-amber-900/25 bg-[#fffdf6] shadow-md"
        style={{ filter: `url(#filter-${options.id})` }}
      ></div>
      <div
        className={`
        z-10 col-start-1 col-end-2 row-start-1 row-end-2
        ${small ? 'p-4' : 'p-6'}

        `}
      >
        {children}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="0"
        width="0"
      >
        <defs>
          <filter id={`filter-${options.id}`} height="1.4" width="1.4">
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
