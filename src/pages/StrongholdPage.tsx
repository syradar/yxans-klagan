import React from 'react';
import { useStronghold } from '../hooks/useStronghold';
import { RESOURCES_ES, HIRELINGS, FUNCTIONS } from '../data/strongholdData';

export const StrongholdPage = () => {
  const { stronghold, advanceWeek, hirePerson, firePerson, startConstruction } = useStronghold();

  return (
    <div className="p-4 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{stronghold.name}</h1>
      
      {/* 1. BARRA DE RECURSOS */}
      <div className="grid grid-cols-6 gap-2 mb-6 bg-gray-800 p-4 rounded">
        {Object.entries(stronghold.resources).map(([key, val]) => (
          <div key={key} className="text-center">
            <span className="block text-xs text-gray-400">{RESOURCES_ES[key]}</span>
            <span className="text-xl font-bold">{val}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 2. PANEL DE GESTIÓN (PERSONAL) */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Personal</h2>
          <ul>
            {HIRELINGS.map(hire => {
              const current = stronghold.hirelings.find(h => h.typeId === hire.id)?.count || 0;
              return (
                <li key={hire.id} className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
                  <div>
                    <div className="font-bold">{hire.name}</div>
                    <div className="text-xs text-gray-400">{hire.weeklyCost} Plata/sem</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => firePerson(hire.id)} className="px-2 bg-red-600 rounded">-</button>
                    <span>{current}</span>
                    <button onClick={() => hirePerson(hire.id)} className="px-2 bg-green-600 rounded">+</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 3. PANEL DE CONSTRUCCIÓN */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Edificios</h2>
          <ul>
            {FUNCTIONS.map(func => {
              const isBuilt = stronghold.builtFunctions.includes(func.id);
              const isBuilding = stronghold.constructionQueue.find(q => q.functionId === func.id);
              
              return (
                <li key={func.id} className="mb-2 border-b border-gray-700 pb-2">
                  <div className="flex justify-between">
                    <span className="font-bold">{func.name}</span>
                    {isBuilt ? (
                      <span className="text-green-400 text-sm">Construido</span>
                    ) : isBuilding ? (
                      <span className="text-yellow-400 text-sm">En obra ({Math.ceil(isBuilding.daysLeft/7)} sem)</span>
                    ) : (
                      <button 
                        onClick={() => startConstruction(func.id)}
                        className="bg-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-600"
                      >
                        Construir
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{func.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* 4. LOG Y ACCIÓN SEMANAL */}
      <div className="mt-6 bg-gray-800 p-4 rounded border border-gray-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Registro de la Fortaleza</h2>
          <button 
            onClick={advanceWeek}
            className="bg-red-700 text-white px-6 py-2 rounded font-bold hover:bg-red-600 text-lg shadow-lg"
          >
            AVANZAR SEMANA ➔
          </button>
        </div>
        <div className="bg-black p-4 h-40 overflow-y-auto text-sm font-mono text-green-400 rounded">
          {stronghold.weeklyLog.length === 0 && <p className="text-gray-500">Sin novedades...</p>}
          {stronghold.weeklyLog.map((entry, i) => (
            <p key={i}>&gt; {entry}</p>
          ))}
        </div>
      </div>

    </div>
  );
};
