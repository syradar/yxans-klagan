import { Ok } from 'ts-results'
import { describe, expect, it } from 'vitest'
import {
  ForbiddenLandsInvalidDateFormatError,
  ForbiddenLandsMaxDayError,
  ForbiddenLandsMinDayError,
  ForbiddenLandsMonthError,
  parseForbiddenLandsDate,
  safeParseInt,
} from './forbidden-lands-date.model'

describe('ForbiddenLandsDate', () => {
  describe('safeParseInt', () => {
    it('should parse a valid number', () => {
      const result = safeParseInt('123')
      expect(result.err).toBeFalsy()
      expect(result.val).toEqual(123)
    })

    it('should fail if the number is invalid', () => {
      const result = safeParseInt('abc')
      expect(result.err).toBeTruthy()
      expect(result.err && result.val.message).toEqual(
        'Invalid number: contains non-numeric characters.',
      )
    })

    it('should fail if the number is NaN', () => {
      const result = safeParseInt('NaN')
      expect(result.err).toBeTruthy()
      expect(result.err && result.val.message).toEqual(
        'Invalid number: contains non-numeric characters.',
      )
    })

    it('should fail if the number is Infinity', () => {
      const result = safeParseInt('Infinity')
      expect(result.err).toBeTruthy()
      expect(result.err && result.val.message).toEqual(
        'Invalid number: only work with finite numbers.',
      )
    })

    it('should fail if the number is -Infinity', () => {
      const result = safeParseInt('-Infinity')
      expect(result.err).toBeTruthy()
      expect(result.err && result.val.message).toEqual(
        'Invalid number: only work with finite numbers.',
      )
    })

    it('should fail if the number is a float', () => {
      const result = safeParseInt('1.23')
      expect(result.err).toBeTruthy()
      expect(result.err && result.val.message).toEqual(
        'Invalid number: does not work with floats.',
      )
    })

    it('should fail if the number is a negative float', () => {
      const result = safeParseInt('-1.23')
      expect(result.err).toBeTruthy()
      expect(result.err && result.val.message).toEqual(
        'Invalid number: does not work with floats.',
      )
    })

    it('should fail if the number is scientific notation', () => {
      const result = safeParseInt('1e3')

      expect(result.err).toBeTruthy()
      expect(result.err && result.val.message).toEqual(
        'Invalid number: contains non-numeric characters.',
      )
    })
  })
  describe('parseForbiddenLandsDate', () => {
    it('should parse a valid date', () => {
      expect(parseForbiddenLandsDate('1165-1-1')).toEqual(
        Ok({
          numberOfMonts: 8,
          year: 1165,
          month: 1,
          day: 1,
        }),
      )
    })

    it('should fail if the date is invalid', () => {
      const result = parseForbiddenLandsDate('')
      expect(result.val).toEqual(ForbiddenLandsInvalidDateFormatError())
    })

    it('should fail if the date is invalid', () => {
      const result = parseForbiddenLandsDate('1165-1')
      expect(result.val).toEqual(ForbiddenLandsInvalidDateFormatError())
    })

    it('should fail if the year is invalid', () => {
      const result = parseForbiddenLandsDate('1-1')
      expect(result.val).toEqual(ForbiddenLandsInvalidDateFormatError())
    })
    it('should fail if provided more than 3 numbers', () => {
      const result = parseForbiddenLandsDate('1-1-1-1')
      expect(result.val).toEqual(ForbiddenLandsInvalidDateFormatError())
    })

    it('should fail if day is 0', () => {
      const result = parseForbiddenLandsDate('1165-1-0')
      expect(result.err && result.val).toEqual(ForbiddenLandsMinDayError(0))
    })
    it('should fail if too many days for any month', () => {
      const result = parseForbiddenLandsDate('1165-3-47')
      expect(result.err && result.val).toEqual(ForbiddenLandsMaxDayError(3, 47))
    })
    it('should fail if too many days for specific month', () => {
      const result = parseForbiddenLandsDate('1165-2-46')
      expect(result.err && result.val).toEqual(ForbiddenLandsMaxDayError(2, 46))
    })

    it('should fail if month is less than 1', () => {
      const result = parseForbiddenLandsDate('1165-0-1')
      expect(result.err && result.val).toEqual(ForbiddenLandsMonthError(0))
    })
    it('should fail if month is more than 8', () => {
      const result = parseForbiddenLandsDate('1165-10-1')
      expect(result.err && result.val).toEqual(ForbiddenLandsMonthError(10))
    })
  })
})
