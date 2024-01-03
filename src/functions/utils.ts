import { nanoid } from 'nanoid'
import { range } from 'ramda'
import { None, Option, Some } from 'ts-results'

export const identity = <T>(x: T): T => x

export type Nullish = null | undefined

export const isNullish = (val: unknown): val is Nullish => val == null

export const notNullish = <T>(val: T): val is NonNullable<T> => !isNullish(val)

export const inRange =
  (numberRange?: [number, number]) =>
  (val: number, inclusive = false): boolean => {
    if (isNullish(numberRange)) {
      return false
    }

    if (inclusive) {
      return val >= numberRange[0] && val <= numberRange[1]
    }

    return val > numberRange[0] && val < numberRange[1]
  }

export const isString = (x: unknown): x is string => typeof x === 'string'

export const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === 'object'

export const isArray = (x: unknown): x is string => Array.isArray(x)

export const numberToBooleans = (to: number | Nullish) => {
  if (isNullish(to)) {
    return []
  }

  if (!validNumber(to)) {
    return []
  }

  return range(0, to).map(_ => false)
}

export const toOption = <T>(val?: T): Option<NonNullable<T>> => {
  if (notNullish(val)) {
    return Some(val)
  }

  return None
}

export const validNumber = (
  num: number | Nullish,
): num is NonNullable<number> => {
  if (isNullish(num)) return false

  return !isNaN(num) && isFinite(num)
}

export const capitalize = (s: string): string =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`

export type WithId<T> = {
  value: T
  id: string
}
export const withId = <T>(t: T): WithId<T> => ({
  value: t,
  id: nanoid(),
})
