import { translationsEn } from './translation.data.en'

export type Translations = typeof translationsEn

export type Namespace = keyof Translations

type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
    }[Extract<keyof T, string>]

type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${Join<Extract<R, string[]>, D>}`
    : never
  : string

type KEYS<T = Namespace> = T extends Namespace
  ? `${T}:${Join<PathsToStringProps<Translations[T]>, '.'>}`
  : never

export type TranslationKey<GivenNS extends Namespace | undefined = undefined> =
  GivenNS extends undefined ? KEYS : KEYS<GivenNS>

// const title1: TranslationKey = 'core:blocks.items.title'
// const title2: TranslationKey<'core'> = 'core:blocks.items.description'
// const title3: TranslationKey<'encounter'> = 'encounter:title'

export type TFunctionOptions = {
  context?: {
    [key: string]: string
  }
}
export type TFunction<GivenNS extends Namespace | undefined = undefined> = (
  key: TranslationKey<GivenNS>,
  options?: TFunctionOptions,
) => string
