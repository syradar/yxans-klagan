import { None, Option, Result, Some } from 'ts-results'

export const at = <T>(arr: readonly T[], index: number): Option<T> => {
  const isMinBounds = index < 0
  const isMaxBounds = index >= arr.length

  const wrappedIndex = isMinBounds
    ? arr.length + index
    : isMaxBounds
    ? index - arr.length
    : index

  const val = arr[wrappedIndex]

  if (val === undefined) {
    return None
  }

  return Some(val)
}

export const atResult = <T>(
  arr: readonly T[],
  index: number,
): Result<T, Error> =>
  at(arr, index).toResult(new Error(`No value at index ${index}.`))

export const range = (val: number): readonly number[] => {
  const keys = [...Array(val).keys()]

  return keys
}

export const chunkArray = <T>(array: T[], perChunk = 5): T[][] => {
  return array.reduce((acc, cur, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    const val = acc[chunkIndex] ?? []
    val.push(cur)

    acc[chunkIndex] = val

    return acc
  }, [] as T[][])
}

export const propertyComparator = <T>(
  key: keyof T,
  order: 'asc' | 'desc',
): ((a: T, b: T) => number) => {
  return (a, b) => {
    const aVal = a[key]
    const bVal = b[key]

    if (aVal === bVal) {
      return 0
    }

    if (order === 'asc') {
      return aVal < bVal ? -1 : 1
    }

    return aVal < bVal ? 1 : -1
  }
}

export const sortByProperty = <T>(
  key: keyof T,
  arr: T[],
  order: 'asc' | 'desc' = 'desc',
): T[] => [...arr].sort(propertyComparator(key, order))

export const head = <T>(arr: T[]): Option<T> => {
  const item = arr[0]

  if (item === undefined) {
    return None
  }

  return Some(item)
}

export function pairWise<T>(arr: T[]) {
  const result: [T, T][] = []

  for (let i = 0; i < arr.length; i = i + 2) {
    result.push(arr.slice(i, i + 2) as [T, T])
  }

  return result
}
export function nWise<T>(groupSize: number) {
  return (arr: T[]) => {
    const result: T[][] = []

    for (let i = 0; i < arr.length; i = i + groupSize) {
      result.push(arr.slice(i, i + groupSize))
    }

    return result
  }
}

export function slidingNWise<T>(groupSize: number, arr: T[]) {
  const result: T[][] = []
  const maxIndex = arr.length - groupSize + 1

  for (let i = 0; i < maxIndex; i = i + 1) {
    result.push(arr.slice(i, i + groupSize))
  }

  return result
}

export function add(a: number, b: number): number {
  return a + b
}
