import { useCallback, useEffect, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Stat } from '../../components/Stat'
import { Typography } from '../../components/Typography'
import { Parchment } from '../../components/parchment'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { selectMap, saveCastleToHex } from '../../features/map/map-slice'
import { HexKey } from '../places/map.model'
import { Castle, createRandomCastle } from './castle-generator'
import Stack from '../../components/Stack'
import { ParchmentCard } from '../../components/card'

interface CastlePageProps {
  hexKey: HexKey;
}

export const CastlePage = ({ hexKey }: CastlePageProps) => {
  const dispatch = useAppDispatch()
  const { hexes } = useAppSelector(selectMap)

  const currentHex = hexes.find(h => h.hexKey === hexKey)
  const [castle, setCastle] = useState<Castle | undefined>(currentHex?.castleData)

  useEffect(() => {
    setCastle(currentHex?.castleData)
  }, [hexKey, currentHex?.castleData])

  const generateNewCastle = useCallback(() => {
    if (window.confirm("¿Seguro que quieres generar un nuevo castillo? Se sobrescribirá el actual.")) {
      const newCastle = createRandomCastle()
      setCastle(newCastle)
      dispatch(saveCastleToHex({ hexKey, castle: newCastle }))
    }
  }, [dispatch, hexKey])

  if (!castle) return null;

  return (
    <div className="flex w-full flex-col gap-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center border-b-2 border-amber-900 pb-2">
        <Typography variant="h2" parchment>Castillo de {hexKey}</Typography>
        <ParchmentButton small buttonType="danger" onPress={generateNewCastle}>
          Regenerar Fortaleza
        </ParchmentButton>
      </div>

      <Parchment>
        <div className="uppercase tracking-widest text-sm text-amber-900 font-bold mb-1">
          {castle.type} {castle.size} (Guarnición original: {castle.garrison})
        </div>
        <Typography variant="h2" parchment>{castle.name}</Typography>

        <Stack.Vertical>
          <div className="flex flex-wrap gap-4 mt-4">
            <Stat flexGreedy label="Estado">{castle.state}</Stat>
            <Stat flexGreedy label="Antigüedad">{castle.age}</Stat>
            <Stat flexGreedy label="Función Original">{castle.originalFunction}</Stat>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Stat flexGreedy label="Fundador">{castle.founder}</Stat>
            <Stat flexGreedy label="Famoso por su...">{castle.fame}</Stat>
            <Stat flexGreedy label="Peculiaridad">{castle.quirk}</Stat>
          </div>

          <div className="mt-4">
            <ParchmentCard subtle>
              <section>
                <Typography variant="h3" parchment>Historia y Habitantes</Typography>
                <div className="flex flex-col gap-4 mt-2">
                  <Stat label="Evento Histórico">{castle.historyEvent}</Stat>
                  <Stat label="¿Quién vive aquí ahora?">{castle.inhabitants}</Stat>
                </div>
              </section>
            </ParchmentCard>
          </div>
        </Stack.Vertical>
      </Parchment>
    </div>
  )
}
