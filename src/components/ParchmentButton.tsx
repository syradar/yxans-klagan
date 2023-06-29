import { CheckIcon } from '@heroicons/react/20/solid'
import { nanoid } from 'nanoid'
import { ComponentProps, useRef, useState } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'
import { getRandomInt } from '../functions/dice.functions'

export type ParchmentButtonProps = AriaButtonProps &
  ComponentProps<'button'> & {
    small?: boolean
    buttonType?:
      | 'secondary'
      | 'primary'
      | 'danger'
      | 'ghost'
      | 'ghost-secondary'
      | 'link'
      | 'sourceRavland'
      | 'sourceBitterReach'
    forwardedRef?: React.Ref<HTMLButtonElement>
    fullWidth?: boolean
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
        group min-w-fit
        ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${props.fullWidth ? 'w-full' : 'w-fit'}
        focus:outline-none
      `}
    >
      <div className="grid grid-cols-1 grid-rows-1">
        <div
          className={`
          z-0 col-start-1 col-end-2 row-start-1 row-end-2 rounded border-2 transition-colors
          group-focus-visible:ring-2 group-focus-visible:ring-black group-focus-visible:ring-offset-2
          ${buttonType === 'link' ? '' : 'shadow'}
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
            !isDisabled
              ? {
                  primary:
                    'border-green-800 bg-green-600 group-hover:border-green-800 group-hover:bg-green-800',
                  secondary:
                    'border-amber-800 bg-amber-800 group-hover:border-amber-900 group-hover:bg-amber-900',
                  ghost:
                    'border-amber-800 bg-transparent text-amber-800 group-hover:border-amber-900 group-hover:bg-amber-100',
                  'ghost-secondary':
                    'border-amber-800 bg-transparent text-amber-800 group-hover:border-amber-900 group-hover:bg-amber-100',
                  link: 'border-transparent bg-transparent text-amber-800 group-hover:border-amber-900 ',
                  danger:
                    'border-rose-800 bg-rose-600 group-hover:border-rose-800 group-hover:bg-rose-800',
                  sourceRavland:
                    'source-bg source-bg-ravland border-emerald-800 group-hover:border-emerald-800 group-hover:text-white',
                  sourceBitterReach:
                    'source-bg source-bg-bitterreach border-sky-500 group-hover:border-sky-700 group-hover:text-white',
                }[buttonType] ?? ''
              : ''
          }
          `}
          style={{ filter: `url(#button-filter-${options.id})` }}
        ></div>
        <div
          className={`z-10 col-start-1 col-end-2 row-start-1 row-end-2
          flex items-center gap-2 font-medium transition-colors
        ${small ? 'px-3 py-1' : 'px-4 py-2'}
        ${isDisabled ? 'text-gray-600' : ''}
        ${
          !isDisabled &&
          {
            primary: 'text-white',
            secondary: 'text-white',
            danger: 'text-white',
            sourceRavland:
              'source-text text-emerald-800 group-hover:text-white',
            sourceBitterReach:
              'source-text text-sky-800 group-hover:text-white',
            ghost: 'text-amber-900',
            link: 'text-amber-900',
            'ghost-secondary': '',
          }[buttonType]
        }
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

export type ParchmentToggleButtonProps = ParchmentButtonProps & {
  active: boolean
}
export const ParchmentToggleButton = (props: ParchmentToggleButtonProps) => {
  return (
    <ParchmentButton
      {...props}
      buttonType={props.active ? 'primary' : 'ghost'}
      type="button"
      role="switch"
      aria-checked={props.active}
    >
      {props.active ? (
        <CheckIcon className="aspect-square w-5" />
      ) : (
        <span className="w-5"></span>
      )}
      {props.children}
    </ParchmentButton>
  )
}
