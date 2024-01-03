import { Result } from 'ts-results'
import { z } from 'zod'
import { safeJSONParse } from './json-parsing'
import { storageEngineFactory } from './storage-engine'

const storageEngine = storageEngineFactory(localStorage)
type StateStorage<T> = {
  load: () => Result<T, Error>
  save: (state: T) => void
}

type CreateStateStorageProps = {
  key: string
  schema: z.ZodTypeAny
  schemaOutput?: z.ZodTypeAny
  label: string
}
export const createStateStorage = <T>({
  key,
  label,
  schema,
}: CreateStateStorageProps): StateStorage<T> => ({
  load: (): Result<T, Error> => {
    const localStorage = storageEngine
      .get(key)
      .toResult(new Error(`[${label}] Failed to get from LocalStorage`))

    const result = localStorage.andThen(s => safeJSONParse(s, schema))

    return result
  },
  save: (val: T) => storageEngine.set(key)(val),
})

type CreateStateStorageWithSerializerProps<T, U> = CreateStateStorageProps & {
  serializer: (val: T) => Result<U, Error>
  deserializer: (val: U) => Result<T, Error>
}
export const createStateStorageWithSerializer = <T, U>({
  key,
  label,
  schema,
  serializer,
  deserializer,
}: CreateStateStorageWithSerializerProps<T, U>): StateStorage<T> => ({
  load: (): Result<T, Error> => {
    return storageEngine
      .get(key)
      .toResult(new Error(`[${label}] Failed to get from LocalStorage`))
      .andThen(s => safeJSONParse(s, schema))
      .andThen(deserializer)
  },
  save: (val: T) => {
    const serialized = serializer(val)
    console.log('[JOURNAL] Save - serialized', serialized)

    if (!serialized.ok) {
      console.error(`[${label}] Failed to save to LocalStorage`)

      return
    }

    storageEngine.set(key)(serialized.val)
  },
})
