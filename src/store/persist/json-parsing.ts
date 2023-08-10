import { Err, Ok, Result } from 'ts-results'
import { z } from 'zod'

export const safeJSONParse = <T extends z.ZodTypeAny>(
  str: string,
  schema?: T,
): Result<z.infer<T>, Error> => {
  try {
    const parsed = JSON.parse(str)
    if (!schema) {
      return Ok(parsed as T)
    }

    const schemaParsed = schema.parse(parsed)

    return Ok(schemaParsed)
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
