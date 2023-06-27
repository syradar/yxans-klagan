import { Duration, milliseconds } from 'date-fns'
import { Err, Ok, Result } from 'ts-results'

export type SavedState<T> = {
  savedAt: number
  ttl: number
  state: T
}

const validate = <T>({
  savedAt,
  ttl,
  state,
}: SavedState<T>): Result<T, Error> => {
  if (savedAt < Date.now() - ttl) {
    return Err(new Error('State is too old'))
  }

  return Ok(state)
}

export const savedState = <T>(
  state: T,
  ttl: Duration = { hours: 1 },
): SavedState<T> => ({
  savedAt: Date.now(),
  ttl: milliseconds(ttl),
  state,
})

export const isFresh = <T>(savedState: SavedState<T>) => validate(savedState)
