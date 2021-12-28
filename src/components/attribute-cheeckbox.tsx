import React, { useState } from 'react'
import tw from 'twin.macro'

export const AttributeCheckbox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <button
        tw="w-5 h-5 border-2 border-gray-400 rounded-none relative hover:border-red-500 pointer-fine:focus:(outline-none border-red-500)"
        onClick={() => setChecked(!checked)}
        role="switch"
        aria-checked={checked}
        aria-label="toggle"
        type="button"
      >
        <div
          css={[
            tw`absolute pointer-events-none top-1/2 left-1/2 w-[175%] h-[20%] bg-gray-800`,
            tw`opacity-100 rotate-[110deg] -translate-x-1/2 -translate-y-1/2 rounded-full`,
            tw`transition-all transition-timing-function[cubic-bezier(0, 0.9, 0, 1)]`,
            !checked && tw`opacity-0 translate-x-[-25%] translate-y-[-1000%]`,
          ]}
          aria-hidden="true"
        ></div>
      </button>
    </div>
  )
}
