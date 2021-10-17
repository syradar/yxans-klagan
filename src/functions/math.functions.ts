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
