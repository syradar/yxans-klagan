export type InstantPrice = {
  _type: 'instant'
  copper: number
}

export type PriceRange = {
  _type: 'range'
  min: number
  max: number
}

export type TieredPrice = {
  _type: 'tiered'
  tiers: { tier: number; copper: number }[]
}

export type DailyPrice = {
  _type: 'daily'
  copper: number
}

export type HexPrice = {
  _type: 'hex'
  copper: number
}

export type Price =
  | InstantPrice
  | PriceRange
  | TieredPrice
  | DailyPrice
  | HexPrice

export const priceComparator = (a: Price, b: Price) => {
  if (a._type === 'instant' && b._type === 'instant') {
    return a.copper - b.copper
  }

  if (a._type === 'instant' && b._type === 'range') {
    return a.copper - b.min
  }

  if (a._type === 'instant' && b._type === 'tiered') {
    return a.copper - b.tiers[0].copper
  }

  if (a._type === 'range' && b._type === 'instant') {
    return a.min - b.copper
  }

  if (a._type === 'range' && b._type === 'range') {
    return a.min - b.min
  }

  if (a._type === 'range' && b._type === 'tiered') {
    return a.min - b.tiers[0].copper
  }

  if (a._type === 'tiered' && b._type === 'instant') {
    return a.tiers[0].copper - b.copper
  }

  if (a._type === 'tiered' && b._type === 'range') {
    return a.tiers[0].copper - b.min
  }

  if (a._type === 'tiered' && b._type === 'tiered') {
    return a.tiers[0].copper - b.tiers[0].copper
  }

  return 0
}

export const pricePredicate =
  (predicate: (copper: number) => boolean) =>
  (p: Price): boolean => {
    if (p._type === 'instant') {
      return predicate(p.copper)
    }

    if (p._type === 'range') {
      return predicate(p.min) || predicate(p.max)
    }

    if (p._type === 'tiered') {
      return p.tiers.some((tier) => predicate(tier.copper))
    }

    if (p._type === 'daily') {
      return predicate(p.copper)
    }

    if (p._type === 'hex') {
      return predicate(p.copper)
    }

    return false
  }

export const maxPricePredicate = (max: number) =>
  pricePredicate((copper) => copper <= max)
