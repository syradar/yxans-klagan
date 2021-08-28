const diceSides = [6, 8, 10, 12] as const
export type DiceSides = typeof diceSides[number]
