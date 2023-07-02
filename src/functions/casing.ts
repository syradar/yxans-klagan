// beautifulDesk: 'finds:find.beautiful_desk',

import { capitalize } from './utils.functions'

export type SnakeCaseToCamelCase<S extends string> =
  S extends `${infer T}_${infer U}`
    ? `${Lowercase<T>}${Capitalize<SnakeCaseToCamelCase<U>>}`
    : Lowercase<S>

export type CamelCaseToSnakeCase<S extends string> =
  S extends `${infer T}${infer U}`
    ? `${Lowercase<T> extends T
        ? Lowercase<T>
        : `_${Lowercase<T>}`}${CamelCaseToSnakeCase<U>}`
    : Lowercase<S>

export const snakeCaseToCamelCase = <S extends string>(
  s: S,
): SnakeCaseToCamelCase<S> =>
  s
    .split('_')
    .map((w, i) => (i ? capitalize(w) : w))
    .join('') as SnakeCaseToCamelCase<S>

export const camelCaseToSnakeCase = <S extends string>(
  s: S,
): CamelCaseToSnakeCase<S> =>
  s
    .split(/(?=[A-Z])/)
    .map((w) => w.toLowerCase())
    .join('_') as CamelCaseToSnakeCase<S>
