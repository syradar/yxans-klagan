import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

// import all namespaces (for the default language, only)
import nsCoreEn from '../public/locales/en/core.json'
import nsCommonEn from '../public/locales/en/common.json'
import nsCalendarEn from '../public/locales/en/calendar.json'
import nsMapEn from '../public/locales/en/map.json'
import nsMonstersEn from '../public/locales/en/monsters.json'
import nsNamesEn from '../public/locales/en/names.json'
import nsEncountersEn from '../public/locales/en/encounters.json'
import nsSessionEn from '../public/locales/en/session.json'
import nsTypicalEn from '../public/locales/en/typical.json'
import nsFindsEn from '../public/locales/en/finds.json'
import nsNpcEn from '../public/locales/en/npc.json'
import nsVillageEn from '../public/locales/en/village.json'

import nsCoreSv from '../public/locales/sv/core.json'
import nsCommonSv from '../public/locales/sv/common.json'
import nsCalendarSv from '../public/locales/sv/calendar.json'
import nsMapSv from '../public/locales/sv/map.json'
import nsMonstersSv from '../public/locales/sv/monsters.json'
import nsNamesSv from '../public/locales/sv/names.json'
import nsEncountersSv from '../public/locales/sv/encounters.json'
import nsSessionSv from '../public/locales/sv/session.json'
import nsTypicalSv from '../public/locales/sv/typical.json'
import nsFindsSv from '../public/locales/sv/finds.json'
import nsNpcSv from '../public/locales/sv/npc.json'
import nsVillageSv from '../public/locales/sv/village.json'

export const defaultNS = 'core'
export const resources = {
  en: {
    core: nsCoreEn,
    common: nsCommonEn,
    calendar: nsCalendarEn,
    map: nsMapEn,
    monsters: nsMonstersEn,
    names: nsNamesEn,
    encounters: nsEncountersEn,
    session: nsSessionEn,
    typical: nsTypicalEn,
    finds: nsFindsEn,
    npc: nsNpcEn,
    village: nsVillageEn,
  },
  sv: {
    core: nsCoreSv,
    common: nsCommonSv,
    calendar: nsCalendarSv,
    map: nsMapSv,
    monsters: nsMonstersSv,
    names: nsNamesSv,
    encounters: nsEncountersSv,
    session: nsSessionSv,
    typical: nsTypicalSv,
    finds: nsFindsSv,
    npc: nsNpcSv,
    village: nsVillageSv,
  },
}

const i18nReact = i18n
const loadPath = '/locales/{{lng}}/{{ns}}.json'

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
    defaultNS: 'core',
    supportedLngs: ['en', 'sv'],
    resources,
    keySeparator: '.',
    backend: {
      loadPath,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18nReact
