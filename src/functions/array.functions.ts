import { None, Option, Some } from 'ts-results'

export const range = (val: number): readonly number[] => {
  const keys = [...Array(val).keys()]

  return keys
}

export const chunkArray = <T>(array: T[], perChunk = 5): T[][] => {
  return array.reduce((acc, cur, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = []
    }

    acc[chunkIndex].push(cur)

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

  for (let i = 0; i < arr.length; i = i + 1) {
    result.push(arr.slice(i, i + groupSize))
  }

  return result
}
