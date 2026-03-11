import { useAppDispatch } from '../store/store.hooks' // Ruta corregida
import { useValidLanguage, ValidLanguage } from '../hooks/useValidLanguage'
import { changeLanguage } from '../store/translations/translation.slice'
import { Link } from 'react-router-dom'

const LanguageSwitcher = () => {
  const language = useValidLanguage()
  const dispatch = useAppDispatch()

  const validLanguages: ValidLanguage[] = ['es']

  const handleChange = (lang: ValidLanguage) => {
    dispatch(changeLanguage(lang))
  }

  return (
    <div className='language-switcher flex gap-2'>
      {validLanguages.map((lang) => (
        <Link 
          to={`/${lang}`} 
          key={lang} 
          onClick={() => handleChange(lang)}
        >
          <button 
            className={`px-2 py-1 rounded ${language === lang ? 'font-bold underline' : ''}`}
          >
            {lang.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitcher
