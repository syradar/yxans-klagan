import { compose, map, range } from 'rambda'

export type Nullish = null | undefined

export const isNullish = (val: unknown): val is Nullish => val == null

export const notNullish = <T>(val: T): val is NonNullable<T> => !isNullish(val)

export const inRange =
  (range?: [number, number]) =>
  (val: number): boolean => {
    if (isNullish(range)) {
      return false
    }

    return val > range[0] && val < range[1]
  }

export const isString = (x: unknown): x is string => typeof x === 'string'

export const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === 'object'

export const isArray = (x: unknown): x is string => Array.isArray(x)

export const numberToBooleans = compose(
  map((_) => false),
  range(0),
)
