import { Err, Ok, Result } from 'ts-results'
import { z } from 'zod'

export const safeJSONParse = <T extends z.ZodTypeAny>(
  str: string,
  schema?: T,
): Result<z.infer<T>, Error> => {
  try {
    if (!schema) {
      return Ok(JSON.parse(str) as T)
    }

    const parsed = schema.parse(JSON.parse(str))

    return Ok(parsed)
  } catch (e: unknown) {
    if (e instanceof SyntaxError) {
      return Err(e)
    }

    if (e instanceof z.ZodError) {
      return Err(e)
    }

    return Err(new Error('Unknown error'))
  }
}
