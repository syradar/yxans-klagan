import { None, Some } from 'ts-results'
import {
  at,
  chunkArray,
  head,
  nWise,
  pairWise,
  propertyComparator,
  range,
  slidingNWise,
  sortByProperty,
} from './array.functions'

describe('array functions', () => {
  describe('at', () => {
    it('should return Some(val) if the index is within the array bounds', () => {
      const expected1 = Some(1)
      const expected2 = Some(2)
      const expected3 = Some(3)
      const arr = [1, 2, 3]
      expect(at(arr, 0)).toEqual(expected1)
      expect(at(arr, 1)).toEqual(expected2)
      expect(at(arr, 2)).toEqual(expected3)
    })

    it('should wrap around if the index is outside the array bounds', () => {
      const expected1 = Some(3)
      const expected2 = Some(1)
      const arr = [1, 2, 3]
      expect(at(arr, -1)).toEqual(expected1)
      expect(at(arr, 3)).toEqual(expected2)
    })

    it('should return None if the value at the index is undefined', () => {
      const arr = [1, undefined, 3]
      expect(at(arr, 1)).toEqual(None)
    })
  })

  describe('range', () => {
    it('should return an array of numbers from 0 to val - 1', () => {
      expect(range(0)).toEqual([])
      expect(range(1)).toEqual([0])
      expect(range(5)).toEqual([0, 1, 2, 3, 4])
    })
  })

  describe('propertyComparator', () => {
    it('should return a function that compares objects by the specified property', () => {
      const arr = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 20 },
        { name: 'Charlie', age: 40 },
      ]

      const ascComparator = propertyComparator('age', 'asc')
      expect(arr.sort(ascComparator)).toEqual([
        { name: 'Bob', age: 20 },
        { name: 'Alice', age: 30 },
        { name: 'Charlie', age: 40 },
      ])

      const descComparator = propertyComparator('age', 'desc')
      expect(arr.sort(descComparator)).toEqual([
        { name: 'Charlie', age: 40 },
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 20 },
      ])
    })
  })

  describe('sortByProperty', () => {
    it('should sort an array of objects by the specified property', () => {
      const arr = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 20 },
        { name: 'Charlie', age: 40 },
      ]

      expect(sortByProperty('age', arr, 'asc')).toEqual([
        { name: 'Bob', age: 20 },
        { name: 'Alice', age: 30 },
        { name: 'Charlie', age: 40 },
      ])

      expect(sortByProperty('age', arr, 'desc')).toEqual([
        { name: 'Charlie', age: 40 },
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 20 },
      ])
    })
  })

  describe('head', () => {
    it('should return Some(val) if the array is not empty', () =>
      expect(head([1, 2, 3])).toEqual(Some(1)))

    it('should return None if the array is empty', () => {
      const arr: number[] = []
      expect(head(arr)).toEqual(None)
    })
  })

  describe('pairWise', () => {
    it('should return an array of pairs of adjacent elements', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(pairWise(arr)).toEqual([[1, 2], [3, 4], [5]])
    })
  })

  describe('nWise', () => {
    it('should return an array of arrays of n elements', () => {
      const arr = [1, 2, 3, 4, 5, 6]
      const nWise2 = nWise(2)
      expect(nWise2(arr)).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
      ])

      const nWise3 = nWise(3)
      expect(nWise3(arr)).toEqual([
        [1, 2, 3],
        [4, 5, 6],
      ])
    })
  })

  describe('slidingNWise', () => {
    it('should return an array of arrays of n elements, sliding by 1', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(slidingNWise(2, arr)).toEqual([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
      ])

      expect(slidingNWise(3, arr)).toEqual([
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
      ])
    })
  })

  describe('chunkArray', () => {
    it('should return an array of arrays of n elements', () => {
      const arr = [1, 2, 3, 4, 5, 6]
      expect(chunkArray(arr, 2)).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
      ])

      expect(chunkArray(arr, 3)).toEqual([
        [1, 2, 3],
        [4, 5, 6],
      ])
    })
  })
})
