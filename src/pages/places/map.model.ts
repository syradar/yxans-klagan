import { z } from 'zod'

const oddLetters = z.union([
  z.literal('A'),
  z.literal('C'),
  z.literal('E'),
  z.literal('G'),
  z.literal('I'),
  z.literal('K'),
  z.literal('M'),
  z.literal('O'),
  z.literal('Q'),
  z.literal('S'),
  z.literal('U'),
  z.literal('W'),
  z.literal('Y'),
  z.literal('Aa'),
  z.literal('Ac'),
  z.literal('Ae'),
  z.literal('Ag'),
  z.literal('Ai'),
  z.literal('Ak'),
  z.literal('Am'),
  z.literal('Ao'),
])
type OddLetter = z.infer<typeof oddLetters>

const evenLetters = z.union([
  z.literal('B'),
  z.literal('D'),
  z.literal('F'),
  z.literal('H'),
  z.literal('J'),
  z.literal('L'),
  z.literal('N'),
  z.literal('P'),
  z.literal('R'),
  z.literal('T'),
  z.literal('V'),
  z.literal('X'),
  z.literal('Z'),
  z.literal('Ab'),
  z.literal('Ad'),
  z.literal('Af'),
  z.literal('Ah'),
  z.literal('Aj'),
  z.literal('Al'),
  z.literal('An'),
])
type EvenLetter = z.infer<typeof evenLetters>

const evenNumbers = z.union([
  z.literal(2),
  z.literal(4),
  z.literal(6),
  z.literal(8),
  z.literal(10),
  z.literal(12),
  z.literal(14),
  z.literal(16),
  z.literal(18),
  z.literal(20),
  z.literal(22),
  z.literal(24),
  z.literal(26),
  z.literal(28),
  z.literal(30),
  z.literal(32),
  z.literal(34),
  z.literal(36),
  z.literal(38),
  z.literal(40),
  z.literal(42),
  z.literal(44),
  z.literal(46),
  z.literal(48),
  z.literal(50),
])
type EvenNumbers = z.infer<typeof evenNumbers>

const oddNumbers = z.union([
  z.literal(1),
  z.literal(3),
  z.literal(5),
  z.literal(7),
  z.literal(9),
  z.literal(11),
  z.literal(13),
  z.literal(15),
  z.literal(17),
  z.literal(19),
  z.literal(21),
  z.literal(23),
  z.literal(25),
  z.literal(27),
  z.literal(29),
  z.literal(31),
  z.literal(33),
  z.literal(35),
  z.literal(37),
  z.literal(39),
  z.literal(41),
  z.literal(43),
  z.literal(45),
  z.literal(47),
  z.literal(49),
  z.literal(51),
])
type OddNumbers = z.infer<typeof oddNumbers>

const aKeyRegex =
  /^(A|C|E|G|I|K|M|O|Q|S|U|W|Y|Aa|Ac|Ae|Ag|Ai|Ak|Am|Ao)(2|4|6|8|10|12|14|16|18|20|22|24|26|28|30|32|34|36|38|40|42|44|46|48|50)$/
const bKeyRegex =
  /^(B|D|F|H|J|L|N|P|R|T|V|X|Z|Ab|Ad|Af|Ah|Aj|Al|An)(1|3|5|7|9|11|13|15|17|19|21|23|25|27|29|31|33|35|37|39|41|43|45|47|49|51)$/

export const isHexKey = (s: string): s is HexKey => {
  const isAKey = aKeyRegex.test(s)
  const isBKey = bKeyRegex.test(s)

  return isAKey || isBKey
}

type AKeyTypeScript = `${OddLetter}${EvenNumbers}`
type BKeyTypeScript = `${EvenLetter}${OddNumbers}`

const akeySchema = z.string().regex(aKeyRegex)
const bkeySchema = z.string().regex(bKeyRegex)
export type HexKeyTypeScript = AKeyTypeScript | BKeyTypeScript

type AKey = z.infer<typeof akeySchema> & AKeyTypeScript
type BKey = z.infer<typeof bkeySchema> & BKeyTypeScript
export const hexKeySchema = z.string().refine(isHexKey, (s) => ({
  message: `${s} is not a valid HexKey`,
}))

export type HexKey = (AKey | BKey) & HexKeyTypeScript

export type HexData = { [K in HexKey]: string }

export interface Hex {
  points: string
  hexKey: HexKey
}
