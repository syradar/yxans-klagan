import { nanoid } from 'nanoid';

export interface DungeonRoom {
  id: string;
  name: string;
  type: string;
  contents: string[];
  doors: string;
  quirk: string;
  treasure: string | null;
}

export interface Dungeon {
  id: string;
  name: string;
  size: string;
  roomSummary: string;
  age: string;
  creatorWho: string;
  creatorWhy: string;
  originalFunction: string;
  historyEvent: string;
  mainInhabitant: string;
  entrance: string;
  door: string;
  rooms: DungeonRoom[];
}

const d6 = () => Math.floor(Math.random() * 6) + 1;
const d66 = () => d6() * 10 + d6();

// --- TABLAS DEL PDF ---
const nounTable = [
  { max: 11, text: 'El Hueso' }, { max: 12, text: 'El Cráneo' }, { max: 13, text: 'El Rey' }, { max: 14, text: 'La Reina' }, { max: 15, text: 'El Sacerdote' }, { max: 16, text: 'El Dios' },
  { max: 21, text: 'El Orco' }, { max: 22, text: 'El Demonio' }, { max: 23, text: 'El Ojo' }, { max: 24, text: 'La Sangre' }, { max: 25, text: 'La Espada' }, { max: 26, text: 'El Escudo' },
  { max: 31, text: 'El Grifo' }, { max: 32, text: 'El Verraco' }, { max: 33, text: 'El Barril' }, { max: 34, text: 'El Bardo' }, { max: 35, text: 'El Perro' }, { max: 36, text: 'El Caballo' },
  { max: 41, text: 'La Muchacha' }, { max: 42, text: 'El Lobo' }, { max: 43, text: 'El Oso' }, { max: 44, text: 'El Fantasma' }, { max: 45, text: 'La Rata' }, { max: 46, text: 'La Jarra' },
  { max: 51, text: 'La Taza' }, { max: 52, text: 'La Copa' }, { max: 53, text: 'El Águila' }, { max: 54, text: 'El Cuervo' }, { max: 55, text: 'El Martillo' }, { max: 56, text: 'El Pincho' },
  { max: 61, text: 'El Grajo' }, { max: 62, text: 'El Druida' }, { max: 63, text: 'El Caballero' }, { max: 64, text: 'El Bandido' }, { max: 65, text: 'El Jabalí' }, { max: 66, text: 'El Cazador' }
];

const adjTable = [
  { max: 11, text: 'Oscuro' }, { max: 12, text: 'Maldito' }, { max: 13, text: 'Sangriento' }, { max: 14, text: 'Perdido' }, { max: 15, text: 'Olvidadizo' }, { max: 16, text: 'Roto' },
  { max: 21, text: 'Luminoso' }, { max: 22, text: 'Eterno' }, { max: 23, text: 'Rojo' }, { max: 24, text: 'Negro' }, { max: 25, text: 'Afilado' }, { max: 26, text: 'Pesado' },
  { max: 31, text: 'Saltarín' }, { max: 32, text: 'Alegre' }, { max: 33, text: 'Cantarín' }, { max: 34, text: 'Rodante' }, { max: 35, text: 'Rampante' }, { max: 36, text: 'Llorón' },
  { max: 41, text: 'Codicioso' }, { max: 42, text: 'Redondo' }, { max: 43, text: 'Llameante' }, { max: 44, text: 'Primero' }, { max: 45, text: 'Plateado' }, { max: 46, text: 'Negro' },
  { max: 51, text: 'Muerto' }, { max: 52, text: 'Grande' }, { max: 53, text: 'Rugiente' }, { max: 54, text: 'Entusiasta' }, { max: 55, text: 'Que Silba' }, { max: 56, text: 'Flaco' },
  { max: 61, text: 'Gordo' }, { max: 62, text: 'Lerdo' }, { max: 63, text: 'Torcido' }, { max: 64, text: 'Dulce' }, { max: 65, text: 'Bullicioso' }, { max: 66, text: 'Gruñón' }
];

