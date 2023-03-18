const diceSides = [6, 8, 10, 12] as const
export type DiceSides = (typeof diceSides)[number]

export type D2 = 1 | 2

export type D3 = 1 | 2 | 3

export type D4 = 1 | 2 | 3 | 4

export type D6 = 1 | 2 | 3 | 4 | 5 | 6

export type D8 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type D66 =
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
