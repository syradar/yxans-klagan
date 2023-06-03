import {
  DocumentArrowDownIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/20/solid'
import '@total-typescript/ts-reset'
import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Train } from '../../components/Stack'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { PasteData } from '../../components/paste-data'
import { downloadFile } from '../../functions/file.functions'

import { z } from 'zod'
import { hexData } from '../../data/hex.data'
import { selectSource, setSource } from '../../features/map/map-slice'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { TranslationKey } from '../../store/translations/translation.model'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { MapPopover, MapPopoverOptions } from './map-popover'
import { Hex, HexData, HexKey, isHexKey } from './map.model'
import { Polygon } from './polygon'

const MAP_STORAGE_KEY = 'map'
const FOG_OF_WAR_STORAGE_KEY = 'fogOfWar'

const MapImage = lazy(() => import('./map'))

export const MapPage = () => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))

  const parchmentRef = useRef<HTMLDivElement>(null)

  const hexasFromStorage = localStorage.getItem(MAP_STORAGE_KEY) ?? undefined

  const constructHexas = (hexasFromStorage?: string): Hex[] => {
    if (!hexasFromStorage) {
      return initialHexas
    }
    const hexStorages = hexStorageSchema.safeParse(JSON.parse(hexasFromStorage))

    if (!hexStorages.success) {
      return initialHexas
    }

    return initialHexas.map((hex) => {
      return {
        ...hex,
        ...(hexStorages.data.hexes.find((h) => h.hexKey === hex.hexKey) ?? {}),
      }
    })
  }

  const [pasteError, setPasteError] = useState<
    TranslationKey<'map'> | undefined
  >(undefined)

  const fogOfWarFromStorage =
    (localStorage.getItem(FOG_OF_WAR_STORAGE_KEY) === 'true' ? true : false) ??
    false
  const [fogOfWar, setFogOfWar] = useState<boolean>(fogOfWarFromStorage)

  const atLeastOneExploredHex = (hexas: Hex[]): boolean =>
    hexas.filter((h) => h.explored).length > 0

  const [hexas, setHexas] = useState(constructHexas(hexasFromStorage))
  const [hasExploredHexas, setHasExploredHexas] = useState<boolean>(
    atLeastOneExploredHex(hexas),
  )

  const [selectedHex, setSelectedHex] = useState<
    { elem: EventTarget & Element; hex: Hex } | undefined
  >(undefined)

  const [mapPopover, setMapPopover] = useState<MapPopoverOptions | undefined>(
    undefined,
  )

  const getRect = (
    hexTarget: EventTarget & Element,
    parchmentElem: HTMLDivElement,
  ) => ({
    rect: hexTarget.getBoundingClientRect(),
    parchmentRect: parchmentElem.getBoundingClientRect(),
  })
  const initialTooltip = {
    text: '',
    x: 0,
    y: 0,
    hexX: 0,
    hexY: 0,
    width: 0,
    height: 0,
  }
  const [tooltip, setTooltip] = useState<{
    x: number
    y: number
    hexX: number
    hexY: number
    text: string
    width: number
    height: number
  }>(initialTooltip)

  const handleTooltip = (e: React.MouseEvent, hex: Hex) => {
    if (parchmentRef.current) {
      const { rect, parchmentRect } = getRect(
        e.currentTarget,
        parchmentRef.current,
      )

      setTooltip({
        x: rect.left - parchmentRect.left,
        y: rect.top - parchmentRect.top,
        hexX: rect.left,
        hexY: rect.top,
        text: hex.hexKey,
        width: rect.width,
        height: rect.height,
      })
    }
  }

  const handleSelectedHex = (
    selected: { elem: EventTarget & Element; hex: Hex } | undefined,
  ) => {
    // Remove tooltip when hiding popover
    if (!selected) {
      setTooltip(initialTooltip)
    }

    // Remove the current selected
    selectedHex?.elem?.classList.remove('hex-selected')
    // Add the current selected
    selected?.elem.classList.add('hex-selected')
    setSelectedHex(selected)
  }

  const handleMouseOver = (e: React.MouseEvent, hex: Hex) => {
    if (!selectedHex) {
      handleTooltip(e, hex)
    }
  }

  const handleExploration = (hex: Hex) => {
    if (!hex.explored) {
      setHasExploredHexas(true)
    }

    setHexas(
      hexas.map((h) => {
        if (h.hexKey === hex.hexKey) {
          h.explored = hex.explored ?? false
        }

        return h
      }),
    )
  }

  const handleHexClick = (e: React.MouseEvent, hex: Hex) => {
    if (parchmentRef.current) {
      handleSelectedHex({ elem: e.currentTarget, hex })
      handleTooltip(e, hex)

      const { rect, parchmentRect } = getRect(
        e.currentTarget,
        parchmentRef.current,
      )

      setMapPopover({
        hex,
        x: rect.left,
        y: rect.top,
        mapMinX: parchmentRect.x,
        mapMaxX: parchmentRect.width,
        mapMinY: parchmentRect.y,
        mapMaxY: parchmentRect.height,
      })
    }
  }

  const handleFileDownload = () => {
    const hexStorages: HexStorage = hexas
      .filter((h) => h.explored)
      .map(({ hexKey, explored }) => ({
        hexKey,
        explored,
      }))

    downloadFile({ hexes: hexStorages, fogOfWar }, 'map')
  }

  const handlePasteMapData = (s: string) => {
    setPasteError(undefined)
    let data: HexStorageData | undefined

    try {
      data = hexStorageSchema.parse(JSON.parse(s))
    } catch (error) {
      if (error instanceof Error) {
        setPasteError(getPasteErrorLabel(error))
      }

      return
    }

    setHexas(
      initialHexas.map((hex) => {
        return {
          ...hex,
          ...(data && (data.hexes.find((h) => h.hexKey === hex.hexKey) ?? {})),
        }
      }),
    )
    setFogOfWar(data.fogOfWar)
  }

  const getPasteErrorLabel = (e: Error): TranslationKey<'map'> => {
    switch (e.message) {
      case 'InvalidJson':
        return 'map:InvalidJson'
      case 'NotObject':
        return 'map:NotObject'
      case 'NoHexesProp':
        return 'map:NoHexesProp'
      case 'HexesNotArray':
        return 'map:HexesNotArray'
      case 'InvalidHexData':
        return 'map:InvalidHexData'
      default:
        return 'map:GeneralPasteError'
    }
  }

  useEffect(() => {
    const hexStorages: HexStorageData = {
      hexes: hexas.map(({ hexKey, explored }) => ({
        hexKey,
        explored,
      })),
      fogOfWar,
    }

    localStorage.setItem(MAP_STORAGE_KEY, JSON.stringify(hexStorages))

    setHasExploredHexas(atLeastOneExploredHex(hexas))
  }, [hexas, fogOfWar])

  useEffect(() => {
    localStorage.setItem(FOG_OF_WAR_STORAGE_KEY, JSON.stringify(fogOfWar))
  }, [fogOfWar])

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('map:Title')}</PageHeader>

      <Train>
        <ParchmentButton
          buttonType="ghost"
          onPress={() => setFogOfWar(!fogOfWar)}
        >
          {fogOfWar ? (
            <EyeIcon className="h-5 w-5" />
          ) : (
            <EyeSlashIcon className="h-5 w-5" />
          )}
          {t(fogOfWar ? 'map:FogOfWar_On' : 'map:FogOfWar_Off')}
        </ParchmentButton>
        <ParchmentButton
          isDisabled={!hasExploredHexas}
          buttonType="ghost"
          onPress={() => handleFileDownload()}
        >
          <DocumentArrowDownIcon className="h-5 w-5" />
          {t('map:DownloadMapData')}
        </ParchmentButton>
        <PasteData
          onFocusTextArea={() => setPasteError(undefined)}
          label={t('map:PasteMapData')}
          onData={handlePasteMapData}
        ></PasteData>
      </Train>

      <div>
        <Parchment>
          <div ref={parchmentRef} className="relative">
            <div
              className="pointer-events-none absolute z-10 flex select-none items-center justify-center text-center text-[0.9vw] font-bold leading-none text-white"
              style={{
                textShadow: '0px 0px 1px black',
                top: numToPx(tooltip.y),
                left: numToPx(tooltip.x),
                width: numToPx(tooltip.width),
                height: numToPx(tooltip.height),
              }}
            >
              {tooltip.text}
            </div>
            <MapPopover
              options={mapPopover}
              onExploreChanged={(hex) => handleExploration(hex)}
              onHide={() => handleSelectedHex(undefined)}
            ></MapPopover>
            <Suspense fallback={'Laddar...'}>
              <MapImage fogOfWar={fogOfWar}>
                {hexas.map((hex) => (
                  <Polygon
                    key={hex.hexKey}
                    hex={hex}
                    onMouseOver={(e) => handleMouseOver(e, hex)}
                    onClick={(e) => handleHexClick(e, hex)}
                  />
                ))}
              </MapImage>
            </Suspense>
          </div>
        </Parchment>
      </div>

      <div>
        {pasteError ? (
          <div className="flex justify-end bg-red-500 p-2 font-bold text-white">
            {t(pasteError)}
          </div>
        ) : null}
      </div>
    </div>
  )
}

const numToPx = (num: number): string => `${num}px`

const hexSchema = z.array(
  z.object({
    hexKey: z.string().refine(isHexKey, {
      message: 'Hex key is not valid',
    }),
    explored: z.boolean(),
  }),
)

const hexStorageSchema = z.object({
  hexes: hexSchema,
  fogOfWar: z.boolean(),
})

export type HexStorage = z.infer<typeof hexSchema>
export type HexStorageData = z.infer<typeof hexStorageSchema>

const createInitialHexas = (data: HexData): Hex[] => {
  return (Object.entries(data) as [HexKey, string][]).map(
    ([hexKey, points]) => ({
      hexKey,
      points,
      explored: false,
    }),
  )
}

export const initialHexas = createInitialHexas(hexData)

export default MapPage
