export type ResourceType = 'food' | 'water' | 'silver' | 'wood' | 'stone' | 'iron';

// Definición de un Trabajador (Datos estáticos)
export interface HirelingType {
  id: string;
  name: string; // Ej: "Guardia"
  weeklyCost: number; // Coste en PLATA por SEMANA
  description: string;
}

// Definición de una Función/Edificio (Datos estáticos)
export interface StrongholdFunctionType {
  id: string;
  name: string; // Ej: "Murallas"
  cost: {
    wood?: number;
    stone?: number;
    iron?: number;
    silver?: number;
    time: number; // Días base de construcción (se dividirán por 7 para semanas)
  };
  requirements?: string[];
  description: string;
}

// ESTADO de la Fortaleza (Lo que se guarda en la partida)
export interface StrongholdState {
  name: string;
  reputation: number;
  defenseRating: number;
  
  // Inventario (Cantidades)
  resources: Record<ResourceType, number>;
  
  // Personal contratado (ID y Cantidad)
  hirelings: {
    typeId: string;
    count: number;
  }[];

  // Edificios
  builtFunctions: string[]; // IDs de lo ya construido
  constructionQueue: {
    functionId: string;
    daysLeft: number;
  }[];

  // Registro de eventos (Log)
  weeklyLog: string[]; 
}
