import { nanoid } from 'nanoid'
import { forwardRef, useState } from 'react'
import { getRandomInt } from '../functions/dice.functions'

type ParchmentInputProps = {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
  forwardedRef?: React.Ref<HTMLInputElement>
}

export const ParchmentInput = ({
  value,
  onChange,
  disabled = false,
  placeholder,
  forwardedRef,
}: ParchmentInputProps) => {
  const [options] = useState({
    baseFrequency: getRandomInt(1, 2) / 100,
    numOctaves: getRandomInt(1, 2),
    scale: getRandomInt(1, 3),
    id: nanoid(),
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div
      className={` relative`}
      style={{
        filter: `url(#input-filter-${options.id})`,
      }}
    >
      <input
        ref={forwardedRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`
          w-full rounded border-2 p-1 shadow transition-colors
          ${
            disabled
              ? 'cursor-not-allowed border-neutral-500 bg-neutral-300'
              : ''
          }
          ${
            !disabled
              ? 'cursor-text border-amber-800 bg-transparent focus:border-amber-900 focus:ring-2 focus:ring-amber-600'
              : ''
          }
        `}
        disabled={disabled}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="0"
        width="0"
      >
        <defs>
          {/* <filter id={`input-filter-${options.id}`} height="1.4" width="1.4">
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
          </filter> */}
        </defs>
      </svg>
      <div
        className={`
          absolute inset-0 z-0
          ${disabled ? '' : 'pointer-events-none'}
        `}
      ></div>
    </div>
  )
}

export const ForwardedParchmentInput = forwardRef<
  HTMLInputElement,
  ParchmentInputProps
>(function ForwardedParchmentInput(props, ref) {
  return <ParchmentInput forwardedRef={ref} {...props} />
})
