import { useMemo } from 'react'
import { Name as NameType, LanguageNameMap } from '../pages/npc/name2'

// Aceptamos Name (objeto), string[] (array) o LanguageNameMap (traducción)
interface Props {
  names: NameType | readonly string[] | LanguageNameMap
}

const NameDisplay = ({ names }: Props) => {
  const name = useMemo(() => {
    if (!names) return ''

    // CASO 1: Es un mapa de traducción { en: [...] }
    // Comprobamos si tiene la propiedad 'en' y es un array
    if ('en' in names && Array.isArray((names as any).en)) {
       return (names as any).en.join(' ')
    }

    // CASO 2: Es un array simple de strings ['John', 'Doe']
    if (Array.isArray(names)) {
      return names.filter(Boolean).join(' ')
    }

    // CASO 3: Es el objeto Name estructurado
    const { firstName, familyName, homeName, nickName } = names as NameType
    let fullName = firstName || ''
    if (familyName) fullName += ` ${familyName}`
    if (homeName) fullName += ` of ${homeName}`
    if (nickName) fullName += ` "${nickName}"`
    
    return fullName
  }, [names])

  return <span className='font-bold'>{name}</span>
}

export default NameDisplay
