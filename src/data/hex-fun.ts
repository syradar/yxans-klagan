import { HexKey } from '../pages/places/map.model'
import { hexData } from './hex.data'

export function getHexBoundingBox(svgPolygon: string): {
  xMin: number
  xMax: number
  yMin: number
  yMax: number
} {
  const { xs, ys } = svgPolygon
    .split(' ')
    .map(Number)
    .reduce(
      (acc, val, i) => {
        if (i % 2 === 0) {
          acc.xs.push(val)
        } else {
          acc.ys.push(val)
        }

        return acc
      },
      { xs: [], ys: [] } as { xs: number[]; ys: number[] },
    )

  return {
    xMin: Math.min(...xs),
    xMax: Math.max(...xs),
    yMin: Math.min(...ys),
    yMax: Math.max(...ys),
  }
}

export type Point = {
  x: number
  y: number
}
export const getHexCenter = (hex: { points: string }): Point => {
  const { xMin, xMax, yMin, yMax } = getHexBoundingBox(hex.points)

  return {
    x: (xMin + xMax) / 2,
    y: (yMin + yMax) / 2,
  }
}

export const createHexKeyToPointDict = (
  hexes: { points: string; hexKey: HexKey }[],
): Record<HexKey, Point> => {
  return hexes.reduce((acc, hex) => {
    acc[hex.hexKey] = getHexCenter(hex)

    return acc
  }, {} as Record<HexKey, Point>)
}

export const hexKeyToPointDict = createHexKeyToPointDict(
  (Object.entries(hexData) as [HexKey, string][]).map(([hexKey, points]) => ({
    hexKey,
    points,
  })),
)
