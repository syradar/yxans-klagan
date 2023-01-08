import { Namespace, TFuncKey } from 'i18next'
import { defaultNS, resources } from '../i18nReact'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources['en']
  }
}
export type FuncKey<N extends Namespace = Namespace> = TFuncKey<N>
export type TranslationKey<
  GivenNS extends Namespace | undefined = undefined,
  KEYS = FuncKey,
> = GivenNS extends undefined
  ? KEYS extends `${infer NS}:${infer Key}`
    ? `${NS}:${Key}`
    : never
  : KEYS extends `${GivenNS}:${infer Key}`
  ? `${GivenNS}:${Key}`
  : never

// const title1: TranslationKey = ''
// const title1: TranslationKey<'core'> = ''
// const title2: TranslationKey<'encounters'> = 'encounters:Title'
// const title3: TranslationKey<'map' | 'core'> = ''
