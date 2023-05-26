import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { ParchmentButton } from './ParchmentButton'

export interface StepperProps {
  id: string
  label?: string
  max: number
  min: number
  onChange: (value: number) => void
  value: number
}

export const Stepper = ({
  value,
  id,
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
    <div className="">
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="flex">
        <ParchmentButton onPress={decrement} aria-controls={id}>
          <MinusIcon className="w-5" />
        </ParchmentButton>
        <input
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`hide-default-spinner-appearance w-24 flex-auto border-x-0
          bg-white text-center
          focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
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
          <PlusIcon className="w-5" />
        </ParchmentButton>
      </div>
    </div>
  )
}
