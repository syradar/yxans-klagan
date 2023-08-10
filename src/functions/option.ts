import { Option, Some } from 'ts-results'

export function optionTypeGuard<T>(opt: Option<T>): opt is Some<T> {
  return opt.some
}
