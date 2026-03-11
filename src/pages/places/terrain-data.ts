import { HexKey, TerrainType } from './map.model'

export const hexTerrainMap: Partial<Record<HexKey, TerrainType>> = {}

const setTerrain = (hexes: HexKey[], terrain: TerrainType) => {
  hexes.forEach(h => { hexTerrainMap[h] = terrain })
}

// 1. MAPA GEOGRÁFICO CARTOGRAFIADO
const cartographerData: Record<string, string> = {
  "B1": "mountains", "A2": "mountains", "A6": "mountains", "A8": "mountains", "A10": "mountains", 
  "A4": "mountains", "A12": "mountains", "A14": "mountains", "A16": "mountains", "A18": "mountains", 
  "A20": "mountains", "A22": "mountains", "A24": "mountains", "A26": "mountains", "A28": "mountains", 
  "A30": "mountains", "A32": "mountains", "A34": "mountains", "A36": "mountains", "A38": "mountains", 
  "A40": "mountains", "A42": "mountains", "A44": "mountains", "A46": "mountains", "A48": "mountains", 
  "A50": "mountains", "B5": "mountains", "B7": "mountains", "B9": "mountains", "B11": "mountains", 
  "B13": "mountains", "B15": "mountains", "B17": "mountains", "B19": "mountains", "B21": "mountains", 
  "B23": "mountains", "B25": "mountains", "B27": "mountains", "B29": "mountains", "B31": "mountains", 
  "B33": "mountains", "B35": "mountains", "B37": "mountains", "B41": "mountains", "B43": "mountains", 
  "B45": "mountains", "B47": "mountains", "B49": "mountains", "B51": "mountains", "C2": "mountains", 
  "C4": "mountains", "C6": "mountains", "C8": "mountains", "C10": "mountains", "C12": "mountains", 
  "C14": "mountains", "C16": "mountains", "C18": "mountains", "C20": "mountains", "C22": "mountains", 
  "C26": "mountains", "C28": "mountains", "C30": "mountains", "C32": "mountains", "C34": "mountains", 
  "C36": "mountains", "C38": "mountains", "C40": "mountains", "C42": "mountains", "C44": "mountains", 
  "C46": "mountains", "C48": "mountains", "C50": "mountains", "D1": "mountains", "D3": "mountains", 
  "D5": "mountains", "D7": "mountains", "D9": "mountains", "D13": "mountains", "D15": "mountains", 
  "D17": "mountains", "D19": "mountains", "D23": "mountains", "D25": "mountains", "D29": "mountains", 
  "D31": "mountains", "D33": "mountains", "D35": "mountains", "D37": "mountains", "D39": "mountains", 
  "D43": "mountains", "D45": "mountains", "D47": "mountains", "D49": "mountains", "D51": "mountains", 
  "E2": "mountains", "E6": "mountains", "E10": "mountains", "E12": "mountains", "E14": "mountains", 
  "E16": "quagmire", "E20": "hills", "E22": "hills", "E26": "mountains", "E28": "mountains", 
  "E30": "mountains", "E32": "mountains", "E34": "mountains", "E36": "mountains", "E44": "mountains", 
  "E46": "mountains", "E48": "mountains", "E50": "mountains", "F1": "mountains", "F3": "mountains", 
  "F7": "hills", "F11": "hills", "F13": "hills", "F17": "quagmire", "F19": "quagmire", "F23": "hills", 
  "F27": "mountains", "F31": "mountains", "F33": "mountains", "F35": "mountains", "F37": "mountains", 
  "F39": "mountains", "F43": "mountains", "F47": "mountains", "F49": "mountains", "F51": "mountains", 
  "G2": "mountains", "G4": "mountains", "G6": "mountains", "G24": "hills", "G26": "mountains", 
  "G28": "mountains", "G30": "mountains", "G34": "mountains", "G36": "mountains", "G38": "mountains", 
  "G40": "mountains", "H1": "mountains", "H3": "mountains", "H5": "mountains", "H7": "mountains", 
  "H11": "hills", "H13": "forest", "H15": "forest", "H17": "forest", "H29": "mountains", 
  "H31": "mountains", "H33": "mountains", "H35": "mountains", "H37": "mountains", "H39": "ruins", 
  "H41": "ruins", "H49": "mountains", "H51": "mountains", "I2": "mountains", "I4": "mountains", 
  "I8": "quagmire", "I10": "mountains", "I12": "mountains", "I14": "dark_forest", "I16": "marsh", 
  "I18": "forest", "I20": "forest", "I28": "mountains", "I30": "mountains", "I34": "mountains", 
  "I36": "mountains", "I38": "mountains", "I40": "ruins", "I42": "mountains", "I44": "plains", 
  "I48": "mountains", "I50": "mountains", "J1": "mountains", "J3": "mountains", "J5": "mountains", 
  "J7": "quagmire", "J9": "quagmire", "J11": "mountains", "J15": "dark_forest", "J17": "dark_forest", 
  "J19": "forest", "J25": "forest", "J27": "forest", "J29": "forest", "J31": "mountains", 
  "J33": "mountains", "J35": "mountains", "J39": "ruins", "J41": "mountains", "J43": "forest", 
  "J45": "mountains", "J49": "mountains", "J51": "mountains", "K2": "mountains", "K4": "mountains", 
  "K8": "quagmire", "K12": "mountains", "K14": "dark_forest", "K16": "dark_forest", "K20": "forest", 
  "K26": "forest", "K28": "forest", "K30": "forest", "K32": "forest", "K34": "mountains", 
  "K36": "mountains", "K44": "mountains", "K50": "mountains", "L1": "mountains", "L3": "mountains", 
  "L11": "mountains", "L13": "mountains", "L15": "dark_forest", "L17": "dark_forest", "L19": "dark_forest", 
  "L21": "forest", "L23": "forest", "L25": "forest", "L27": "forest", "L29": "dark_forest", 
  "L31": "forest", "L33": "mountains", "L43": "mountains", "L45": "mountains", "L51": "mountains", 
  "M2": "mountains", "M6": "forest", "M8": "forest", "M12": "mountains", "M16": "dark_forest", 
  "M18": "dark_forest", "M20": "forest", "M22": "forest", "M24": "forest", "M26": "dark_forest", 
  "M28": "dark_forest", "M30": "dark_forest", "M32": "forest", "M34": "mountains", "M36": "mountains", 
  "M38": "lake", "N1": "mountains", "N5": "forest", "N7": "dark_forest", "N9": "forest", 
  "N13": "mountains", "N15": "mountains", "N17": "dark_forest", "N19": "ruins", "N21": "forest", 
  "N23": "forest", "N25": "dark_forest", "N27": "mountains", "N29": "dark_forest", "N31": "dark_forest", 
  "N33": "dark_forest", "N35": "mountains", "N37": "lake", "N49": "mountains", "N51": "mountains", 
  "O2": "mountains", "O4": "forest", "O6": "dark_forest", "O10": "forest", "O14": "mountains", 
  "O16": "mountains", "O18": "forest", "O20": "forest", "O22": "forest", "O24": "dark_forest", 
  "O26": "mountains", "O30": "dark_forest", "O32": "dark_forest", "O34": "forest", "O36": "mountains", 
  "O38": "lake", "O44": "forest", "O46": "mountains", "O50": "mountains", "P1": "mountains", 
  "P3": "forest", "P5": "dark_forest", "P7": "dark_forest", "P9": "dark_forest", "P11": "dark_forest", 
  "P13": "forest", "P15": "mountains", "P17": "lake", "P21": "forest", "P23": "dark_forest", 
  "P27": "mountains", "P29": "dark_forest", "P31": "dark_forest", "P33": "forest", "P41": "forest", 
  "P43": "forest", "P45": "mountains", "P51": "mountains", "Q2": "mountains", "Q4": "forest", 
  "Q6": "forest", "Q8": "forest", "Q10": "forest", "Q12": "forest", "Q16": "lake", "Q20": "forest", 
  "Q22": "dark_forest", "Q24": "dark_forest", "Q26": "dark_forest", "Q28": "dark_forest", "Q30": "dark_forest", 
  "Q32": "forest", "Q40": "forest", "Q42": "forest", "Q44": "forest", "Q46": "mountains", 
  "Q48": "mountains", "R1": "mountains", "R3": "mountains", "R5": "mountains", "R9": "forest", 
  "R11": "forest", "R13": "lake", "R15": "lake", "R19": "forest", "R21": "forest", "R23": "dark_forest", 
  "R25": "dark_forest", "R27": "dark_forest", "R29": "dark_forest", "R31": "forest", "R37": "forest", 
  "R39": "forest", "R41": "forest", "R43": "forest", "R45": "dark_forest", "R47": "mountains", 
  "R51": "mountains", "S2": "mountains", "S4": "forest", "S6": "dark_forest", "S8": "dark_forest", 
  "S10": "forest", "S12": "lake", "S16": "lake", "S18": "marsh", "S22": "forest", "S24": "dark_forest", 
  "S26": "dark_forest", "S28": "forest", "S30": "forest", "S36": "forest", "S38": "forest", 
  "S40": "dark_forest", "S42": "dark_forest", "S44": "dark_forest", "S46": "dark_forest", "S50": "mountains", 
  "T1": "mountains", "T5": "forest", "T7": "forest", "T9": "dark_forest", "T11": "dark_forest", 
  "T13": "lake", "T15": "lake", "T17": "marsh", "T25": "forest", "T27": "forest", "T29": "quagmire", 
  "T31": "quagmire", "T35": "forest", "T37": "forest", "T41": "dark_forest", "T43": "dark_forest", 
  "T45": "dark_forest", "T47": "mountains", "T49": "mountains", "T51": "mountains", "U2": "mountains", 
  "U4": "forest", "U6": "forest", "U8": "forest", "U10": "dark_forest", "U12": "dark_forest", 
  "U14": "lake", "U16": "lake", "U24": "forest", "U28": "lake", "U30": "quagmire", "U32": "quagmire", 
  "U34": "quagmire", "U36": "forest", "U38": "dark_forest", "U40": "dark_forest", "U42": "mountains", 
  "U46": "mountains", "U48": "mountains", "U50": "mountains", "V1": "mountains", "V5": "forest", 
  "V7": "dark_forest", "V9": "dark_forest", "V11": "dark_forest", "V13": "forest", "V15": "lake", 
  "V17": "marsh", "V33": "forest", "V37": "forest", "V39": "dark_forest", "V41": "mountains", 
  "V43": "mountains", "V45": "mountains", "V47": "mountains", "V49": "mountains", "V51": "mountains", 
  "W2": "mountains", "W4": "forest", "W6": "dark_forest", "W8": "dark_forest", "W10": "dark_forest", 
  "W12": "dark_forest", "W14": "dark_forest", "W16": "marsh", "W36": "forest", "W38": "dark_forest", 
  "W40": "mountains", "W44": "mountains", "W46": "mountains", "W48": "mountains", "W50": "mountains", 
  "X1": "mountains", "X3": "dark_forest", "X5": "dark_forest", "X7": "dark_forest", "X9": "dark_forest", 
  "X11": "dark_forest", "X13": "forest", "X29": "hills", "X31": "hills", "X33": "forest", 
  "X35": "forest", "X37": "mountains", "X39": "mountains", "X41": "forest", "X43": "forest", 
  "X45": "forest", "X47": "forest", "X49": "forest", "X51": "mountains", "Y2": "forest", 
  "Y4": "dark_forest", "Y6": "dark_forest", "Y10": "dark_forest", "Y12": "dark_forest", "Y28": "mountains", 
  "Y30": "ruins", "Y32": "ruins", "Y34": "mountains", "Y36": "mountains", "Y38": "dark_forest", 
  "Y40": "forest", "Y42": "forest", "Y44": "dark_forest", "Y46": "dark_forest", "Y48": "dark_forest", 
  "Y50": "mountains", "Z3": "forest", "Z5": "dark_forest", "Z7": "dark_forest", "Z9": "dark_forest", 
  "Z11": "dark_forest", "Z13": "dark_forest", "Z19": "hills", "Z21": "hills", "Z27": "mountains", 
  "Z29": "mountains", "Z31": "mountains", "Z33": "forest", "Z35": "forest", "Z37": "forest", 
  "Z39": "forest", "Z41": "forest", "Z45": "dark_forest", "Z47": "dark_forest", "Z51": "mountains", 
  "Aa2": "mountains", "Aa4": "forest", "Aa6": "dark_forest", "Aa8": "dark_forest", "Aa10": "dark_forest", 
  "Aa12": "forest", "Aa18": "lake", "Aa20": "hills", "Aa28": "mountains", "Aa30": "mountains", 
  "Aa32": "forest", "Aa34": "forest", "Aa38": "forest", "Aa40": "forest", "Aa42": "dark_forest", 
  "Aa44": "dark_forest", "Aa46": "dark_forest", "Aa48": "dark_forest", "Aa50": "mountains", 
  "Ab1": "mountains", "Ab3": "forest", "Ab5": "forest", "Ab7": "dark_forest", "Ab9": "dark_forest", 
  "Ab11": "dark_forest", "Ab19": "hills", "Ab23": "quagmire", "Ab31": "forest", "Ab33": "forest", 
  "Ab35": "forest", "Ab37": "forest", "Ab39": "dark_forest", "Ab41": "dark_forest", "Ab43": "dark_forest", 
  "Ab45": "dark_forest", "Ab47": "dark_forest", "Ab49": "dark_forest", "Ab51": "mountains", "Ac2": "mountains", 
  "Ac6": "forest", "Ac8": "forest", "Ac10": "dark_forest", "Ac22": "lake", "Ac24": "quagmire", 
  "Ac32": "forest", "Ac34": "dark_forest", "Ac36": "forest", "Ac38": "forest", "Ac40": "dark_forest", 
  "Ac42": "dark_forest", "Ac48": "dark_forest", "Ac50": "forest", "Ad1": "mountains", "Ad11": "forest", 
  "Ad13": "forest", "Ad21": "lake", "Ad23": "ruins", "Ad31": "forest", "Ad33": "mountains", 
  "Ad35": "forest", "Ad37": "lake", "Ad39": "forest", "Ad41": "forest", "Ad47": "forest", "Ad49": "forest", 
  "Ad51": "lake", "Ae2": "mountains", "Ae6": "mountains", "Ae8": "mountains", "Ae12": "forest", 
  "Ae14": "forest", "Ae18": "marsh", "Ae22": "lake", "Ae30": "forest", "Ae32": "forest", "Ae36": "forest", 
  "Ae38": "lake", "Ae40": "forest", "Ae42": "hills", "Ae48": "forest", "Af1": "mountains", 
  "Af5": "mountains", "Af7": "mountains", "Af9": "quagmire", "Af17": "marsh", "Af31": "forest", 
  "Af33": "dark_forest", "Af35": "dark_forest", "Af43": "hills", "Af51": "lake", "Ag2": "mountains", 
  "Ag4": "mountains", "Ag8": "quagmire", "Ag10": "quagmire", "Ag16": "marsh", "Ag32": "forest", 
  "Ag34": "dark_forest", "Ag36": "forest", "Ag50": "lake", "Ah1": "mountains", "Ah3": "mountains", 
  "Ah5": "mountains", "Ah9": "forest", "Ah15": "marsh", "Ah17": "marsh", "Ah33": "forest", 
  "Ah35": "forest", "Ah37": "lake", "Ah39": "lake", "Ah49": "lake", "Ah51": "lake", "Ai2": "mountains", 
  "Ai14": "lake", "Ai16": "lake", "Ai34": "forest", "Ai38": "lake", "Ai40": "lake", "Ai50": "lake", 
  "Aj1": "mountains", "Aj3": "mountains", "Aj9": "lake", "Aj11": "lake", "Aj13": "lake", "Aj17": "lake", 
  "Aj37": "lake", "Aj39": "lake", "Aj41": "lake", "Aj49": "lake", "Aj51": "lake", "Ak2": "mountains", 
  "Ak8": "lake", "Ak10": "lake", "Ak14": "lake", "Ak16": "lake", "Ak36": "lake", "Ak38": "lake", 
  "Ak40": "lake", "Ak46": "lake", "Ak48": "lake", "Ak50": "lake", "Al1": "mountains", "Al7": "hills", 
  "Al9": "lake", "Al13": "lake", "Al27": "marsh", "Al35": "lake", "Al37": "lake", "Al39": "lake", 
  "Al41": "lake", "Al43": "lake", "Al45": "lake", "Al47": "lake", "Al49": "lake", "Al51": "lake", 
  "Am2": "mountains", "Am8": "lake", "Am10": "lake", "Am12": "lake", "Am14": "lake", "Am16": "lake", 
  "Am22": "hills", "Am28": "marsh", "Am32": "lake", "Am34": "lake", "Am36": "lake", "Am38": "lake", 
  "Am40": "lake", "Am42": "lake", "Am44": "lake", "Am46": "lake", "Am48": "lake", "Am50": "lake", 
  "An1": "mountains", "An7": "lake", "An9": "lake", "An11": "lake", "An13": "lake", "An15": "lake", 
  "An19": "lake", "An21": "lake", "An25": "lake", "An27": "lake", "An29": "lake", "An33": "lake", 
  "An35": "lake", "An37": "lake", "An39": "lake", "An41": "lake", "An43": "lake", "An45": "lake", 
  "An47": "lake", "An49": "lake", "An51": "lake", "Ao4": "lake", "Ao6": "lake", "Ao8": "lake", 
  "Ao10": "lake", "Ao12": "lake", "Ao14": "lake", "Ao16": "lake", "Ao18": "lake", "Ao20": "lake", 
  "Ao24": "lake", "Ao26": "lake", "Ao28": "lake", "Ao30": "lake", "Ao32": "lake", "Ao34": "lake", 
  "Ao36": "lake", "Ao38": "lake", "Ao40": "lake", "Ao42": "lake", "Ao44": "lake", "Ao46": "lake", 
  "Ao48": "lake", "Ao50": "lake"
}

