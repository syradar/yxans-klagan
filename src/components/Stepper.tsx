import { ParchmentButton } from './ParchmentButton'

export interface StepperProps {
  id: string
  twProps?: string
  label?: string
  max: number
  min: number
  onChange: (value: number) => void
  value: number
}

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
    console.log(e)

    onChange(parseInt(e, 10) || 0)
  }

  return (
    <div className={twProps}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="flex w-full">
        <ParchmentButton onPress={decrement} aria-controls={id}>
          –
        </ParchmentButton>
        <input
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`hide-default-spinner-appearance w-full min-w-fit border-x-0
          bg-white text-center
          `}
          type="number"
          step="1"
          id={id}
          value={Number(value).toString()}
          min={min}
          max={max}
          onChange={(e) => handleChange(e.target.value)}
          // disabled
        />
        <ParchmentButton onPress={increment} aria-controls={id}>
          +
        </ParchmentButton>
      </div>
    </div>
  )
}
