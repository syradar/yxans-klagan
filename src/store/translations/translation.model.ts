import { translationsEn } from './translation.data.en'

export type Translations = typeof translationsEn

export type Namespace = keyof Translations

type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in keyof T]: [K, ...PathsToStringProps<T[K]>]
    }[keyof T]

type Join<T extends string[], D extends string> = T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
    ? F extends string
      ? `${F}${D}${Join<Extract<R, string[]>, D>}`
      : never
    : string

type Paths<T> = T extends Namespace
  ? PathsToStringProps<Translations[T]>
  : never

type KEYS<T> = T extends Namespace ? `${T}:${Join<Paths<T>, '.'>}` : never

export type TranslationKey<GivenNS extends Namespace> = KEYS<GivenNS>

// const title1: TranslationKey = 'core:blocks.items.title'
// const title2: TranslationKey<'core'> = 'core:blocks.items.description'
// const title3: TranslationKey<'encounter'> = 'encounter:title'

export type TFunctionOptions = {
  context?: {
    [key: string]: string
  }
}
export type TFunction<GivenNS extends Namespace> = (
  key: TranslationKey<GivenNS>,
  options?: TFunctionOptions,
) => string