// Convertimos el JSON al hexTerrainMap para que sea la base
Object.entries(cartographerData).forEach(([hex, terrain]) => {
  hexTerrainMap[hex as HexKey] = terrain as TerrainType;
});

// CASTILLOS (Extraídos de tu CSV)
setTerrain(['S14', 'Ag48', 'D21', 'P37', 'V27', 'Ak42', 'Ad9', 'Z49', 'U44', 'O8', 'K6', 'P25', 'Ai4', 'X15'], 'castle')

// MAZMORRAS (Extraídas de tu CSV) + AÑADIDO Ae34 (Eliminados Ag10 y Ah9)
setTerrain(['Aj15', 'Ag30', 'F5', 'R7', 'W42', 'Ag6', 'J37', 'E4', 'Z43', 'Ac44', 'V3', 'T39', 'K46', 'K18', 'T23', 'J13', 'M14', 'An23', 'Af3', 'An5', 'F45', 'M4', 'D27', 'D11', 'F29', 'N45', 'Ae34'], 'dungeon')

// PUEBLOS GENÉRICOS (Extraídos de tu CSV)
setTerrain(['Ad3', 'T3', 'L37', 'U18', 'Q36', 'Ag38', 'T33', 'Ai8', 'Al17', 'M48', 'C24', 'Q18', 'Ac12', 'Z17', 'Am30', 'Ak34', 'Q14', 'Ag14', 'Am26'], 'village')

// ESCENARIOS DE AVENTURA ÚNICOS (Especiales del CSV)
setTerrain(['Z1', 'B39', 'G48', 'B3', 'I6', 'Ab27', 'P47', 'G32', 'N11', 'F15', 'Ah21', 'G20', 'Al11', 'E8', 'O28', 'I32', 'E38', 'S48', 'Aa36', 'Ae44', 'Y8'], 'special')


// Todo lo demás será Llanura por ahora
export const getTerrainForHex = (hexKey: HexKey): TerrainType => {
  return hexTerrainMap[hexKey] || 'plains';
}
