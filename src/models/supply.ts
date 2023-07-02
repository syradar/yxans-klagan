import { TranslationKey } from '../store/translations/translation.model'

export type Supply = 'common' | 'uncommon' | 'rare'

export const supplyLabelDict: Readonly<Record<Supply, TranslationKey<'gear'>>> =
  Object.freeze({
    common: 'gear:supply.common',
    uncommon: 'gear:supply.uncommon',
    rare: 'gear:supply.rare',
  })

export type SupplyViewModel = {
  readonly label: TranslationKey<'gear'>
  readonly amount: number | undefined
  readonly supply: Supply
}
