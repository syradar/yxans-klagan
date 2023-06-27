import { Result } from 'ts-results'
import { z } from 'zod'
import { safeJSONParse } from './json-parsing'
import { safeGetLocalStorage, safeSetLocalStorage } from './storage-engine'

type StateStorage<T> = {
  load: () => Result<T, Error>
  save: (mapState: T) => void
}

type CreateStateStorageProps = {
  key: string
  schema: z.ZodTypeAny
  label: string
}
export const createStateStorage = <T>({
  key,
  label,
  schema,
}: CreateStateStorageProps): StateStorage<T> => ({
  load: (): Result<T, Error> => {
    const localStorage = safeGetLocalStorage(key).toResult(
      new Error(`[${label}] Failed to get from LocalStorage`),
    )

    const result = localStorage.andThen((s) => safeJSONParse(s, schema))

    return result
  },
  save: (val: T) => safeSetLocalStorage(key)(JSON.stringify(val)),
})
