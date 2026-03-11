import { useCallback, useEffect, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Stat } from '../../components/Stat'
import { Typography } from '../../components/Typography'
import { Parchment } from '../../components/parchment'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { selectMap, saveDungeonToHex } from '../../features/map/map-slice'
import { HexKey } from '../places/map.model'
import { Dungeon, createRandomDungeon } from './dungeon-generator'
import Stack from '../../components/Stack'
import { ParchmentCard } from '../../components/card'

interface DungeonPageProps {
  hexKey: HexKey;
}

export const DungeonPage = ({ hexKey }: DungeonPageProps) => {
  const dispatch = useAppDispatch()
  const { hexes } = useAppSelector(selectMap)

  const currentHex = hexes.find(h => h.hexKey === hexKey)
  const [dungeon, setDungeon] = useState<Dungeon | undefined>(currentHex?.dungeonData)

  useEffect(() => {
    setDungeon(currentHex?.dungeonData)
  }, [hexKey, currentHex?.dungeonData])

  const generateNewDungeon = useCallback(() => {
    if (window.confirm("¿Seguro que quieres sumergirte en otra mazmorra? Perderás la actual.")) {
      const newDungeon = createRandomDungeon()
      setDungeon(newDungeon)
      dispatch(saveDungeonToHex({ hexKey, dungeon: newDungeon }))
    }
  }, [dispatch, hexKey])

  if (!dungeon) return null;

  return (
    <div className="flex w-full flex-col gap-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center border-b-2 border-amber-900 pb-2">
        <Typography variant="h2" parchment>Mazmorra de {hexKey}</Typography>
        <ParchmentButton small buttonType="danger" onPress={generateNewDungeon}>
          Regenerar Mazmorra
        </ParchmentButton>
      </div>

      <Parchment>
        <div className="uppercase tracking-widest text-sm text-amber-900 font-bold mb-1">
          Mazmorra {dungeon.size} - {dungeon.roomSummary}
        </div>
        <Typography variant="h2" parchment>{dungeon.name}</Typography>

        <Stack.Vertical>
          <div className="flex flex-wrap gap-4 mt-4">
            <Stat flexGreedy label="Entrada Principal">{dungeon.entrance}</Stat>
            <Stat flexGreedy label="La Puerta Principal">{dungeon.door}</Stat>
            <Stat flexGreedy label="Antigüedad">{dungeon.age}</Stat>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Stat flexGreedy label="Creada por...">{dungeon.creatorWho}</Stat>
            <Stat flexGreedy label="Motivo de creación">{dungeon.creatorWhy}</Stat>
            <Stat flexGreedy label="Función Original">{dungeon.originalFunction}</Stat>
          </div>

          <div className="mt-4">
            <ParchmentCard subtle>
              <section>
                <Typography variant="h3" parchment>Historia y Habitantes</Typography>
                <div className="flex flex-col gap-4 mt-2">
                  <Stat label="Acontecimiento">{dungeon.historyEvent}</Stat>
                  <Stat label="Habitantes Principales">{dungeon.mainInhabitant}</Stat>
                </div>
              </section>
            </ParchmentCard>
          </div>

          {/* LISTADO DE SALAS GENERADAS */}
          <div className="mt-6">
            <Typography variant="h3" parchment>Cartografía de Salas</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {dungeon.rooms.map((room) => (
                <div key={room.id} className="p-3 bg-[#e8dbcc] rounded border border-[#bfa58a] text-sm shadow-sm flex flex-col gap-1">
                  <div className="font-bold text-amber-950 border-b border-[#bfa58a] pb-1 mb-1">
                    {room.name}: {room.type}
                  </div>
                  <div><span className="font-bold">Salidas:</span> {room.doors}</div>
                  <div><span className="font-bold">Ambiente:</span> {room.quirk}</div>
                  <div className="text-red-900"><span className="font-bold">Contenido:</span> {room.contents.join(' / ')}</div>
                  {room.treasure && <div className="text-yellow-800"><span className="font-bold">Tesoro:</span> {room.treasure}</div>}
                </div>
              ))}
            </div>
          </div>

        </Stack.Vertical>
      </Parchment>
    </div>
  )
}
