import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

import ruinRavlandUrl from './normal-rl-ruin.png'
import ruinBitterReachUrl from './normal-br-ruin.png'
import caveRavlandUrl from './normal-rl-cave.png'
import caveBitterReachUrl from './normal-br-cave.png'
import castleRavlandUrl from './normal-rl-castle.png'
import castleBitterReachUrl from './normal-br-castle.png'
import campRavlandUrl from './normal-rl-camp.png'
import campBitterReachUrl from './normal-br-camp.png'
import dangerRavlandUrl from './normal-rl-danger.png'
import dangerBitterReachUrl from './normal-br-danger.png'
import towerRavlandUrl from './normal-rl-tower.png'
import towerBitterReachUrl from './normal-br-tower.png'
import villageRavlandUrl from './normal-rl-village.png'
import villageBitterReachUrl from './normal-br-village.png'
import { GameSource } from '../../../features/map/map-slice'

export type MapSymbolType =
  | 'ruin'
  | 'cave'
  | 'castle'
  | 'camp'
  | 'danger'
  | 'tower'
  | 'village'

export const mapSymbolUrls: Record<
  GameSource,
  Record<MapSymbolType, string>
> = {
  bitterReach: {
    ruin: ruinBitterReachUrl,
    cave: caveBitterReachUrl,
    castle: castleBitterReachUrl,
    camp: campBitterReachUrl,
    danger: dangerBitterReachUrl,
    tower: towerBitterReachUrl,
    village: villageBitterReachUrl,
  },
  ravland: {
    ruin: ruinRavlandUrl,
    cave: caveRavlandUrl,
    castle: castleRavlandUrl,
    camp: campRavlandUrl,
    danger: dangerRavlandUrl,
    tower: towerRavlandUrl,
    village: villageRavlandUrl,
  },
}

type MapSymbolProps = ComponentPropsWithoutRef<'img'> & {
  size?: 'small' | 'medium' | 'large'
  type: MapSymbolType
  source: GameSource
}
function MapSymbol({
  type,
  source,
  size = 'medium',
  ...props
}: MapSymbolProps) {
  return (
    <img
      src={mapSymbolUrls[source][type]}
      {...props}
      className={clsx({
        'h-6 w-6': size === 'small',
        'h-8 w-8': size === 'medium',
        'h-12 w-12': size === 'large',
      })}
    />
  )
}

export default MapSymbol
