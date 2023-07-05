import { nanoid } from 'nanoid'
import { ComponentPropsWithoutRef, useState } from 'react'
import { getRandomInt } from '../functions/dice.functions'

type ParchmentProps = ComponentPropsWithoutRef<'div'> & {
  padding?: 'xs' | 'sm' | 'md'
  full?: boolean
  parchmentClassName?: string
  childrenClassName?: string
}

export const Parchment = ({
  children,
  padding = 'md',
  full = false,
  className,
  parchmentClassName,
  childrenClassName,
  ...props
}: ParchmentProps) => {
  const [options] = useState({
    baseFrequency: getRandomInt(3, 8) / 100,
    numOctaves: getRandomInt(2, 5),
    scale: getRandomInt(3, 10),
    id: nanoid(),
  })

  return (
    <div
      {...props}
      className={`flex flex-col ${full ? 'h-full' : ''}
        ${className ? className : ''}
    `}
    >
      <div className="relative flex-1">
        <div
          className={`absolute inset-0 z-0  border-2 border-amber-900/25 bg-[#fffdf6] shadow-md
            ${parchmentClassName ? parchmentClassName : ''}
          `}
          style={{ filter: `url(#filter-${options.id})` }}
        ></div>
        <div
          className={`relative
            ${padding === 'xs' ? 'p-2' : ''}
            ${padding === 'sm' ? 'p-4' : ''}
            ${padding === 'md' ? 'p-6' : ''}
            ${full ? 'h-full' : ''}
            ${childrenClassName ? childrenClassName : ''}
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
          <filter id={`filter-${options.id}`} height="1.4" width="1.4">
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
    </div>
  )
}
