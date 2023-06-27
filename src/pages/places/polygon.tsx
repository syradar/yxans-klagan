import { Option } from 'ts-results'
import { Hex, HexKey } from './map.model'

type PolygonProps = {
  hex: Hex
  selectedHex: Option<HexKey>
  onMouseOver: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void
  onClick: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void
}

export const Polygon = ({
  hex,
  selectedHex,
  onMouseOver,
  onClick,
}: PolygonProps) => {
  const selectedClass = selectedHex
    .map((s) => (s === hex.hexKey ? 'hex-selected' : ''))
    .unwrapOr('')

  return (
    <polygon
      className={`cls-2 hex ${
        hex.explored ? 'hex-explored' : ''
      } ${selectedClass}`}
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
