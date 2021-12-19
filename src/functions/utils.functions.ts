import { compose, map, range } from 'rambda'

export type Nullish = null | undefined

export const isNullish = (val: unknown): val is Nullish => val == null

export const notNullish = <T>(val: T): val is NonNullable<T> => !isNullish(val)

export const inRange =
  (range?: [number, number]) =>
  (val: number, inclusive = false): boolean => {
    if (isNullish(range)) {
      return false
    }

    if (inclusive) {
      return val >= range[0] && val <= range[1]
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

interface MaybeType<T> {
  map: <U>(fn: (val: T) => U) => MaybeType<U>
  value: () => T | undefined
  withDefault: <U>(defaultValue: U) => T | U
}

export const maybe = <T>(val?: T): MaybeType<T> => {
  const innerValue = val ?? undefined

  return {
    map: (fn) => {
      if (isNullish(innerValue)) {
        return maybe()
      }

      return maybe(fn(innerValue))
    },
    value: () => innerValue,
    withDefault: (defaultValue) => {
      if (isNullish(innerValue)) {
        return defaultValue
      }

      return innerValue
    },
  }
}

export const validNumber = (
  num: number | Nullish,
): num is NonNullable<number> => {
  if (isNullish(num)) return false

  return !isNaN(num) && isFinite(num)
}
