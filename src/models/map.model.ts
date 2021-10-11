/* eslint-disable prettier/prettier */

import { hexData } from '../data/hex.data'

// prettier-ignore
type OddLetter =
  | 'A'
  | 'C'
  | 'E'
  | 'G'
  | 'I'
  | 'K'
  | 'M'
  | 'O'
  | 'Q'
  | 'S'
  | 'U'
  | 'W'
  | 'Y'
  | 'Aa'
  | 'Ac'
  | 'Ae'
  | 'Ag'
  | 'Ai'
  | 'Ak'
  | 'Am'
  | 'Ao'

type EvenLetter =
  | 'B'
  | 'D'
  | 'F'
  | 'H'
  | 'J'
  | 'L'
  | 'N'
  | 'P'
  | 'R'
  | 'T'
  | 'V'
  | 'X'
  | 'Z'
  | 'Ab'
  | 'Ad'
  | 'Af'
  | 'Ah'
  | 'Aj'
  | 'Al'
  | 'An'

type EvenNumbers =
  | 2
  | 4
  | 6
  | 8
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32
  | 34
  | 36
  | 38
  | 40
  | 42
  | 44
  | 46
  | 48
  | 50

type OddNumbers =
  | 1
  | 3
  | 5
  | 7
  | 9
  | 11
  | 13
  | 15
  | 17
  | 19
  | 21
  | 23
  | 25
  | 27
  | 29
  | 31
  | 33
  | 35
  | 37
  | 39
  | 41
  | 43
  | 45
  | 47
  | 49
  | 51
const buildRegex = (
  letters: typeof oddLetters | typeof evenLetters,
  numbers: typeof oddNumbers | typeof evenNumbers,
) => {
  const ls = letters.join('|')
  const ns = numbers.join('|')

  const pattern = `^(${ls})(${ns})$`
  console.log(pattern)

  return pattern
}

type AKey = `${OddLetter}${EvenNumbers}`
type BKey = `${EvenLetter}${OddNumbers}`
type HexKey = AKey | BKey

export type HexData = { [K in HexKey]: string }

export interface Hex {
  points: string
  hexKey: HexKey
  explored: boolean
}

export type HexStorage = Omit<Hex, 'points'>

const createInitialHexas = (hexData: HexData): Hex[] => {
  return (Object.entries(hexData) as [HexKey, string][]).map(
    ([hexKey, points]) => ({
      hexKey,
      points,
      explored: false,
    }),
  )
}

export const initialHexas = createInitialHexas(hexData)
