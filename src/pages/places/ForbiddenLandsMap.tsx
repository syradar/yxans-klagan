import { selectSource } from '../../features/map/map-slice'
import { useAppSelector } from '../../store/store.hooks'

type ForbiddenLandsMapProps = {
  fogOfWar: boolean
  children: React.ReactNode
}
export const ForbiddenLandsMap = ({
  fogOfWar,
  children,
}: ForbiddenLandsMapProps) => {
  const source = useAppSelector(selectSource)

  return (
    <svg
      id="ravland-map"
      className={`
        ${fogOfWar ? 'fog-of-war' : ''}
        `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2057.95 1490.29"
    >
      {source === 'bitterReach' ? (
        <image href="bitter-reach-small-edit.png" width={2059} height={1491} />
      ) : null}
      {source === 'ravland' ? (
        <image href="ravland-small.jpg" width={2059} height={1491} />
      ) : null}
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

export default ForbiddenLandsMap
