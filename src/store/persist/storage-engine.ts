import { None, Option, Some } from 'ts-results'

const safeStorageGet =
  (engine: Storage) =>
  (key: string): Option<string> => {
    const value = engine.getItem(key)

    return value ? Some(value) : None
  }

const safeSet = (engine: Storage) => (key: string) => (value: string) => {
  try {
    engine.setItem(key, value)
  } catch (error) {
    // ! Ignore write errors.
    // ! console.error(error)
  }
}

// * Local Storage
export const safeGetLocalStorage = safeStorageGet(localStorage)
export const safeSetLocalStorage = safeSet(localStorage)

// * Session Storage
export const safeGetSessionStorage = safeStorageGet(sessionStorage)
export const safeSetSessionStorage = safeSet(sessionStorage)
