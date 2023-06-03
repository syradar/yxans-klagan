import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { None, Option, Some } from 'ts-results'
import { RootState } from '../../store/store'
import { loadTranslations } from './translation.data'
import {
  Namespace,
  TFunction,
  TFunctionOptions,
  TranslationKey,
  Translations,
} from './translation.model'
import { notNullish } from '../../functions/utils.functions'
import { ValidLanguage } from '../../hooks/useValidLanguage'

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
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // setLanguage(state, action: PayloadAction<ValidLanguage>) {
    //   state.currentLanguage = action.payload
    // },
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
  // extraReducers: (builder) => {
  //   builder.addCase(setTranslationsAsync.pending, (state, action) => {
  //     state.translations[action.meta.arg] = {
  //       translations: undefined,
  //       status: 'loading',
  //     }
  //   })
  // },
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

// export const { } = translationSlice.actions

export default translationSlice.reducer

export const selectTranslations = (state: RootState): Option<Translations> => {
  const cur = state.translation.translations[state.translation.currentLanguage]
  if (cur.status === 'success') {
    return Some(cur.translations)
  }

  return None
}

export const selectCurrentLanguage = (state: RootState) =>
  state.translation.currentLanguage

export const selectTranslateFunction = <T extends Namespace>(nss: T[]) => {
  return (state: RootState): TFunction<T> => {
    const translations = selectTranslations(state)

    if (!translations.some) {
      console.log('found no translations')

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
  }
}

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
