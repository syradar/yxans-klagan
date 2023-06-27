import {
  DocumentArrowDownIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/20/solid'
import '@total-typescript/ts-reset'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ZodError } from 'zod'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Train } from '../../components/Stack'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { PasteData } from '../../components/paste-data'
import {
  MapState,
  handlePasteSuccess,
  mapStateSchema,
  oldHexStorageSchema,
  selectFogOfWar,
  selectMap,
  selectMapSerializable,
  selectSource,
  setSelectedHex,
  setSource,
  toggleFogOfWar,
  unsetSelectedHex,
  updateHex,
} from '../../features/map/map-slice'
import { downloadFile } from '../../functions/file.functions'
import { safeJSONParse } from '../../store/persist/json-parsing'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { TranslationKey } from '../../store/translations/translation.model'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import Map from './map'
import { MapPopover, MapPopoverOptions } from './map-popover'
import { Hex } from './map.model'
import { Polygon } from './polygon'

export const MapPage = () => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))
  const source = useAppSelector(selectSource)
  const fogOfWar = useAppSelector(selectFogOfWar)
  const { hasExploredHexes, hexes, selectedHex } = useAppSelector(selectMap)
  const serializableMap = useAppSelector(selectMapSerializable)
  const dispatch = useAppDispatch()

  const parchmentRef = useRef<HTMLDivElement>(null)

  const [pasteError, setPasteError] = useState<
    TranslationKey<'map'> | undefined
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
  const initialTooltip = useMemo(
    () => ({
      text: '',
      x: 0,
      y: 0,
      hexX: 0,
      hexY: 0,
      width: 0,
      height: 0,
    }),
    [],
  )

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

  useEffect(() => {
    if (selectedHex.none) {
      setTooltip(initialTooltip)
    }
  }, [selectedHex, initialTooltip])

  const handleMouseOver = (e: React.MouseEvent, hex: Hex) => {
    if (!selectedHex) {
      handleTooltip(e, hex)
    }
  }

  const handleHexClick = (e: React.MouseEvent, hex: Hex) => {
    if (parchmentRef.current) {
      dispatch(setSelectedHex(hex.hexKey))
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
    downloadFile(serializableMap, 'map')
  }

  const handlePasteMapData = (s: string) => {
    setPasteError(undefined)
    const oldResult = safeJSONParse(s, oldHexStorageSchema)

    if (oldResult.ok) {
      const data = oldResult.safeUnwrap()
      const ms: MapState = {
        version: 2,
        fogOfWar: data.fogOfWar,
        source: 'ravland',
        maps: {
          ravland: {
            hexes: data.hexes,
            selectedHex: undefined,
            hasExploredHexes: hexes.some((hex) => hex.explored),
          },
          bitterReach: {
            hexes: [],
            selectedHex: undefined,
            hasExploredHexes: false,
          },
        },
      }

      dispatch(handlePasteSuccess(ms))

      return
    }

    const result = safeJSONParse(s, mapStateSchema)

    if (result.ok) {
      const data = result.safeUnwrap()
      dispatch(handlePasteSuccess(data))

      return
    }

    if (oldResult.err) {
      const oe = errorToPasteError(oldResult.val)
      setPasteError(pasteErrorLabel[oe])
      console.error(oldResult.val)

      return
    }

    console.error(result.val)

    const ne = errorToPasteError(result.val)
    setPasteError(pasteErrorLabel[ne])
  }

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('map:Title')}</PageHeader>

      <Train>
        <ParchmentButton
          buttonType={
            source === 'ravland' ? 'sourceBitterReach' : 'sourceRavland'
          }
          onPress={() =>
            dispatch(
              setSource(source === 'ravland' ? 'bitterReach' : 'ravland'),
            )
          }
        >
          {source === 'ravland'
            ? t('common:gameSource.bitterReach')
            : t('common:gameSource.ravland')}
        </ParchmentButton>
        <ParchmentButton
          buttonType="ghost"
          onPress={() => dispatch(toggleFogOfWar())}
        >
          {fogOfWar ? (
            <EyeIcon className="h-5 w-5" />
          ) : (
            <EyeSlashIcon className="h-5 w-5" />
          )}
          {t(fogOfWar ? 'map:FogOfWar_On' : 'map:FogOfWar_Off')}
        </ParchmentButton>
        <ParchmentButton
          isDisabled={!hasExploredHexes}
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

      {/* Should be a notification and maybe autoclose? */}
      {pasteError ? (
        <div className="flex justify-end bg-red-500 p-2 font-bold text-white">
          {t(pasteError)}
        </div>
      ) : null}

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
              onExploreChanged={(hex) => dispatch(updateHex(hex))}
              onHide={() => dispatch(unsetSelectedHex())}
            ></MapPopover>
            <Map fogOfWar={fogOfWar}>
              {hexes.map((hex) => (
                <Polygon
                  key={hex.hexKey}
                  hex={hex}
                  selectedHex={selectedHex}
                  onMouseOver={(e) => handleMouseOver(e, hex)}
                  onClick={(e) => handleHexClick(e, hex)}
                />
              ))}
            </Map>
          </div>
        </Parchment>
      </div>
    </div>
  )
}

const numToPx = (num: number): string => `${num}px`

export default MapPage

type PasteError = 'invalidJson' | 'invalidHexData' | 'general'

const pasteErrorLabel: { [PE in PasteError]: TranslationKey<'map'> } = {
  invalidJson: 'map:InvalidJson',
  invalidHexData: 'map:InvalidHexData',
  general: 'map:GeneralPasteError',
}

const errorToPasteError = (e: Error): PasteError => {
  if (e instanceof SyntaxError) {
    return 'invalidJson'
  }

  if (e instanceof ZodError) {
    return 'invalidHexData'
  }

  return 'general'
}
