import { ValidLanguage } from '../../hooks/useValidLanguage'

export type Namespace =
  | 'core'
  | 'calendar'
  | 'common'
  | 'talents'
  | 'settings'
  | 'dice'
  | 'party'
  | 'skills'
  | 'monsters'
  | 'names'
  | 'encounter'
  | 'gear'
  | 'finds'
  | 'home'
  | 'npc'
  | 'typical'
  | 'map'
  | 'session'
  | 'village' // <-- ¡AÑADIDO!

export type TFunctionOptions = {
  context?: Record<string, string>
}

// Ajuste técnico para evitar errores de genéricos
export type TFunction<T extends Namespace = Namespace> = (
  key: TranslationKey<T> | string, 
  options?: TFunctionOptions
) => string

export type Translations = Record<
  ValidLanguage,
  Record<Namespace, Record<string, string>>
>

export type TranslationKey<T extends Namespace> = `${T}:${string}`
