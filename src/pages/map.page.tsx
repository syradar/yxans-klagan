import { has } from 'rambda'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { Button } from '../components/Button'
import { Map } from '../components/map'
import { MapPopover, MapPopoverOptions } from '../components/map-popover'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { PasteData } from '../components/paste-data'
import { Polygon } from '../components/polygon'
import { downloadFile } from '../functions/file.functions'
import { isNullish, isString } from '../functions/utils.functions'
import { Hex, HexStorage, initialHexas, isHexKey } from '../models/map.model'

const MAP_STORAGE_KEY = 'map'
const FOG_OF_WAR_STORAGE_KEY = 'fogOfWar'

export const MapPage = () => {
  const { t } = useTranslation('map')

  const hexasFromStorage = localStorage.getItem(MAP_STORAGE_KEY) ?? undefined

  const constructHexas = (hexasFromStorage?: string): Hex[] => {
    if (!hexasFromStorage) {
      return initialHexas
    }

    const hexStorages: HexStorage[] = JSON.parse(hexasFromStorage)

    return initialHexas.map((hex) => {
      return {
        ...hex,
        ...(hexStorages.find((h) => h.hexKey === hex.hexKey) ?? {}),
      }
    })
  }
  const [pasteError, setPasteError] = useState<string | undefined>(undefined)

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
  const parchmentRef = useRef<SVGSVGElement>(null)

  const getRect = (
    hexTarget: EventTarget & Element,
    parchmentElem: SVGSVGElement,
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
    const hexStorages: HexStorage[] = hexas
      .filter((h) => h.explored)
      .map(({ hexKey, explored }) => ({
        hexKey,
        explored,
      }))

    downloadFile({ hexes: hexStorages, fogOfWar }, 'map')
  }

  const handlePasteMapData = (s: string) => {
    setPasteError(undefined)
    let data: { hexes: HexStorage[]; fogOfWar: boolean }

    try {
      data = validateData(s)
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
          ...(data.hexes.find((h) => h.hexKey === hex.hexKey) ?? {}),
        }
      }),
    )
    setFogOfWar(data.fogOfWar)
  }

  const parseJson = (
    s: string,
  ): { hexes: HexStorage[]; fogOfWar: boolean } | undefined => {
    try {
      return JSON.parse(s)
    } catch (e) {
      return undefined
    }
  }

  const getPasteErrorLabel = (e: Error): string => {
    switch (e.message) {
      case 'InvalidJson':
        return 'InvalidJson'
      case 'NotObject':
        return 'NotObject'
      case 'NoHexesProp':
        return 'NoHexesProp'
      case 'HexesNotArray':
        return 'HexesNotArray'
      case 'InvalidHexData':
        return 'InvalidHexData'
      default:
        return 'GeneralPasteError'
    }
  }

  const validateData = (
    s: string,
  ): { hexes: HexStorage[]; fogOfWar: boolean } => {
    const parsedMapData = parseJson(s)

    if (isNullish(parsedMapData)) {
      throw new Error('InvalidJson')
    }

    if (typeof parsedMapData !== 'object') {
      throw new Error('NotObject')
    }

    const hasHexesProp = has('hexes', parsedMapData)
    if (!hasHexesProp) {
      throw new Error('NoHexesProp')
    }

    const isHexesArray = Array.isArray(parsedMapData.hexes)
    if (!isHexesArray) {
      throw new Error('HexesNotArray')
    }

    const isValidHexData = parsedMapData.hexes.every((h: HexStorage) => {
      const hasKey = has('hexKey', h)
      const hasExplored = has('explored', h)

      if (!hasKey || !hasExplored) {
        return false
      }

      const validKey = isString(h.hexKey) && isHexKey(h.hexKey)
      if (!validKey) {
        return false
      }

      if (typeof h.explored !== 'boolean') {
        return false
      }

      return true
    })

    if (!isValidHexData) {
      throw new Error('InvalidHexData')
    }

    return { hexes: parsedMapData.hexes, fogOfWar: parsedMapData.fogOfWar }
  }

  useEffect(() => {
    const hexStorages: HexStorage[] = hexas.map(({ hexKey, explored }) => ({
      hexKey,
      explored,
    }))

    localStorage.setItem(MAP_STORAGE_KEY, JSON.stringify(hexStorages))

    setHasExploredHexas(atLeastOneExploredHex(hexas))
  }, [hexas])

  useEffect(() => {
    localStorage.setItem(FOG_OF_WAR_STORAGE_KEY, JSON.stringify(fogOfWar))
  }, [fogOfWar])

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>{t('Title')}</PageHeader>

      <div>
        <Parchment deps={[tooltip]} ref={parchmentRef}>
          <div
            tw="absolute z-10 text-[0.9vw] flex items-center justify-center text-center leading-none text-white select-none font-bold text-shadow[0px 0px 1px black] pointer-events-none"
            style={{
              top: tooltip.y,
              left: tooltip.x,
              width: tooltip.width,
              height: tooltip.height,
            }}
          >
            {tooltip.text}
          </div>
          <MapPopover
            options={mapPopover}
            onExploreChanged={(hex) => handleExploration(hex)}
            onHide={() => handleSelectedHex(undefined)}
          ></MapPopover>
          <Map fogOfWar={fogOfWar}>
            {hexas.map((hex, index) => (
              <Polygon
                key={index}
                hex={hex}
                onMouseOver={(e) => handleMouseOver(e, hex)}
                onClick={(e) => handleHexClick(e, hex)}
              />
            ))}
          </Map>
        </Parchment>
      </div>

      <div>
        {pasteError && (
          <div tw="bg-red-500 text-white font-bold p-2 flex justify-end">
            {t(pasteError)}
          </div>
        )}
        <div tw="bg-gray-200 p-2 flex justify-end gap-2">
          <Button isSmall onClick={() => setFogOfWar(!fogOfWar)}>
            {t('FogOfWar', { context: fogOfWar ? 'On' : 'Off' })}
          </Button>
          <Button
            isSmall
            variant={!hasExploredHexas ? 'disabled' : undefined}
            disabled={!hasExploredHexas}
            onClick={() => handleFileDownload()}
          >
            {t('DownloadMapData')}
          </Button>
          <PasteData
            onFocusTextArea={() => setPasteError(undefined)}
            label={t('PasteMapData')}
            onData={handlePasteMapData}
          ></PasteData>
        </div>
      </div>
    </div>
  )
}
