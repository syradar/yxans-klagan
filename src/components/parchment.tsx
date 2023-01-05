type ParchmentProps = {
  children?: React.ReactNode
}

export const Parchment = ({ children }: ParchmentProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-1">
        <div
          className="z-0 col-start-1 col-end-2 row-start-1 row-end-2 border-2 border-black bg-white shadow"
          style={{ filter: 'url(#filter)' }}
        ></div>
        <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-2 p-6">
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
          <filter id="filter" height="1.4" width="1.4">
            <feTurbulence
              baseFrequency="0.05"
              numOctaves="2"
              type="fractalNoise"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              scale="10"
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
            {/* <feOffset result="offsetOut" in="SourceAlpha" dx="20" dy="20" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />

          <feBlend in="fbSourceGraphic" in2="blurOut" mode="normal" /> */}
          </filter>
          <filter id="squiggle">
            <feTurbulence
              type="fractalNoise"
              id="turbulence"
              baseFrequency=".05"
              numOctaves="4"
            />
            <feDisplacementMap id="displacement" in="SourceGraphic" scale="4" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
