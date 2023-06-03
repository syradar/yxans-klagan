type MapProps = {
  fogOfWar: boolean
  children: React.ReactNode
}
export const Map = ({ fogOfWar, children }: MapProps) => {

  return (
    <svg
      id="ravland-map"
      className={`

        ${fogOfWar ? 'fog-of-war' : ''}
        `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2057.95 1490.29"
      // style={{
      //   top: '-3px',
      //   left: '-3px',
      // }}
    >
        <image href="ravland-small.jpg" width={2059} height={1491} />
      <rect
        className="cls-1"
        width="2057.95"
        height="1490.29"
        fillOpacity="0"
        style={{
          transform: 'scale(1.002)',
        }}
      />
      {children}
    </svg>
  )
}

export default Map
