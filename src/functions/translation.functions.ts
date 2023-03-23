import { TranslationKey } from '../@types/i18next'
import { resources } from '../i18nReact'

type NSKEYS = keyof (typeof resources)['en']

/**
 * Recursively check if a key exists in a nested object
 */
const checkKey = (keys: string[], obj: Record<string, unknown>): boolean => {
  if (keys.length === 0) {
    return true
  }

  const [key, ...rest] = keys

  if (key in obj) {
    return checkKey(rest, obj[key] as Record<string, unknown>)
  }

  return false
}

/**
 * Check if a key exists in a namespace
 */
export const keyExists = <NS extends NSKEYS>(
  ns: NS,
  key: string,
): key is TranslationKey<NS> => {
  const keyParts = key.split('.')

  const nsKeys = resources.en[ns]

  if (!nsKeys) {
    return false
  }

  return checkKey(keyParts, nsKeys)
}
