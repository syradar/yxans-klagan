import { useCallback, useEffect, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Stat } from '../../components/Stat'
import { Typography } from '../../components/Typography'
import { Parchment } from '../../components/parchment'
import { ParchmentCard } from '../../components/card'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { selectMap, saveEncounterToHex } from '../../features/map/map-slice'
import { HexKey } from './map.model'
import { TerrainEncounterResult, generateTerrainEncounter } from './encounter-generator'
import { getTerrainForHex } from './terrain-data'

interface TerrainEncounterPageProps {
  hexKey: HexKey;
}

export const TerrainEncounterPage = ({ hexKey }: TerrainEncounterPageProps) => {
  const dispatch = useAppDispatch()
  const { hexes } = useAppSelector(selectMap)

  const currentHex = hexes.find(h => h.hexKey === hexKey)
  const terrainType = getTerrainForHex(hexKey);
  
  // Iniciamos el estado con el encuentro existente, o null si aún no hay
  const [encounter, setEncounter] = useState<TerrainEncounterResult | null>(currentHex?.encounterData || null)

  // Magia de 1 Clic: Si abrimos la página y NO hay encuentro, lo generamos al instante
  useEffect(() => {
    if (!currentHex?.encounterData) {
      const newEncounter = generateTerrainEncounter(terrainType)
      setEncounter(newEncounter)
      // Guardamos en Redux en segundo plano
      dispatch(saveEncounterToHex({ hexKey, encounter: newEncounter }))
    } else {
      setEncounter(currentHex.encounterData)
    }
  }, [hexKey, currentHex?.encounterData, dispatch, terrainType])

  // Función exclusiva para regenerar si no nos gusta la tirada
  const handleRegenerate = useCallback(() => {
    if (window.confirm("¿Tirar un nuevo encuentro? Sobrescribirá el actual.")) {
      const newEncounter = generateTerrainEncounter(terrainType)
      setEncounter(newEncounter)
      dispatch(saveEncounterToHex({ hexKey, encounter: newEncounter }))
    }
  }, [dispatch, hexKey, terrainType])

  // Mientras se genera (es cuestión de milisegundos), no devolvemos nada o un loader invisible
  if (!encounter) return null;

  // Renderizamos directamente el resultado del encuentro
  return (
    <div className="flex w-full flex-col gap-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center border-b-2 border-amber-900 pb-2">
        <Typography variant="h2" parchment>Terreno Salvaje ({hexKey})</Typography>
        <ParchmentButton small buttonType="danger" onPress={handleRegenerate}>
          Regenerar Viaje
        </ParchmentButton>
      </div>

      <Parchment>
        <div className="uppercase tracking-widest text-sm text-amber-900 font-bold mb-1">
          Evento en curso
        </div>
        <Typography variant="h2" parchment>{encounter.encounter ? encounter.encounter.title : "Viaje Tranquilo"}</Typography>
        
        <div className="flex flex-col gap-4 mt-4">
          <div className="mt-2">
            <ParchmentCard subtle>
              {encounter.encounter ? (
                <>
                  <div className="flex justify-between items-center border-b border-amber-900/20 pb-2 mb-2">
                    <span className="font-bold text-amber-950">Origen: {encounter.encounter.book}</span>
                    <span className="text-sm font-semibold text-amber-800">Pág. {encounter.encounter.page}</span>
                  </div>
                  {/* Aquí está el salto de línea que arreglamos para la mecánica y el texto descriptivo normal (sin italic) */}
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{encounter.encounter.description}</p>
                </>
              ) : (
                <p className="text-gray-800 text-center py-4">No hay amenazas cerca. Las aventureras disfrutan de un tramo de viaje sin incidentes.</p>
              )}
            </ParchmentCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <Stat label="🌲 Ambiente del Hexágono">{encounter.environment}</Stat>
            <Stat label="⛺ Posible Lugar de Acampada">{encounter.camp}</Stat>
          </div>
        </div>
      </Parchment>
    </div>
  )
}
