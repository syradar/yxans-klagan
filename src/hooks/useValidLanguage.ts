import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// CORRECCIÓN 1: Definimos el único idioma válido como 'es' (Español)
export type ValidLanguage = 'es'

export const useValidLanguage = () => {
  // CORRECCIÓN 2: El estado inicial y por defecto debe ser 'es'
  const [language, setLanguage] = useState<ValidLanguage>('es')
  const { pathname } = useLocation()

  useEffect(() => {
    const lang = pathname.split('/')[1]
    // Mantenemos la lógica de la URL, pero ahora busca 'es'
    if (lang === 'es') {
      setLanguage(lang as ValidLanguage)
    }
  }, [pathname])

  return language
}
