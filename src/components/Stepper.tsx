import React from 'react'
import tw, { TwStyle } from 'twin.macro'

export interface StepperProps {
  id: string
  twProps?: TwStyle
  label?: string
  max: number
  min: number
  onChange: (value: number) => void
  value: number
}

const stepButtonStyles = () => [
  tw`h-10 font-bold py-0 px-1 text-center uppercase tracking-wide focus:outline-none`,
  tw`border-2 border-black rounded-none`,
]

export const Stepper = ({
  value,
  id,
  twProps,
  max,
  min,
  label,
  onChange,
}: StepperProps) => {
  const decrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const increment = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  const handleChange = (e: string) => {
    onChange(parseInt(e, 10) || 0)
  }

  return (
    <div css={twProps}>
      {label && (
        <label tw="block" htmlFor={id}>
          {label}
        </label>
      )}
      <div tw="w-auto inline-flex">
        <button
          tw="w-10 hover:(bg-red-500 border-red-500) bg-black text-white"
          css={stepButtonStyles()}
          type="button"
          onClick={decrement}
          aria-controls={id}
        >
          –
        </button>
        <input
          css={[
            ...stepButtonStyles(),
            tw`border-l-0 border-r-0 bg-white`,
            {
              '::-webkit-inner-spin-button': {
                ' -webkit-appearance': 'none',
                margin: '0',
              },
              '::-webkit-outer-spin-button': {
                ' -webkit-appearance': 'none',
                margin: '0',
              },
            },
          ]}
          type="number"
          step="1"
          id={id}
          value={value}
          min={min}
          max={max}
          onChange={(e) => handleChange(e.target.value)}
          disabled
        />
        <button
          tw="w-10 hover:(bg-red-500 border-red-500) bg-black text-white"
          css={stepButtonStyles()}
          type="button"
          onClick={increment}
          aria-controls={id}
        >
          +
        </button>
      </div>
    </div>
  )
}
