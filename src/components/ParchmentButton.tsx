import { nanoid } from 'nanoid'
import { useState } from 'react'
import { getRandomInt } from '../functions/dice.functions'

type ParchmentButtonProps = {
  children?: React.ReactNode
  small?: boolean
  onClick?: () => void
  disabled?: boolean
}

export const ParchmentButton = ({
  children,
  small,
  onClick,
  disabled = false,
}: ParchmentButtonProps) => {
  const [options] = useState({
    baseFrequency: getRandomInt(1, 10) / 100,
    numOctaves: getRandomInt(1, 5),
    scale: getRandomInt(1, 5),
    id: nanoid(),
  })

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group w-fit
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
      disabled={disabled}
    >
      <div className="grid grid-cols-1 grid-rows-1">
        <div
          className={`
          z-0 col-start-1 col-end-2 row-start-1 row-end-2 rounded border-2  shadow transition-colors
          ${
            disabled
              ? 'border-gray-300 bg-gray-300'
              : 'border-green-800 bg-green-600 group-hover:border-green-800 group-hover:bg-green-800'
          }
          `}
          style={{ filter: `url(#button-filter-${options.id})` }}
        ></div>
        <div
          className={`
        z-10 col-start-1 col-end-2 row-start-1 row-end-2 flex items-center gap-2 font-medium
        ${small ? 'px-4 py-2' : 'px-4 py-2'}
        ${disabled ? 'text-gray-600' : 'text-white'}
        `}
        >
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
    </button>
  )
}
