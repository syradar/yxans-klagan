import { TranslationKey } from '../store/translations/translation.model'

export type CoinType = 'copper' | 'silver' | 'gold'

export const coinLabelDict: Readonly<
  Record<CoinType, TranslationKey<'common'>>
> = Object.freeze({
  copper: 'common:coin.copper',
  silver: 'common:coin.silver',
  gold: 'common:coin.gold',
})