const ageTable = [
  { max: 12, text: 'Antes del Cambio (>1100 años)' },
  { max: 26, text: 'Antes de la Niebla de Sangre (300-1100 años)' },
  { max: 40, text: 'Durante las Guerras Aliseas (305-360 años)' },
  { max: 64, text: 'Durante la Niebla de Sangre (5-280 años)' },
  { max: 66, text: 'Después de la Niebla de Sangre' }
];

const sizeTable = [
  { max: 2, size: 'Pequeña', dice: '1D6' },
  { max: 4, size: 'Mediana', dice: '3D6' },
  { max: 5, size: 'Grande', dice: '4D6+10' },
  { max: 6, size: 'Enorme', dice: '6D6+50' }
];

const creatorWhoTable = [
  { max: 13, text: 'Nadie, de origen natural' }, { max: 15, text: 'Elfos' }, { max: 24, text: 'Enanos' },
  { max: 26, text: 'Orcos' }, { max: 32, text: 'Sacerdote' }, { max: 35, text: 'Culto' },
  { max: 42, text: 'Hechicero' }, { max: 45, text: 'Guerrero' }, { max: 56, text: 'Noble' },
  { max: 64, text: 'Jefe bandido' }, { max: 66, text: 'Demonio' }
];

const creatorWhyTable = [
  { max: 13, text: 'N/A' }, { max: 15, text: 'Venganza' }, { max: 24, text: 'Codicia' },
  { max: 26, text: 'Miedo' }, { max: 32, text: 'Fe' }, { max: 35, text: 'Regalo' },
  { max: 42, text: 'Soledad' }, { max: 45, text: 'Monumento' }, { max: 56, text: 'Poder' },
  { max: 64, text: 'Supervivencia' }, { max: 66, text: 'Pasión' }
];

const functionTable = [
  { max: 14, text: 'Templo' }, { max: 24, text: 'Fortaleza' }, { max: 36, text: 'Lugar de residencia' },
  { max: 44, text: 'Escondite' }, { max: 52, text: 'Mina' }, { max: 55, text: 'Prisión' }, { max: 66, text: 'Tumba' }
];

const historyTable = [
  { max: 13, text: 'Asolada por una enfermedad' }, { max: 16, text: 'Sus residentes murieron en una inundación' },
  { max: 22, text: 'Sus constructores murieron de hambre' }, { max: 24, text: 'Constructores aniquilados por magia' },
  { max: 31, text: 'Se acabaron los recursos y la abandonaron' }, { max: 33, text: 'Destruidos por un extraño artefacto' },
  { max: 42, text: 'Rondan los muertos inquietos de sus constructores' }, { max: 45, text: 'Se perdió tras un conflicto interno' },
  { max: 53, text: 'Invadida por enemigos' }, { max: 56, text: 'Invadida por demonios' },
  { max: 66, text: 'Sus constructores siguen viviendo en ella' }
];

const inhabitantTable = [
  { max: 11, text: 'Hechiceros' }, { max: 13, text: 'Bandidos' }, { max: 15, text: 'Traficantes de esclavos' },
  { max: 21, text: 'Orcos' }, { max: 23, text: 'Goblins' }, { max: 25, text: 'Llorones' },
  { max: 31, text: 'Murciélagos' }, { max: 32, text: 'Arañas gigantes' }, { max: 33, text: 'Enanos' },
  { max: 34, text: 'Saurios' }, { max: 35, text: 'Ogros' }, { max: 41, text: 'No muertos' },
  { max: 42, text: 'Fantasma' }, { max: 43, text: 'Insectoides' }, { max: 44, text: 'Minotauros' },
  { max: 45, text: 'Estranguladera' }, { max: 46, text: 'Noctargos' }, { max: 51, text: 'Gusano abisal' },
  { max: 52, text: 'Calamar gigante' }, { max: 53, text: 'Serpiente marina' }, { max: 54, text: 'Sanguino' },
  { max: 55, text: 'Hidra' }, { max: 56, text: 'Mantícora' }, { max: 61, text: 'Dracosierpe' },
  { max: 62, text: 'Demonio' }, { max: 63, text: 'Dragón' }
];

