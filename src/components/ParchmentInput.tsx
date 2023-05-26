import { nanoid } from 'nanoid'
import { useRef, useState } from 'react'
import { AriaSearchFieldProps, useSearchField } from 'react-aria'
import { useSearchFieldState } from 'react-stately'
import { getRandomInt } from '../functions/dice.functions'

type ParchmentInputProps = AriaSearchFieldProps & {
  focus?: boolean
}
export const ParchmentInput = (props: ParchmentInputProps) => {
  const { label } = props
  const state = useSearchFieldState(props)
  const ref = useRef(null)
  const { labelProps, inputProps } = useSearchField(props, state, ref)

  const [options] = useState({
    baseFrequency: getRandomInt(1, 10) / 100,
    numOctaves: getRandomInt(1, 5),
    scale: getRandomInt(1, 5),
    id: nanoid(),
  })

  return (
    <div className="flex flex-col">
      <label {...labelProps}>{label}</label>
      <div className="group grid w-full grid-cols-1 grid-rows-1">
        <input
          className="peer z-10 col-start-1 col-end-2 row-start-1 row-end-2 bg-transparent
          p-2 focus:outline-none
          "
          {...inputProps}
          autoFocus={props.focus}
          ref={ref}
        />
        <div
          className="col-start-1 col-end-2 row-start-1 row-end-2 rounded
           border-2 border-amber-800  bg-white shadow  transition-colors
            group-hover:border-amber-900
             peer-focus-visible:ring-2
             peer-focus-visible:ring-black
             peer-focus-visible:ring-offset-2
             "
          style={{ filter: `url(#button-filter-${options.id})` }}
        ></div>
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
