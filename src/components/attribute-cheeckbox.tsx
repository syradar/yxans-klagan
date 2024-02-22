import { useState } from 'react'

export const AttributeCheckbox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <button
        className="pointer-fine:focus:outline-none pointer-fine:focus:border-red-500 relative size-5 rounded-none border-2 border-gray-400 hover:border-red-500"
        onClick={() => setChecked(!checked)}
        role="switch"
        aria-checked={checked ? 'true' : 'false'}
        aria-label="toggle"
        type="button"
      >
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2
        h-1/5 w-[175%] -translate-x-1/2 -translate-y-1/2 rotate-[110deg]
        rounded-full bg-gray-800  transition-all ease-timing-fast
        ${
          !checked
            ? 'translate-x-[-25%] translate-y-[-1000%] opacity-0'
            : 'opacity-100'
        }
        `}
          aria-hidden="true"
        ></div>
      </button>
    </div>
  )
}
