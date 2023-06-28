import { Err, Ok, Result } from 'ts-results'

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
