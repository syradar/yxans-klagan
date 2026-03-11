import { HexKey } from './map.model'

export interface SpecialLocation {
  name: string
  book: string
  page: string 
  description: string
}

export const specialLocations: Partial<Record<HexKey, SpecialLocation>> = {
  'Ah21': {
    name: 'Pico de Ámbar',
    book: 'La Purga del Cuervo',
    page: '91',
    description: 'Antiguo observatorio élfico en lo alto de la montaña. Ahora es una fortaleza tomada por una facción que custodia uno de los fragmentos de la corona Stanengist.'
  },
  'O28': {
    name: 'Las Minas de Tejepiedra',
    book: 'La Purga del Cuervo',
    page: '141',
    description: 'Antigua mina enana y próspero asentamiento, ahora sumida en un conflicto tras la llegada de un nigromante y su legión de no-muertos.'
  },
  'Al11': {
    name: 'Pelagia',
    book: 'Manual de la Directora',
    page: '133',
    description: 'Bajo la superficie del agua yacen las ruinas de una mítica ciudad de cristal construida en los tiempos antiguos. Se dice que un monstruo milenario acecha en sus profundidades.'
  },
  'B39': {
    name: 'Paso de Puertoumbrío',
    book: 'Manual de la Directora',
    page: '23',
    description: 'Un traicionero paso de montaña conocido por ser una trampa mortal, infestado de peligros, criaturas de la niebla y asaltantes despiadados.'
  },
  'Ab27': {
    name: 'Pueblo Hueco (El Hueco / Håga)',
    book: 'Manual de la Directora',
    page: '185',
    description: 'Una inquietante aldea construida en los bordes y el interior de un inmenso foso de sacrificios. Está secretamente gobernada por el oscuro legado de Zygofer.'
  },
  'Y8': {
    name: 'El Torreón Argénteo de Las Maravillas',
    book: 'El Capitel de Quetzel',
    page: '7',
    description: 'Un inmenso capitel plateado que emerge de la tierra y parece no tener entrada visible. Su interior alberga horrores y maravillas de otra época.'
  },
  'E38': { 
    name: 'Vond', 
    book: 'La Purga del Cuervo', 
    page: '180', 
    description: 'La fortaleza inexpugnable del Rey Demonio Zygofer y sus seguidores más temibles. Un nexo de magia oscura y el final del camino para muchos aventureros.' 
  },
  'Z1': { 
    name: 'La Niebla Calma', 
    book: 'Lore General', 
    page: '-', 
    description: 'El sagrado y oculto bosque donde mora la esquiva facción élfica de la Niebla Calma. Un lugar donde el tiempo fluye de manera extraña y los intrusos rara vez regresan.' 
  },
  'G48': { 
    name: 'El Sello de Hierro', 
    book: 'Manual de la Directora', 
    page: '19', 
    description: 'Una inmensa puerta de hierro incrustada en la roca, cubierta de runas desgastadas. Nadie sabe con certeza qué horrores antiguos mantiene encerrados... o si el sello está cediendo.' 
  },
  'B3': { 
    name: 'Belderand', 
    book: 'Manual de la Directora', 
    page: '15', 
    description: 'Una imponente fortaleza que en su día fue bastión de los humanos Alderlandeses. Ahora sus ruinas son disputadas por diferentes facciones de las Tierras Prohibidas.' 
  },
  'I6': { 
    name: 'Los Caminos Sinuosos', 
    book: 'Lore General', 
    page: '-', 
    description: 'Una red de cañones y senderos engañosos donde la brújula y los instintos fallan. Los viajeros aseguran escuchar voces que los llaman desde la piedra.' 
  },
  'P47': { 
    name: 'Roca de los Vientos', 
    book: 'Lore General', 
    page: '-', 
    description: 'Un monolito natural barrido constantemente por vendavales antinaturales. Se rumorea que las tribus locales realizan ofrendas al pie de la roca para apaciguar a las tormentas.' 
  },
  'G32': { 
    name: 'El Valle de los Muertos', 
    book: 'Lore General', 
    page: '-', 
    description: 'Un valle cubierto por una niebla perpetua donde los camposantos de antiguas batallas han sido profanados. Los Caminantes del Óxido son vistos a menudo en sus lindes.' 
  },
  'N11': { 
    name: 'Muelehueso (Grindbone)', 
    book: 'Manual de la Directora', 
    page: '17', 
    description: 'Un despiadado y brutal asentamiento de esclavistas. La violencia es la única ley, y los prisioneros son forzados a trabajar hasta la muerte o vendidos al mejor postor.' 
  },
  'F15': { 
    name: 'Pozo del Cuervo', 
    book: 'Lore General', 
    page: '-', 
    description: 'Un abismo circular en la tierra del que brotan bandadas de cuervos negros cada amanecer. Algunos dicen que es un conducto directo al inframundo.' 
  },
  'G20': { 
    name: 'Ojo de la Rosa', 
    book: 'Lore General', 
    page: '-', 
    description: 'Una extraña formación geológica en el centro de un bosque denso. Las plantas de los alrededores tienen tonalidades antinaturales y la magia salvaje fluye libremente.' 
  },
  'E8': { 
    name: 'Jardín de Piedra', 
    book: 'Manual de la Directora', 
    page: '24', 
    description: 'Un tétrico bosque de estatuas increíblemente realistas. La leyenda dice que no fueron esculpidas, sino que son el resultado de la mirada de un basilisco o de magia petrificadora.' 
  },
  'I32': { 
    name: 'La Casa del Sajador', 
    book: 'El Capitel de Quetzel', 
    page: '45', 
    description: 'El terrorífico hogar de un sanador que ha perdido la cabeza, realizando experimentos atroces y combinando carne y alquimia en busca de la "perfección".' 
  },
  'S48': { 
    name: 'El Pico del Hambriento', 
    book: 'Escenarios de Aventuras', 
    page: '12', 
    description: 'Una cumbre escarpada que parece devorar todo lo que se acerca. Hogar de bestias letales y de una tribu de humanos degenerados impulsados por un hambre insaciable.' 
  },
  'Aa36': { 
    name: 'El Bosque de las Brujas', 
    book: 'El Capitel de Quetzel', 
    page: '23', 
    description: 'Un soto antiguo y retorcido donde los pactos de sangre y la brujería ancestral todavía dictan la ley. Los árboles parecen tener ojos y los caminos cambian a voluntad.' 
  },
  'Ae44': { 
    name: 'Paso de la Arboleda', 
    book: 'Lore General', 
    page: '-', 
    description: 'Un desfiladero flanqueado por árboles petrificados inmensos. Se considera un lugar sagrado para los druidas caídos, y profanarlo atrae la ira de la propia naturaleza.' 
  }
}
