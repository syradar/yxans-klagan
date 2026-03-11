import { useState } from 'react';
import { StrongholdState, ResourceType } from '../models/stronghold.model';
import { HIRELINGS, FUNCTIONS } from '../data/strongholdData';

const INITIAL_STATE: StrongholdState = {
  name: 'Bastión del Cuervo',
  reputation: 5,
  defenseRating: 0,
  resources: { food: 50, water: 50, silver: 100, wood: 20, stone: 20, iron: 5 },
  hirelings: [],
  builtFunctions: [],
  constructionQueue: [],
  weeklyLog: ['La fortaleza ha sido fundada.']
};

export const useStronghold = (initialData: StrongholdState = INITIAL_STATE) => {
  const [stronghold, setStronghold] = useState<StrongholdState>(initialData);

  // --- ACCIÓN PRINCIPAL: PASAR SEMANA ---
  const advanceWeek = () => {
    const log: string[] = [];
    const newState = { ...stronghold };
    const resources = { ...newState.resources };

    // 1. CALCULAR SALARIOS (Coste Semanal ya definido en datos)
    let totalSalary = 0;
    stronghold.hirelings.forEach(h => {
      const type = HIRELINGS.find(t => t.id === h.typeId);
      if (type) {
        totalSalary += type.weeklyCost * h.count;
      }
    });

    if (resources.silver >= totalSalary) {
      resources.silver -= totalSalary;
      if (totalSalary > 0) log.push(`Pagado ${totalSalary} Plata en salarios.`);
    } else {
      log.push(`¡PELIGRO! Faltan ${totalSalary - resources.silver} Plata para salarios. La lealtad baja.`);
      resources.silver = 0; // Se quedan a cero
      // Aquí podrías reducir reputación o perder empleados
    }

    // 2. CONSUMO DE COMIDA (1 ración/persona/día * 7 días)
    const population = stronghold.hirelings.reduce((sum, h) => sum + h.count, 0) + 4; // +4 PJs
    const foodNeeded = population * 7;

    if (resources.food >= foodNeeded) {
      resources.food -= foodNeeded;
      log.push(`Consumidas ${foodNeeded} raciones de comida.`);
    } else {
      log.push(`¡HAMBRUNA! Faltaron ${foodNeeded - resources.food} raciones. Riesgo de muerte o deserción.`);
      resources.food = 0;
    }

    // 3. CONSTRUCCIÓN (Avanzar 7 días)
    const newQueue = newState.constructionQueue.map(item => ({
      ...item,
      daysLeft: item.daysLeft - 7
    }));

    // Separar terminados de pendientes
    const finished = newQueue.filter(i => i.daysLeft <= 0);
    const ongoing = newQueue.filter(i => i.daysLeft > 0);

    finished.forEach(item => {
      const funcDef = FUNCTIONS.find(f => f.id === item.functionId);
      newState.builtFunctions.push(item.functionId);
      log.push(`¡Construcción completada: ${funcDef?.name}!`);
    });

    newState.constructionQueue = ongoing;

    // 4. EVENTO ALEATORIO (1D6 por Reputación, según Manual Directora)
    const rollEvent = () => {
      // Simulación simple: Tira 1d6. Si sale 1, evento pacífico. Si sale 6, problemas.
      const die = Math.ceil(Math.random() * 6);
      if (die === 6) log.push("¡EVENTO! Un monstruo merodea cerca de las murallas.");
      if (die === 1) log.push("¡EVENTO! Un mercader ambulante visita la fortaleza.");
    };
    rollEvent();

    // Actualizar estado
    newState.resources = resources;
    newState.weeklyLog = log;
    setStronghold(newState);
  };

  // --- MÉTODOS DE GESTIÓN ---
  
  const hirePerson = (id: string) => {
    const newState = { ...stronghold };
    const existing = newState.hirelings.find(h => h.typeId === id);
    if (existing) {
      existing.count++;
    } else {
      newState.hirelings.push({ typeId: id, count: 1 });
    }
    setStronghold(newState);
  };

  const firePerson = (id: string) => {
    const newState = { ...stronghold };
    const existingIndex = newState.hirelings.findIndex(h => h.typeId === id);
    if (existingIndex !== -1) {
      newState.hirelings[existingIndex].count--;
      if (newState.hirelings[existingIndex].count <= 0) {
        newState.hirelings.splice(existingIndex, 1);
      }
      setStronghold(newState);
    }
  };

  const startConstruction = (functionId: string) => {
    const func = FUNCTIONS.find(f => f.id === functionId);
    if (!func) return;
    
    // Verificar recursos
    const res = { ...stronghold.resources };
    const cost = func.cost;
    
    if (
      (cost.wood && res.wood < cost.wood) ||
      (cost.stone && res.stone < cost.stone) ||
      (cost.iron && res.iron < cost.iron) ||
      (cost.silver && res.silver < cost.silver)
    ) {
      alert("No hay recursos suficientes");
      return;
    }

    // Pagar recursos
    if (cost.wood) res.wood -= cost.wood;
    if (cost.stone) res.stone -= cost.stone;
    if (cost.iron) res.iron -= cost.iron;
    if (cost.silver) res.silver -= cost.silver;

    // Añadir a cola
    const newState = { ...stronghold, resources: res };
    newState.constructionQueue.push({ functionId, daysLeft: cost.time });
    setStronghold(newState);
  };

  return { stronghold, advanceWeek, hirePerson, firePerson, startConstruction };
};
