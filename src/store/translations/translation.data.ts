// CORRECCIÓN: Usamos llaves {} para importar la exportación con nombre
// y la renombramos a 'es' con 'as es'.
import { translationsEs as es } from './translation.data.es'

const translationFiles = {
  es,
}

export const loadTranslations = async (lang: string) => {
  // @ts-ignore
  return translationFiles[lang]
}
