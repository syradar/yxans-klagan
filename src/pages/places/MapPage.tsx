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
import { selectJournal } from '../../features/journal/journal-slice'
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
} from '../../features/map/map-slice'
import { downloadFile } from '../../functions/file.functions'
import { notNullish } from '../../functions/utils.functions'
import { safeJSONParse } from '../../store/persist/json-parsing'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { TranslationKey } from '../../store/translations/translation.model'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import ForbiddenLandsMap from './ForbiddenLandsMap'
import { MapPopover, MapPopoverOptions } from './map-popover'
import { Hex } from './map.model'
import { Polygon } from './polygon'

export const MapPage = () => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))
  const source = useAppSelector(selectSource)
  const fogOfWar = useAppSelector(selectFogOfWar)
  const { hexes, selectedHex } = useAppSelector(selectMap)
  const serializableMap = useAppSelector(selectMapSerializable)
  const dispatch = useAppDispatch()
  const { explorationNotes } = useAppSelector(selectJournal)
  const hasExploredHexes = useMemo(
    () =>
      Object.values(explorationNotes).some((notes) =>
        Object.values(notes).some((note) => notNullish(note.exploredAt)),
      ),
    [explorationNotes],
  )

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
        hexKey: hex.hexKey,
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
          },
          bitterReach: {
            hexes: [],
            selectedHex: undefined,
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
      <PageHeader>{t('map:title')}</PageHeader>

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
            ? t('common:game_source.bitter_reach')
            : t('common:game_source.ravland')}
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
          {t(fogOfWar ? 'map:fog_of_war_on' : 'map:fog_of_war_off')}
        </ParchmentButton>
        <div>REWRITE IMPORT AND EXPORT</div>
        <ParchmentButton
          isDisabled={!hasExploredHexes}
          buttonType="ghost"
          onPress={() => handleFileDownload()}
        >
          <DocumentArrowDownIcon className="h-5 w-5" />
          {t('map:download_map_data')}
        </ParchmentButton>
        <PasteData
          onFocusTextArea={() => setPasteError(undefined)}
          label={t('map:paste_map_data')}
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
        <Parchment padding="xs">
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
            {mapPopover ? <MapPopover options={mapPopover}></MapPopover> : null}
            <ForbiddenLandsMap fogOfWar={fogOfWar}>
              {hexes.map((hex) => (
                <Polygon
                  key={hex.hexKey}
                  hex={hex}
                  explored={notNullish(
                    explorationNotes[source][hex.hexKey]?.exploredAt,
                  )}
                  selectedHex={selectedHex}
                  onMouseOver={(e) => handleMouseOver(e, hex)}
                  onClick={(e) => handleHexClick(e, hex)}
                />
              ))}
            </ForbiddenLandsMap>
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
  invalidJson: 'map:invalid_json',
  invalidHexData: 'map:invalid_hex_data',
  general: 'map:general_paste_error',
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
