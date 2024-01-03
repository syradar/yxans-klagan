import { None, Option, Some } from 'ts-results'

const safeStorageGet =
  (engine: Storage) =>
  (key: string): Option<string> => {
    const value = engine.getItem(key)

    return value ? Some(value) : None
  }

const safeSet =
  (engine: Storage) =>
  (key: string) =>
  <T>(value: T) => {
    try {
      const stringified = JSON.stringify(value, null, 0)
      engine.setItem(key, stringified)
    } catch (error) {
      // ! Ignore write errors.
      // ! console.error(error)
    }
  }

export const storageEngineFactory = (engine: Storage) => {
  return {
    get: safeStorageGet(engine),
    set: safeSet(engine),
  }
}
