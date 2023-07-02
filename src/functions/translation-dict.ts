import {
  Namespace,
  TranslationKey,
} from '../store/translations/translation.model'
import { CamelCaseToSnakeCase, camelCaseToSnakeCase } from './casing'

export type TranslationDict<
  T extends string,
  TNamespace extends Namespace,
  TPath extends string,
> = Record<
  T,
  `${TNamespace}:${TPath}${CamelCaseToSnakeCase<T>}` &
    TranslationKey<TNamespace>
>

export function translationDict<
  T extends string,
  TNamespace extends Namespace,
  TPath extends string,
>(
  ts: readonly T[],
  namespace: TNamespace,
  path: TPath,
): TranslationDict<T, TNamespace, TPath> {
  return ts.reduce(
    (acc, label) => ({
      ...acc,
      [label]: `${namespace}:${path}${camelCaseToSnakeCase(label)}`,
    }),
    {} as TranslationDict<T, TNamespace, TPath>,
  )
}
