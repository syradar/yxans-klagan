import { Hex } from '../models/map.model'

type PolygonProps = {
  hex: Hex
  onMouseOver: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void
  onClick: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void
}

export const Polygon = ({ hex, onMouseOver, onClick }: PolygonProps) => {
  return (
    <polygon
      className={`cls-2 hex ${hex.explored ? 'hex-explored' : ''}`}
      x="0"
      y="0"
      width="100%"
      height="100%"
      points={hex.points}
      onClick={onClick}
      onMouseOver={onMouseOver}
    />
  )
}
