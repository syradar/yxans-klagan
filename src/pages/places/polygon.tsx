import { ComponentProps, useEffect, useRef, useState } from 'react'
import { AriaButtonProps, HoverProps, useButton, useHover } from 'react-aria'
import { Option } from 'ts-results'
import {
  MapSymbolType,
  mapSymbolUrls,
} from '../../components/images/map-symbols/MapSymbol'
import { getHexCenter } from '../../data/hex-fun'
import { GameSource } from '../../features/map/map-slice'
import { Hex, HexKey } from './map.model'

type PolygonProps = AriaButtonProps &
  HoverProps &
  ComponentProps<'polygon'> & {
    hex: Hex
    explored: boolean
    selectedHex: Option<HexKey>
    icon: MapSymbolType | undefined
    gameSource: GameSource
  }

export const Polygon = (props: PolygonProps) => {
  const ref = useRef<SVGPolygonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const {
    hex,
    explored,
    selectedHex,
    onHoverChange,
    onHoverStart,
    onHoverEnd,
    icon,
    gameSource,
  } = props
  const { hoverProps, isHovered } = useHover({
    onHoverChange,
    onHoverStart,
    onHoverEnd,
  })

  const selectedClass = selectedHex
    .map(s => (s === hex.hexKey ? 'hex-selected' : ''))
    .unwrapOr('')

  const iconRef = useRef<SVGImageElement>(null)
  const DEFAULT_ICON_SIZE = 40
  const DEFAULT_SCALE_FACTOR = 1.25

  const [iconPosition, setIconPosition] = useState({
    x: getHexCenter(hex).x - (DEFAULT_ICON_SIZE * DEFAULT_SCALE_FACTOR) / 2,
    y: getHexCenter(hex).y - (DEFAULT_ICON_SIZE * DEFAULT_SCALE_FACTOR) / 2,
    size: DEFAULT_ICON_SIZE,
  })

  useEffect(() => {
    if (ref.current && iconRef.current) {
      // get width of polygon
      const { width } = ref.current.getBoundingClientRect()
      // calculate scale factor
      const scale = width / DEFAULT_ICON_SIZE

      // calculate new icon size
      const size = DEFAULT_ICON_SIZE * scale * DEFAULT_SCALE_FACTOR

      // calculate the center of the hex
      const center = getHexCenter(hex)

      // calculate the correct position of the icon
      // for it to be centered on the hex
      const result = {
        x: center.x - size / 2,
        y: center.y - size / 2,
        size,
      }
      setIconPosition(result)
    }
  }, [ref, hex])

  return (
    <>
      {icon ? (
        <image
          ref={iconRef}
          href={mapSymbolUrls[gameSource][icon]}
          width={iconPosition.size}
          height={iconPosition.size}
          x={iconPosition.x}
          y={iconPosition.y}
          preserveAspectRatio="xMidYMid meet"
        />
      ) : null}
      <polygon
        ref={ref}
        className={`cls-2 hex  ${
          explored ? 'hex-explored' : ''
        } ${selectedClass}
      ${isHovered ? 'hex-hovered' : ''}
      `}
        x="0"
        y="0"
        width="100%"
        height="100%"
        points={hex.points}
        {...buttonProps}
        {...hoverProps}
        tabIndex={0}
      />
    </>
  )
}
