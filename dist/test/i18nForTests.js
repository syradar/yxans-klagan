import i18n from '../pkg/i18next.js';
import { initReactI18next } from '../pkg/react-i18next.js';
i18n.use(initReactI18next).init({
  lng: 'cimode',
  // ----- ^
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false // not needed for react!!

  },
  resources: {
    en: {
      translations: {}
    }
  }
});
export default i18n;