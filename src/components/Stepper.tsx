export interface StepperProps {
  id: string
  twProps?: string
  label?: string
  max: number
  min: number
  onChange: (value: number) => void
  value: number
}

const stepButtonStyles = `h-10 font-bold py-0 px-1 text-center uppercase tracking-wide focus:outline-none border-2 border-black rounded-none`

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
    <div className={twProps}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="inline-flex w-auto">
        <button
          className={`w-10 bg-black text-white hover:border-red-500 hover:bg-red-500
          ${stepButtonStyles}
          `}
          type="button"
          onClick={decrement}
          aria-controls={id}
        >
          –
        </button>
        <input
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`w-10 border-x-0 bg-white text-center
          ${stepButtonStyles}
          hide-default-spinner-appearance
          `}
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
          className={`w-10 bg-black text-white hover:border-red-500 hover:bg-red-500
          ${stepButtonStyles}
          `}
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
