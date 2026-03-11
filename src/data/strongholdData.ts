import { HirelingType, StrongholdFunctionType } from '../models/stronghold.model';

export const RESOURCES_ES: Record<string, string> = {
  food: 'Comida',
  water: 'Agua',
  silver: 'Plata',
  wood: 'Madera',
  stone: 'Piedra',
  iron: 'Hierro'
};

export const HIRELINGS: HirelingType[] = [
  { 
    id: 'guard', 
    name: 'Guardia', 
    weeklyCost: 2, // Aprox 14-20 cobres/semana -> ~2 Plata
    description: 'Aumenta la Defensa de la fortaleza.' 
  },
  { 
    id: 'handyman', 
    name: 'Obrero', 
    weeklyCost: 1, 
    description: 'Necesario para proyectos de construcción.' 
  },
  { 
    id: 'baker', 
    name: 'Panadero', 
    weeklyCost: 2, 
    description: 'Convierte grano en Comida eficientemente.' 
  },
  { 
    id: 'hunter', 
    name: 'Cazador', 
    weeklyCost: 2, 
    description: 'Genera Comida mediante la caza.' 
  }
];

export const FUNCTIONS: StrongholdFunctionType[] = [
  { 
    id: 'ramparts', 
    name: 'Murallas', 
    description: 'Defensa básica contra asaltos.',
    cost: { stone: 50, time: 28 } // 28 días
  },
  { 
    id: 'forge', 
    name: 'Forja', 
    description: 'Permite fabricar objetos de metal y contratar Herreros.',
    cost: { stone: 20, iron: 5, wood: 10, time: 7 } 
  },
  { 
    id: 'mill', 
    name: 'Molino', 
    description: 'Procesa grano. Requiere un Panadero.',
    cost: { wood: 20, stone: 10, time: 14 } 
  },
  { 
    id: 'library', 
    name: 'Biblioteca', 
    description: 'Otorga ventajas en tiradas de Saber.',
    cost: { wood: 30, silver: 50, time: 21 } 
  },
  { 
    id: 'gallows', 
    name: 'Patíbulo', 
    description: 'Aumenta el Miedo y el respeto local.',
    cost: { wood: 10, silver: 10, time: 3 } 
  }
];
