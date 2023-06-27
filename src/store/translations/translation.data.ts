import { ValidLanguage } from '../../hooks/useValidLanguage'
import { Translations } from './translation.model'

export async function loadTranslations(
  lang: ValidLanguage,
): Promise<Translations> {
  return import(`./translation.data.${lang}.ts`)
    .then((module) => module.default)
    .catch((error) => {
      console.error(error)

      return {}
    })
}
