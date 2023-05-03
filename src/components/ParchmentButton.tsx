import { nanoid } from 'nanoid'
import { useRef, useState } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'
import { getRandomInt } from '../functions/dice.functions'

export type ParchmentButtonProps = AriaButtonProps & {
  small?: boolean
  buttonType?: 'secondary' | 'primary' | 'danger' | 'ghost' | 'ghost-secondary'
  forwardedRef?: React.Ref<HTMLButtonElement>
}

export const ParchmentButton = (props: ParchmentButtonProps) => {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)
  const { children, buttonType = 'primary', small, isDisabled } = props

  const [options] = useState({
    baseFrequency: getRandomInt(1, 10) / 100,
    numOctaves: getRandomInt(1, 5),
    scale: getRandomInt(1, 5),
    id: nanoid(),
  })

  return (
    <button
      ref={ref}
      {...buttonProps}
      className={`
        group w-fit min-w-fit
        ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <div className="grid grid-cols-1 grid-rows-1">
        <div
          className={`
          z-0 col-start-1 col-end-2 row-start-1 row-end-2 rounded border-2  shadow transition-colors
          ${
            isDisabled && buttonType !== 'ghost'
              ? 'border-neutral-500 bg-neutral-300'
              : ''
          }
          ${
            isDisabled && buttonType === 'ghost'
              ? 'border-neutral-500 bg-transparent'
              : ''
          }
          ${
            !isDisabled && buttonType === 'primary'
              ? 'border-green-800 bg-green-600 group-hover:border-green-800 group-hover:bg-green-800'
              : ''
          }
          ${
            !isDisabled && buttonType === 'secondary'
              ? 'border-amber-800 bg-amber-800 group-hover:border-amber-900 group-hover:bg-amber-900'
              : ''
          }
          ${
            !isDisabled && buttonType === 'ghost'
              ? 'border-amber-800 bg-transparent text-amber-800 group-hover:border-amber-900 group-hover:bg-amber-100'
              : ''
          }
            ${
              !isDisabled && buttonType === 'danger'
                ? 'border-rose-800 bg-rose-600 group-hover:border-rose-800 group-hover:bg-rose-800'
                : ''
            }

          `}
          style={{ filter: `url(#button-filter-${options.id})` }}
        ></div>
        <div
          className={`
        z-10 col-start-1 col-end-2 row-start-1 row-end-2 flex items-center gap-2 font-medium
        ${small ? 'px-3 py-1' : 'px-4 py-2'}
        ${isDisabled ? 'text-gray-600' : ''}
        ${
          !isDisabled &&
          (buttonType === 'primary' ||
            buttonType === 'secondary' ||
            buttonType === 'danger')
            ? 'text-white'
            : ''
        }
        ${!isDisabled && buttonType === 'ghost' ? 'text-amber-900' : ''}
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
