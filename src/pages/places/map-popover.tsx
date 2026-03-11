import { FireIcon, MagnifyingGlassIcon, SparklesIcon, BookOpenIcon } from '@heroicons/react/20/solid'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Parchment } from '../../components/parchment'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { selectMap, saveVillageToHex, saveCastleToHex, saveDungeonToHex, saveEncounterToHex } from '../../features/map/map-slice'
import { Hex } from './map.model'
import { getTerrainForHex } from './terrain-data'
import { specialLocations } from './special-locations.data'
import { createRandomVillage } from '../village/village-generator'
import { createRandomCastle } from '../castle/castle-generator'
import { createRandomDungeon } from '../dungeon/dungeon-generator'
import { generateTerrainEncounter } from './encounter-generator'

export interface MapPopoverOptions {
  hex: Hex
  x: number
  y: number
  mapMinX: number
  mapMaxX: number
  mapMinY: number
  mapMaxY: number
}

export interface MapPopoverProps {
  options?: MapPopoverOptions
  onExploreChanged: (hex: Hex) => void
  onHide: () => void
}

export const MapPopover = ({
  options,
  onExploreChanged,
  onHide,
}: MapPopoverProps) => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))
  const dispatch = useAppDispatch()
  const { hexes } = useAppSelector(selectMap)
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(true)
  const [contentPending, setContentPending] = useState<boolean>(false)

  const initialPosition = -9999
  const [position, setPosition] = useState({
    x: initialPosition,
    y: initialPosition,
  })

  // Comprobar si el hexágono actual ya tiene algo generado
  const currentHexData = options ? hexes.find(h => h.hexKey === options.hex.hexKey) : null
  const hasVillage = !!currentHexData?.villageData
  const hasCastle = !!currentHexData?.castleData
  const hasDungeon = !!currentHexData?.dungeonData
  const hasEncounter = !!currentHexData?.encounterData

  const getX = useCallback(
    (xOptions?: MapPopoverOptions) => {
      if (!xOptions || !ref.current) return initialPosition
      const { x, mapMaxX, mapMinX } = xOptions
      const rect = ref.current.getBoundingClientRect()
      const popoverX = x - rect.width / 2

      if (popoverX - mapMinX < 0) return 0
      if (popoverX > mapMaxX) return mapMaxX - rect.width
      return popoverX - mapMinX
    },
    [initialPosition],
  )

  const getY = useCallback(
    (yOptions?: MapPopoverOptions) => {
      if (!yOptions || !ref.current) return initialPosition
      const { y, mapMinY } = yOptions
      const rect = ref.current.getBoundingClientRect()
      const popoverY = y - rect.height - mapMinY - 2

      if (popoverY < 0) return mapMinY
      return popoverY
    },
    [initialPosition],
  )

  useEffect(() => {
    if (options) {
      setPosition({ x: getX(options), y: getY(options) })
      setShow(true)
      setContentPending(false)
    }
  }, [getX, getY, options, ref])

  const getTerrainTranslation = (terrain: string) => {
    const terrainMap: Record<string, string> = {
      plains: 'Llanuras',
      forest: 'Bosque',
      dark_forest: 'Bosque Oscuro',
      hills: 'Colinas',
      mountains: 'Montañas',
      lake: 'Lago',
      marsh: 'Marjal',
      quagmire: 'Ciénaga',
      ruins: 'Ruinas',
      special: 'Sitio Especial',
      castle: 'Castillo',
      dungeon: 'Mazmorra',
      village: 'Pueblo'
    }
    return terrainMap[terrain] || terrain
  }

  const terrainType = options ? getTerrainForHex(options.hex.hexKey) : 'plains'
  const specialData = options && terrainType === 'special' ? specialLocations[options.hex.hexKey] : null

  const getButtonText = () => {
    switch (terrainType) {
      case 'village': return hasVillage ? 'Ver Aldea' : 'Generar Aldea'
      case 'castle': return hasCastle ? 'Ver Fortaleza' : 'Generar Fortaleza'
      case 'dungeon': return hasDungeon ? 'Ver Mazmorra' : 'Generar Mazmorra'
      case 'special': return 'Ver Escenario'
      default: return hasEncounter ? 'Ver Encuentro' : 'Tirar Encuentro'
    }
  }

  return (
    <div
      ref={ref}
      className={`absolute -z-10 flex -translate-y-12 flex-col gap-4 opacity-0 transition-all
        ${show ? 'z-20 translate-y-0 opacity-100' : ''}
      `}
      style={{
        top: position.y,
        left: position.x,
        width: '340px', 
      }}
    >
      {options && (
        <Parchment padding="sm">
          <div className="mb-3 border-b border-black/20 pb-2">
            <div className="text-2xl font-bold">Hex: {options.hex.hexKey}</div>
            <div className="text-sm font-semibold text-amber-900 uppercase tracking-widest mt-1">
              {getTerrainTranslation(terrainType)}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <ParchmentButton
              buttonType="ghost"
              onPress={() => {
                onHide()
                setShow(false)
              }}
            >
              {t('map:popover_hide')}
            </ParchmentButton>

            {options.hex.explored ? (
              <>
                <ParchmentButton
                  buttonType="danger"
                  onPress={() => {
                    setShow(false)
                    onHide()
                    onExploreChanged({ ...options.hex, explored: false })
                  }}
                >
                  <FireIcon className="size-5" />
                  {t('map:popover_forget')}
                </ParchmentButton>

                {/* BOTÓN INTELIGENTE DE ACCIÓN */}
                <div className="w-full mt-2">
                  <ParchmentButton
                    onPress={() => {
                      if (terrainType === 'village') {
                        if (!hasVillage) {
                          const newVillage = createRandomVillage()
                          dispatch(saveVillageToHex({ hexKey: options.hex.hexKey, village: newVillage }))
                        }
                        setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)
                        setShow(false); onHide()
                      } else if (terrainType === 'castle') {
                        if (!hasCastle) {
                          const newCastle = createRandomCastle()
                          dispatch(saveCastleToHex({ hexKey: options.hex.hexKey, castle: newCastle }))
                        }
                        setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)
                        setShow(false); onHide()
                      } else if (terrainType === 'dungeon') {
                        if (!hasDungeon) {
                          const newDungeon = createRandomDungeon()
                          dispatch(saveDungeonToHex({ hexKey: options.hex.hexKey, dungeon: newDungeon }))
                        }
                        setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)
                        setShow(false); onHide()
                      } else if (terrainType === 'special') {
                        setContentPending(true)
                      } else {
                        // Terrenos salvajes
                        if (!hasEncounter) {
                          const newEncounter = generateTerrainEncounter(terrainType)
                          dispatch(saveEncounterToHex({ hexKey: options.hex.hexKey, encounter: newEncounter }))
                        }
                        setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)
                        setShow(false); onHide()
                      }
                    }}
                  >
                    {terrainType === 'special' ? (
                      <BookOpenIcon className="size-5" />
                    ) : (
                      <SparklesIcon className="size-5" /> 
                    )}
                    {getButtonText()}
                  </ParchmentButton>
                </div>
              </>
            ) : (
              <>
                <ParchmentButton
                  onPress={() => {
                    setShow(false)
                    onHide()
                    onExploreChanged({ ...options.hex, explored: true })
                  }}
                >
                  <MagnifyingGlassIcon className="size-5" />
                  {t('map:popover_explore')}
                </ParchmentButton>
              </>
            )}
          </div>

          {contentPending && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {terrainType === 'special' && specialData && (
                <div className="p-4 bg-amber-50 rounded border border-amber-900/30 text-sm shadow-inner">
                  <h4 className="font-bold text-lg text-amber-950 mb-1 leading-tight">{specialData.name}</h4>
                  <div className="text-xs font-semibold text-amber-800/80 mb-3 flex flex-col gap-0.5 border-b border-amber-900/10 pb-2">
                    <span>📖 Libro: {specialData.book}</span>
                    <span>📄 Página: {specialData.page}</span>
                  </div>
                  <p className="italic text-gray-800 leading-relaxed whitespace-pre-wrap">{specialData.description}</p>
                </div>
              )}
            </div>
          )}
        </Parchment>
      )}
    </div>
  )
}
