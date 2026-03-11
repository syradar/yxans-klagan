import { ValidLanguage } from '../../hooks/useValidLanguage'
import { rollGender } from '../../functions/names.functions'

// 1. Exportar la interfaz Name (necesaria para npc.ts y Name.tsx)
export interface Name {
  firstName: string
  familyName: string
  homeName: string
  nickName: string
}

// 2. Exportar el tipo LanguageNameMap (necesaria para village-generator)
export type LanguageNameMap = Record<ValidLanguage, readonly string[]>

export type LanguageStringMap = { [VL in ValidLanguage]: string }
export type LanguageStringArrayMap = { [VL in ValidLanguage]: readonly string[] }

const getNamesFromMap = (
  map: LanguageNameMap,
  lang: ValidLanguage,
): readonly string[] => {
  return map[lang]
}

export const getFirstName = (
  names: LanguageNameMap,
  lang: ValidLanguage,
  index: number,
): string => {
  return getNamesFromMap(names, lang)[index]
}

export const getLastname = (
  names: LanguageNameMap,
  lang: ValidLanguage,
  index: number,
): string => {
  return getNamesFromMap(names, lang)[index]
}

// 3. Funciones helper corregidas para ES
// CORRECCIÓN 1: Cambiar 'en' por 'es'
export const getHumanName = (): LanguageNameMap => {
  return { es: ['Human Name Placeholder'] } 
}

export const randomGender = (): 'male' | 'female' => {
  return rollGender(Math.random() * 6)
}

export const getLanguageNames = (): LanguageNameMap => {
  return {
    // CORRECCIÓN 2: Cambiar 'en' por 'es' (nombres propios pueden quedarse en inglés si quieres)
    es: ['Ania', 'Elara', 'Lyssa', 'Zane', 'Cain', 'Torvin'],
  }
}

export const getLanguageNamesLast = (): LanguageNameMap => {
  return {
    // CORRECCIÓN 3: Cambiar 'en' por 'es' (apellidos pueden quedarse en inglés)
    es: ['Strongbow', 'Shadowalker', 'Ironhand', 'Blackwood'],
  }
}
