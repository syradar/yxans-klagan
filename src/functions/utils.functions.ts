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

export const isDevelopment = () => process.env.NODE_ENV === 'development'
