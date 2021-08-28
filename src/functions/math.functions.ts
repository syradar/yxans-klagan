export const min = (min: number) => (val: number) => {
  const nanError = `value was Nan`

  if (isNaN(min)) {
    throw new TypeError(`min ${nanError}`)
  }

  if (isNaN(val)) {
    throw new TypeError(`val ${nanError}`)
  }

  return val < min ? min : val
}

export const minZero = min(0)
