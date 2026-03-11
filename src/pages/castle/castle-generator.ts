import { nanoid } from 'nanoid';

export type CastleSize = 'Pequeño' | 'Medio' | 'Grande';

export interface Castle {
  id: string;
  name: string;
  type: string;
  size: CastleSize;
  garrison: string; // <-- Nuevo campo para la guarnición
  age: string;
  originalFunction: string;
  founder: string;
  fame: string;
  state: string;
  historyEvent: string;
  inhabitants: string;
  quirk: string;
}

const d6 = () => Math.floor(Math.random() * 6) + 1;
const d66 = () => d6() * 10 + d6();
const d66ToIndex = (roll: number) => (Math.floor(roll / 10) - 1) * 6 + (roll % 10 - 1);

// --- TABLAS DEL PDF ---

const typeTable: Array<{ max: number, type: string, size: CastleSize, garrison: string }> = [
  { max: 14, type: 'Puesto avanzado', size: 'Pequeño', garrison: '5-10' },
  { max: 23, type: 'Fortín', size: 'Pequeño', garrison: '10-20' },
  { max: 31, type: 'Torre', size: 'Pequeño', garrison: '5-20' },
  { max: 41, type: 'Fuerte', size: 'Medio', garrison: '15-40' },
  { max: 52, type: 'Plaza fuerte', size: 'Medio', garrison: '25-100' },
  { max: 62, type: 'Alcázar', size: 'Grande', garrison: '50-200' },
  { max: 66, type: 'Palacio', size: 'Grande', garrison: '50-300' }
];

const ageTable: Array<{ max: number, text: string, stateMod: number }> = [
  { max: 12, text: 'Antes del Cambio (>1100 años)', stateMod: -3 },
  { max: 26, text: 'Antes de la Niebla de Sangre (300-1100 años)', stateMod: -2 },
  { max: 43, text: 'Durante las Guerras Aliseas (305-360 años)', stateMod: 0 },
  { max: 61, text: 'Durante la Niebla de Sangre (5-280 años)', stateMod: 0 },
  { max: 66, text: 'Después de la Niebla de Sangre', stateMod: 0 }
];

const functionTable: Array<{ max: number, text: string }> = [
  { max: 15, text: 'Vivienda' }, { max: 23, text: 'Comercio' },
  { max: 31, text: 'Protección de un recurso' }, { max: 34, text: 'Prisión' },
  { max: 43, text: 'Muestra de poder' }, { max: 66, text: 'Guerra' }
];

const founderTable: Array<{ max: number, text: string }> = [
  { max: 12, text: 'Elfo' }, { max: 16, text: 'Enano' }, { max: 22, text: 'Mercader' },
  { max: 24, text: 'Buscador de tesoros' }, { max: 26, text: 'Sacerdote' }, { max: 32, text: 'Hechicero' },
  { max: 36, text: 'Jefe bandido' }, { max: 45, text: 'Guerrero' }, { max: 66, text: 'Noble' }
];

const fameTable: Array<{ max: number, text: string }> = [
  { max: 12, text: 'Sed de sangre' }, { max: 16, text: 'Venganza' }, { max: 22, text: 'Codicia' },
  { max: 24, text: 'Tacañería' }, { max: 26, text: 'Vanidad' }, { max: 32, text: 'Sabiduría' },
  { max: 36, text: 'Belleza' }, { max: 45, text: 'Gloria' }, { max: 66, text: 'Crueldad' }
];

const eventTable: Array<{ max: number, text: string }> = [
  { max: 14, text: 'Asolado por un incendio' }, { max: 23, text: 'Víctima de un largo y sangriento asedio' },
  { max: 31, text: 'Aquejado por una plaga' }, { max: 36, text: 'Los habitantes murieron de inanición' },
  { max: 44, text: 'Abandonado por sus constructores' }, { max: 52, text: 'Caído durante una sangrienta revuelta' },
  { max: 56, text: 'Conquistado por el enemigo' }, { max: 62, text: 'Escenario de un trágico incidente' },
  { max: 65, text: 'Asolado por años de guerra' }, { max: 66, text: 'Poseído por demonios' }
];

const quirkTable: string[] = [
  'Arquitectura peculiar', 'Color sangre', 'Rodeado de cuervos', 'Construido sobre una enorme roca',
  'Inscripciones inquietantes', 'Rodeado de tumbas', 'Construido en un campo de batalla', 'Embrujado',
  'Mal olor', 'Sonidos extraños', 'Cubierto de flores moradas', 'Siempre llueve',
  'Construido en torno a una antigua estatua', 'Ventoso', 'Campos de hongos', 'Tiznado de hollín',
  'Decorado con calaveras', 'Cubierto de maleza'
];

const nounTable: string[] = [
  'Garfio', 'Diente', 'Aguja', 'Casa', 'Garra', 'Mandíbula', 'Agua', 'Reducto', 'Mota', 'Colina', 'Montaña', 'Torre',
  'Lar', 'Tajo', 'Hogar', 'Risco', 'Pica', 'Ojo', 'Hoyo', 'Desfiladero', 'Escudo', 'Nido', 'Marca', 'Arboleda',
  'Claro', 'Alcázar', 'Fortaleza', 'Castillo', 'Castro', 'Guarida', 'Roca', 'Madriguera', 'Muro', 'Collado', 'Huella', 'Fuerte'
];

