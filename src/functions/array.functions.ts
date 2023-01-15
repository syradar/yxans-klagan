export const range = (val: number): readonly number[] => [...Array(val).keys()]

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
