import { Err, Ok, Option, Result } from 'ts-results'
import { at } from './array.functions'

export const integerRegex = /^-?\d*$/

export const atParseInt = (
  arr: readonly string[],
  index: number,
): Result<number, Error> =>
  at(arr, index)
    .toResult(new Error(`Value at index ${index} does not exist.`))
    .andThen(safeParseInt)

export const safeParseInt = (val: string): Result<number, Error> => {
  if (!val) {
    return Err(new RangeError('No value provided'))
  }

  if (val === 'Infinity' || val === '-Infinity') {
    return Err(new RangeError('Invalid number: only work with finite numbers.'))
  }

  if (val.includes('.')) {
    return Err(new RangeError('Invalid number: does not work with floats.'))
  }

  if (!integerRegex.test(val)) {
    return Err(
      new SyntaxError('Invalid number: contains non-numeric characters.'),
    )
  }

  const parsed = parseInt(val, 10)
  const toNum = Number(val)

  if (isNaN(parsed) || isNaN(toNum)) {
    return Err(new RangeError('Invalid number: NaN.'))
  }

  return Ok(parsed)
}

export const safeParseIntOption = (s: string): Option<number> =>
  safeParseInt(s).toOption()

export const min = (minVal: number) => (val: number) => {
  const nanError = `value was Nan`

  if (isNaN(minVal)) {
    throw new TypeError(`minVal ${nanError}`)
  }

  if (isNaN(val)) {
    throw new TypeError(`val ${nanError}`)
  }

  return val < minVal ? minVal : val
}

export const minZero = min(0)

export const isEven = (val: number): boolean => {
  if (isNaN(val)) {
    throw new TypeError(`val was NaN`)
  }

  return val % 2 === 0
}

export const clamp = (
  val: number,
  minVal = 0,
  maxVal = 1,
): Result<number, Error> => {
  if (isNaN(val)) {
    return Err(new TypeError(`val was NaN`))
  }

  if (isNaN(minVal)) {
    return Err(new TypeError(`minVal was NaN`))
  }

  if (isNaN(maxVal)) {
    return Err(new TypeError(`maxVal was NaN`))
  }

  if (!isFinite(val)) {
    return Err(new TypeError(`val was not finite`))
  }

  const isMinValFinite = isFinite(minVal)
  const isMaxValFinite = isFinite(maxVal)

  if (!isMinValFinite && !isMaxValFinite) {
    return Ok(val)
  }

  if (!isMinValFinite) {
    return Ok(Math.min(val, maxVal))
  }

  if (!isMaxValFinite) {
    return Ok(Math.max(val, minVal))
  }

  return Ok(Math.min(Math.max(val, minVal), maxVal))
}
