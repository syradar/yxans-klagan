import { TranslationKey } from '../store/translations/translation.model'

export type Weight =
  | 'none'
  | 'tiny'
  | 'light'
  | 'normal'
  | 'heavy'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'

export const weightLabelDict: Readonly<
  Record<Weight, TranslationKey<'common'>>
> = Object.freeze({
  none: 'common:weight.none',
  tiny: 'common:weight.tiny',
  light: 'common:weight.light',
  normal: 'common:weight.normal',
  heavy: 'common:weight.heavy',
  3: 'common:weight.3',
  4: 'common:weight.4',
  5: 'common:weight.5',
  6: 'common:weight.6',
  7: 'common:weight.7',
  8: 'common:weight.8',
})
