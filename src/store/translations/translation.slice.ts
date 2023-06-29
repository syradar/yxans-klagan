import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { None, Option, Some } from 'ts-results'
import { notNullish } from '../../functions/utils.functions'
import { ValidLanguage } from '../../hooks/useValidLanguage'
import { RootState } from '../../store/store'
import { loadTranslations } from './translation.data'
import {
  Namespace,
  TFunctionOptions,
  TranslationKey,
  Translations,
} from './translation.model'

interface TranslationState {
  translations: Record<
    ValidLanguage,
    | {
        translations: Translations
        status: 'success'
      }
    | { status: 'loading' }
  >
  currentLanguage: ValidLanguage
}

// Define the initial state using that type
const initialState: TranslationState = {
  translations: {
    en: { status: 'loading' },
    sv: { status: 'loading' },
  },
  currentLanguage: 'en',
}

const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    setTranslations(
      state,
      action: PayloadAction<{
        language: ValidLanguage
        translations: Translations
      }>,
    ) {
      state.currentLanguage = action.payload.language

      if (state.translations[action.payload.language].status === 'loading') {
        state.translations[action.payload.language] = {
          translations: action.payload.translations,
          status: 'success',
        }
      }
    },
  },
})

export const setTranslationsAsync = createAsyncThunk<
  Translations,
  | { language: undefined; source: 'init' }
  | { language: ValidLanguage; source: 'user' },
  { state: RootState }
>(
  'translation/setTranslationsAsync',
  async ({ language, source }, { dispatch, getState }) => {
    const translationState = getState().translation
    const lang = source === 'init' ? translationState.currentLanguage : language

    const translations = await loadTranslations(lang)

    dispatch(
      translationSlice.actions.setTranslations({
        language: lang,
        translations,
      }),
    )

    return translations
  },
)

export const initTranslations = setTranslationsAsync({
  language: undefined,
  source: 'init',
})

export default translationSlice.reducer

const selectTranslationsState = (state: RootState) => state.translation
export const selectTranslations = createSelector(
  [selectTranslationsState],
  (translationsState): Option<Translations> => {
    const cur =
      translationsState.translations[translationsState.currentLanguage]
    if (cur.status === 'success') {
      return Some(cur.translations)
    }

    return None
  },
)
export const selectCurrentLanguage = createSelector(
  [selectTranslationsState],
  (translationsState) => translationsState.currentLanguage,
)

export const selectTranslateFunction = <T extends Namespace>(nss: T[]) =>
  createSelector(selectTranslations, (translations) => {
    if (translations.none) {
      return (key: TranslationKey<T>) => key
    }

    const safeTranslations = translations.safeUnwrap()
    type localNamespace = (typeof nss)[number] & Namespace

    return (
      key: TranslationKey<localNamespace>,
      options?: TFunctionOptions,
    ) => {
      // traverse the object

      let translation = translate(key, safeTranslations, options)

      if (translation.match(/\$t\((.*)\)/gi) !== null) {
        translation = translation
          .split(' ')
          .map((p) =>
            p.replace(/\$t\((.*)\)/gi, (_match, key) =>
              translate(
                key as TranslationKey<localNamespace>,
                safeTranslations,
                options,
              ),
            ),
          )
          .join(' ')
      }

      // $t(common:talents.PathOfBlood2)

      return translation
    }
  })

const translate = <LocalNamespace extends Namespace>(
  key: TranslationKey<LocalNamespace>,
  safeTranslations: Translations,
  options?: TFunctionOptions,
): string => {
  const [ns, ...rest] = key.split(':')
  const keys = rest.join().split('.')

  const as = ns in safeTranslations

  if (!as) {
    return key
  }

  let obj = safeTranslations[ns as Namespace]
  let translation: string = key

  for (const part of keys) {
    if (!obj) {
      return part
    }

    const possibleKey = part

    if (possibleKey in obj) {
      const possibleTranslation = obj[possibleKey as keyof typeof obj]

      if (notNullish(possibleTranslation)) {
        if (typeof possibleTranslation === 'string') {
          translation = possibleTranslation
          break
        }

        obj = possibleTranslation
      }
    }
  }

  if (options?.context) {
    for (const [ctxKey, ctxValue] of Object.entries(options.context)) {
      translation = translation.replaceAll(`{{${ctxKey}}}`, ctxValue)
    }
  }

  return translation
}
