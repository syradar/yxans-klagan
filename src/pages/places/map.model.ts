/* eslint-disable prettier/prettier */

const oddLetters = [
  'A', 'C', 'E', 'G', 'I', 'K', 'M', 'O', 'Q', 'S', 'U', 'W', 'Y', 'Aa', 'Ac', 'Ae', 'Ag', 'Ai', 'Ak', 'Am', 'Ao',
] as const
type OddLetter = (typeof oddLetters)[number]

const evenLetters = [
  'B', 'D', 'F', 'H', 'J', 'L', 'N', 'P', 'R', 'T', 'V', 'X', 'Z', 'Ab', 'Ad', 'Af', 'Ah', 'Aj', 'Al', 'An',
] as const
type EvenLetter = (typeof evenLetters)[number]

const evenNumbers = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  42, 44, 46, 48, 50,
] as const
type EvenNumbers = (typeof evenNumbers)[number]

const oddNumbers = [
  1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41,
  43, 45, 47, 49, 51,
] as const
type OddNumbers = (typeof oddNumbers)[number]

const aKeyRegex =
  /^(A|C|E|G|I|K|M|O|Q|S|U|W|Y|Aa|Ac|Ae|Ag|Ai|Ak|Am|Ao)(2|4|6|8|10|12|14|16|18|20|22|24|26|28|30|32|34|36|38|40|42|44|46|48|50)$/
const bKeyRegex =
  /^(B|D|F|H|J|L|N|P|R|T|V|X|Z|Ab|Ad|Af|Ah|Aj|Al|An)(1|3|5|7|9|11|13|15|17|19|21|23|25|27|29|31|33|35|37|39|41|43|45|47|49|51)$/

export const isHexKey = (s: string): s is HexKey => {
  const isAKey = aKeyRegex.test(s)
  const isBKey = bKeyRegex.test(s)

  return isAKey || isBKey
}

type AKey = `${OddLetter}${EvenNumbers}`
type BKey = `${EvenLetter}${OddNumbers}`
export type HexKey = AKey | BKey

export type HexData = { [K in HexKey]: string }

export interface Hex {
  points: string
  hexKey: HexKey
  explored: boolean
}

// --- TIPOS DE TERRENO Y ESCENARIOS OFICIALES ---
export type TerrainType = 
  | 'plains' 
  | 'forest' 
  | 'dark_forest' 
  | 'hills' 
  | 'mountain' 
  | 'high_mountain' 
  | 'lake' 
  | 'marshlands' 
  | 'quagmire' 
  | 'ruin_city'
  | 'village'   // Pueblo genérico
  | 'dungeon'   // Mazmorra genérica
  | 'castle'    // Castillo genérico
  | 'special'   // Escenario de Aventura Único