const entranceTable = [
  { max: 12, text: 'Bajo un edificio' }, { max: 14, text: 'Gigantescas fauces' },
  { max: 15, text: 'Bajo un árbol nudoso' }, { max: 24, text: 'Pesada puerta de piedra' },
  { max: 25, text: 'En la pared de un precipicio' }, { max: 26, text: 'Al fondo de un agujero' },
  { max: 32, text: 'Junto a estatua ruinosa del fundador' }, { max: 34, text: 'Bajo el agua' },
  { max: 43, text: 'Una caverna' }, { max: 45, text: 'Cubierta de musgo' },
  { max: 46, text: 'Al fondo de un barranco' }, { max: 51, text: 'En una torre' },
  { max: 53, text: 'En una colina' }, { max: 56, text: 'Bajo un mausoleo' },
  { max: 62, text: 'Tras una puerta de hueso' }, { max: 65, text: 'Escalera hacia las profundidades' },
  { max: 66, text: 'Tras unas pesadas rejas de hierro trampa' }
];

const doorTable = [
  { max: 1, text: 'Abierta de par en par' }, { max: 2, text: 'Cerrada sin llave' },
  { max: 3, text: 'Sin llave, pero bloqueada' }, { max: 5, text: 'Cerrada con llave' },
  { max: 6, text: 'Cerrada con llave y trampa' }
];

const roomTypeTable = [
  { max: 2, type: 'Pasillo', contents: 0 }, { max: 4, type: 'Sala', contents: 1 },
  { max: 5, type: 'Salón', contents: 2 }, { max: 6, type: 'Escalera', contents: 0 }
];

const roomContentTable = [
  { max: 3, text: 'Nada' }, { max: 5, text: 'Criatura' }, { max: 6, text: 'Trampa' }
];

const roomDoorTable = [
  { max: 2, text: 'Una puerta' }, { max: 3, text: 'Dos puertas' },
  { max: 4, text: 'Tres puertas' }, { max: 5, text: 'Cuatro puertas' }, { max: 6, text: 'Sin salida' }
];

const roomTrapTable = [
  { max: 15, text: 'Trampilla (Caída 1D6+3m)' }, { max: 23, text: 'Lanzas (Ataque 7 dados, daño 2)' },
  { max: 31, text: 'Flechas (Ataque 5 dados, daño 1)' }, { max: 34, text: 'Veneno letal (Potencia 1D6+3)' },
  { max: 42, text: 'Gas alucinógeno (Potencia D6+4)' }, { max: 46, text: 'Peñasco (Ataque 7 dados, daño 1)' },
  { max: 54, text: 'Pinchos (Ataque 6 dados, daño 2)' }, { max: 56, text: 'Trampa de agua (Ahogamiento)' },
  { max: 62, text: 'Muros que se derrumban (Ataque 10 dados)' }, { max: 65, text: 'Fuego (Ataque 7 dados)' }
];

const quirkRoomTable = [
  { max: 11, text: 'Calor extraño' }, { max: 12, text: 'Humedad' }, { max: 13, text: 'Estanques de agua' },
  { max: 14, text: 'Olor a muerte' }, { max: 15, text: 'Setas' }, { max: 16, text: 'Flores extrañas' },
  { max: 21, text: 'Paredes con limo' }, { max: 22, text: 'Sangre seca' }, { max: 23, text: 'Pinturas murales' },
  { max: 24, text: 'Ecos extraños' }, { max: 25, text: 'Grandes grietas' }, { max: 26, text: 'Estatua' },
  { max: 31, text: 'Hornacinas' }, { max: 32, text: 'Altar' }, { max: 33, text: 'Musgo' },
  { max: 34, text: 'Sonido de goteo' }, { max: 35, text: 'Árbol nudoso' }, { max: 36, text: 'Sonido palpitante' },
  { max: 41, text: 'Cadáver momificado' }, { max: 42, text: 'Chimenea' }, { max: 43, text: 'Abismo' },
  { max: 44, text: 'Pozo' }, { max: 45, text: 'Calavera con forma extraña' }, { max: 46, text: 'Mosaico' },
  { max: 51, text: 'Criatura petrificada' }, { max: 52, text: 'Sarcófago vacío' }, { max: 53, text: 'Fresno con forma humana' },
  { max: 54, text: 'Serpientes' }, { max: 55, text: 'Insectos' }, { max: 56, text: 'Ratas' },
  { max: 61, text: 'Murciélagos' }, { max: 62, text: 'Telarañas' }, { max: 63, text: 'Trozos de esqueletos' },
  { max: 64, text: 'Advertencia escrita en sangre' }, { max: 65, text: 'Aventurero perdido' }
];

