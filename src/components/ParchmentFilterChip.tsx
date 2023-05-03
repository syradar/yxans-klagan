import { CheckIcon } from '@heroicons/react/24/outline'
import { nanoid } from 'nanoid'
import { useRef, useState } from 'react'
import { AriaToggleButtonProps, useToggleButton } from 'react-aria'
import { useToggleState } from 'react-stately'
import { getRandomInt } from '../functions/dice.functions'

export type ParchmentButtonProps = AriaToggleButtonProps & {
  test?: string
}

export const ParchmentFilterChip = (props: ParchmentButtonProps) => {
  const ref = useRef(null)
  const state = useToggleState(props)
  const { buttonProps } = useToggleButton(props, state, ref)

  const [options] = useState({
    baseFrequency: getRandomInt(1, 10) / 100,
    numOctaves: getRandomInt(1, 5),
    scale: getRandomInt(1, 5),
    id: nanoid(),
  })

  return (
    <button {...buttonProps} ref={ref} className="group w-fit">
      <div className="grid grid-cols-1 grid-rows-1">
        <div
          className={`
          z-0 col-start-1 col-end-2 row-start-1 row-end-2 rounded  border-2 border-green-800
          bg-green-600 text-white shadow transition-colors
          group-hover:border-green-800 group-hover:bg-green-800`}
          style={{ filter: `url(#button-filter-${options.id})` }}
        ></div>
        <div
          className={`
        z-10 col-start-1 col-end-2 row-start-1 row-end-2 flex items-center px-2 py-1 font-medium text-white
        `}
        >
          {props.isSelected ? (
            <CheckIcon className="mr-2 h-5 w-5 text-white" />
          ) : (
            <span className="mr-1 w-[10px]"></span>
          )}

          {props.children}

          {props.isSelected ? null : <span className="ml-1 w-[10px]"></span>}
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
