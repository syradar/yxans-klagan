import React, { ReactNode } from 'react'
import 'twin.macro'

interface MapProps {
  fogOfWar: boolean
  children: ReactNode
}

export const Map = ({ fogOfWar, children }: MapProps) => (
  <svg
    id="ravland-map"
    className={fogOfWar ? 'fog-of-war' : ''}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2057.95 1490.29"
  >
    <image
      width="2059"
      height="1491"
    />
    <rect className="cls-1" width="2057.95" height="1490.29" fillOpacity="0" />
    {children}
  </svg>
)