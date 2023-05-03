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
  none: 'common:Weight.None',
  tiny: 'common:Weight.Tiny',
  light: 'common:Weight.Light',
  normal: 'common:Weight.Normal',
  heavy: 'common:Weight.Heavy',
  3: 'common:Weight.3',
  4: 'common:Weight.4',
  5: 'common:Weight.5',
  6: 'common:Weight.6',
  7: 'common:Weight.7',
  8: 'common:Weight.8',
})