const pickTable = <T extends { max: number }>(table: readonly T[], roll: number): T => table.find(r => roll <= r.max) || table[table.length - 1];

const getMainInhabitants = () => {
  const roll = d66();
  if (roll <= 63) return pickTable(inhabitantTable, roll).text;
  if (roll <= 65) return `${pickTable(inhabitantTable, d66()).text} y ${pickTable(inhabitantTable, d66()).text}`;
  return `${pickTable(inhabitantTable, d66()).text}, ${pickTable(inhabitantTable, d66()).text} y ${pickTable(inhabitantTable, d66()).text}`;
}

const generateRoom = (index: number): DungeonRoom => {
  const rType = pickTable(roomTypeTable, d6());
  const contents: string[] = [];

  for (let i = 0; i < rType.contents; i++) {
    let content = pickTable(roomContentTable, d6()).text;
    if (content === 'Criatura') {
      content = `Criatura: ${getMainInhabitants()}`;
    } else if (content === 'Trampa') {
      let trapRoll = d66();
      if (trapRoll === 66) trapRoll = d66(); // Simplificado si saca doble trampa
      content = `Trampa: ${pickTable(roomTrapTable, trapRoll).text}`;
    }
    contents.push(content);
  }

  let treasure = null;
  // Solo en Salas y Salones y con tirada de 5 o 6 hay tesoro u objeto
  if (rType.contents > 0 && d6() >= 5) {
    const objRoll = d6();
    if (objRoll === 1) treasure = "Sarcófago (Tira 1D6: 1:Trampa, 2:Gul, 3-6:Tesoro)";
    else if (objRoll === 2) treasure = "Cofre (Tira 1D6: 1-2:Trampa, 3-6:Tesoro)";
    else if (objRoll <= 4) treasure = "Hallazgo Sencillo";
    else treasure = "Objeto Valioso";
  }

  let quirk = pickTable(quirkRoomTable, d66()).text;
  if (quirk === 'Aventurero perdido' && d66() === 66) quirk += ' (Tira otra vez)'; // Extra seguridad

  return {
    id: nanoid(),
    name: `Espacio ${index + 1}`,
    type: rType.type,
    contents: contents.length ? contents : ['Vacío'],
    treasure,
    doors: pickTable(roomDoorTable, d6()).text,
    quirk
  };
}

export const createRandomDungeon = (): Dungeon => {
  const name = `${pickTable(nounTable, d66()).text} ${pickTable(adjTable, d66()).text}`;
  const tAgeRaw = pickTable(ageTable, d66());
  const finalAgeText = tAgeRaw.text === 'Después de la Niebla de Sangre' 
    ? `Después de la Niebla de Sangre (${d6()} años)` : tAgeRaw.text;

  const tSize = pickTable(sizeTable, d6());
  let roomCount = 0;
  if (tSize.size === 'Pequeña') roomCount = d6();
  else if (tSize.size === 'Mediana') roomCount = d6() + d6() + d6();
  else if (tSize.size === 'Grande') roomCount = d6() + d6() + d6() + d6() + 10;
  else if (tSize.size === 'Enorme') roomCount = d6() + d6() + d6() + d6() + d6() + d6() + 50;

  const rooms = [];
  for (let i = 0; i < roomCount; i++) {
    rooms.push(generateRoom(i));
  }

  return {
    id: nanoid(),
    name,
    size: tSize.size,
    roomSummary: `${roomCount} salas (${tSize.dice})`,
    age: finalAgeText,
    creatorWho: pickTable(creatorWhoTable, d66()).text,
    creatorWhy: pickTable(creatorWhyTable, d66()).text,
    originalFunction: pickTable(functionTable, d66()).text,
    historyEvent: pickTable(historyTable, d66()).text,
    mainInhabitant: getMainInhabitants(),
    entrance: pickTable(entranceTable, d66()).text,
    door: pickTable(doorTable, d6()).text,
    rooms
  };
}
