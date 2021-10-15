import React, { useState } from 'react'
import 'twin.macro'
import tw from 'twin.macro'

export const AttributeCheckbox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div tw="h-5">
      <button
        tw="w-4 h-4 border-2 border-gray-400 rounded-none relative hover:border-yellow-500"
        onClick={() => setChecked(!checked)}
      >
        <div
          css={[
            tw`absolute top-1/2 left-1/2 w-[175%] h-[12.5%] bg-black`,
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
