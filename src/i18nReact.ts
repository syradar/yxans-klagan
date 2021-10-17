import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const i18nReact = i18n
const loadPath = 'locales/{{lng}}/{{ns}}.json'

i18nReact
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'sv'],
    ns: [
      'core',
      'common',
      'calendar',
      'map',
      'monsters',
      'names',
      'encounters',
    ],
    keySeparator: '.',
    backend: {
      loadPath,
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18nReact