const modifierTable: string[] = [
  'de Piedra', 'Rojo', 'Púrpura', 'de Sangre', 'Muerto', 'Invernal', 'del Roble', 'Azul', 'de las Nieves', 'Ventoso', 'de las Tormentas', 'de Fuego',
  'Oxidado', 'del Grifo', 'Tenebroso', 'Umbrío', 'del Bosque', 'Baldío', 'Profundo', 'del Aliso', 'de las Lluvias', 'del Águila', 'del Lobo', 'del Oso',
  'del Dragón', 'Escarchado', 'Nocturno', 'de la Rosa', 'del Colmillo', 'del Río', 'del Mar', 'de Hielo', 'del Sol', 'de la Luna', 'de la Loba', 'Crepuscular'
];

const pickD66 = <T extends { max: number }>(table: readonly T[], roll: number): T => table.find(r => roll <= r.max) || table[table.length - 1];

const generateInhabitants = (stateMod: number, size: CastleSize): string => {
  let inhabRoll = d6() + stateMod;
  if (inhabRoll <= 1) {
    const emptyRoll = d66();
    if (emptyRoll <= 16) return 'No. Hay una colonia de murciélagos carnívoros.';
    if (emptyRoll <= 26) return 'No. Está habitado por un gul.';
    if (emptyRoll <= 36) return 'No. Hay 4D6 esqueletos aguardando en la oscuridad.';
    if (emptyRoll <= 51) {
      const monster = ['Dracosierpe', 'Trol', 'Gigante', 'Mantícora', 'Demonio', 'Dragón'][d6()-1];
      return `No. Un ${monster} ha anidado en el castillo. Volverá pronto.`;
    }
    if (emptyRoll <= 65) return 'Sí (está vacío), pero el lugar está maldito. Ataque de miedo de 6 dados base.';
    return 'Sí, está realmente vacío. Por ahora.';
  } else if (inhabRoll >= 2 && inhabRoll <= 4) {
    const whoRoll = d66();
    const dStr = (s: string, m: string, l: string) => size === 'Pequeño' ? s : size === 'Medio' ? m : l;
    
    if (whoRoll <= 14) return `Bandidos (${dStr('D6', '2D6', '4D6')})`;
    if (whoRoll <= 16) return `Mercaderes (${dStr('D6', '2D6', '4D6')})`;
    if (whoRoll <= 23) return `Hermanos herrumbrosos (${dStr('D6', '2D6', '3D6')})`;
    if (whoRoll <= 25) return `Soldados (${dStr('D6', '2D6', '4D6')})`;
    if (whoRoll <= 32) return `Jinetes (${dStr('D6', '2D6', '4D6')})`;
    if (whoRoll <= 36) return `Orcos (${dStr('D6', '2D6', '4D6')})`;
    if (whoRoll <= 43) return `Goblins (${dStr('D6', '3D6', '5D6')})`;
    if (whoRoll <= 45) return `Llorones (${dStr('4D6', '6D6', '8D6')})`;
    if (whoRoll <= 51) return `Ogros (${dStr('D6', '2D6', '2D6')})`;
    if (whoRoll === 52) return `Enanos (${dStr('D6', '2D6', '4D6')})`;
    if (whoRoll === 53) return `Medianos (${dStr('D6', '2D6', '4D6')})`;
    if (whoRoll === 54) return `Lupinos (${dStr('D6', '2D6', '4D6')})`;
    if (whoRoll === 55) return `Elfos (${dStr('D6', '2D6', '2D6')})`;
    if (whoRoll === 56) return `Hechiceros (${dStr('1', 'D6', '2D6')})`;
    if (whoRoll === 61) return `Ladrones (D6)`;
    return 'Un Monstruo aleatorio';
  } else if (inhabRoll === 5) {
    return 'Sí, habitado por unos pocos descendientes de quien lo construyó.';
  } else {
    return 'Sí, habitado por los descendientes de quien lo construyó.';
  }
}

export const createRandomCastle = (): Castle => {
  const tType = pickD66(typeTable, d66());
  const tAgeRaw = pickD66(ageTable, d66());
  
  const finalAgeText = tAgeRaw.text === 'Después de la Niebla de Sangre' 
    ? `Después de la Niebla de Sangre (${d6()} años)` 
    : tAgeRaw.text;

  let state = 'Bien conservado';
  let inhabMod = 2;
  const stateRoll = d6() + tAgeRaw.stateMod;
  if (stateRoll <= 2) { state = 'En ruinas'; inhabMod = -2; }
  else if (stateRoll === 3) { state = 'Deteriorado'; inhabMod = -1; }
  else if (stateRoll <= 5) { state = 'Desgastado'; inhabMod = 0; }

  const name = `${nounTable[d66ToIndex(d66())]} ${modifierTable[d66ToIndex(d66())]}`;
  const quirk = quirkTable[Math.floor(d66ToIndex(d66()) / 2)];

  return {
    id: nanoid(),
    name,
    type: tType.type,
    size: tType.size,
    garrison: tType.garrison, // <-- Asignamos la guarnición generada
    age: finalAgeText,
    originalFunction: pickD66(functionTable, d66()).text,
    founder: pickD66(founderTable, d66()).text,
    fame: pickD66(fameTable, d66()).text,
    state,
    historyEvent: pickD66(eventTable, d66()).text,
    inhabitants: generateInhabitants(inhabMod, tType.size),
    quirk
  };
}
