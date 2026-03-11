import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
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
  TFunction,
} from './translation.model'
import { useAppSelector } from '../store.hooks'

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

const initialState: TranslationState = {
  translations: {
    es: { status: 'loading' },
  },
  currentLanguage: 'es',
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
    changeLanguage(state, action: PayloadAction<ValidLanguage>) {
      state.currentLanguage = action.payload
    },
  },
})

export const { changeLanguage } = translationSlice.actions

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
  createSelector(selectTranslations, (translations): TFunction => {
    if (translations.none) {
      // @ts-ignore
      return (key: string) => key
    }

    const safeTranslations = translations.safeUnwrap()
    type localNamespace = (typeof nss)[number] & Namespace

    // @ts-ignore
    return (
      key: TranslationKey<localNamespace>,
      options?: TFunctionOptions,
    ) => {
      let translation = translate(key, safeTranslations, options)

      // CORRECCIÓN AQUÍ: Sintaxis correcta de Regex
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

  // Usamos 'as any' para evitar el error de índice
  let obj = (safeTranslations as any)[ns]
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
        obj = possibleTranslation as Record<string, unknown>
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

export const useTranslations = () => {
  const dispatch = useDispatch()
  const currentLanguage = useAppSelector(selectCurrentLanguage)
  const translations = useAppSelector(selectTranslations)

  return {
    currentLanguage,
    translations,
    changeLanguage: (language: ValidLanguage) =>
      dispatch(changeLanguage(language)),
  }
}
