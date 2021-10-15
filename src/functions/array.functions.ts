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
