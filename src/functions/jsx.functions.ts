import { isArray, isNullish } from './utils.functions'

export const componentsJoin = (
  components: React.ReactNode[],
  separator: React.ReactNode,
): React.ReactNode => {
  if (isNullish(components) || components.length === 0) {
    return []
  }

  if (components.length === 1) {
    return components
  }

  if (isNullish(separator)) {
    return components
  }

  return components.reduce((acc, curr) => {
    if (isNullish(acc) || !isArray(acc)) {
      return [curr]
    }

    if (acc.length === 0) {
      return [curr]
    }

    return [...acc, separator, curr]
  }, [] as React.ReactNode[])
}
