import { Dialog, Transition } from '@headlessui/react'
import {
  DocumentArrowDownIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/20/solid'
import '@total-typescript/ts-reset'
import { nanoid } from 'nanoid'
import React, {
  Fragment,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ZodError } from 'zod'
import { BookPageTitle } from '../../components/BookPageTitle'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Train } from '../../components/Stack'
import { Typography } from '../../components/Typography'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { PasteData } from '../../components/paste-data'
import {
  selectAllExplorationNotes,
  selectHasExploredHexes,
  selectNote,
} from '../../features/journal/journal-slice'
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
} from '../../features/map/map-slice'
import { getRandomInt } from '../../functions/dice.functions'
import { downloadFile } from '../../functions/file.functions'
import { notNullish } from '../../functions/utils.functions'
import { safeJSONParse } from '../../store/persist/json-parsing'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { TranslationKey } from '../../store/translations/translation.model'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import ForbiddenLandsMap from './ForbiddenLandsMap'
import { ExplorationNote } from './map-popover'
import { Hex } from './map.model'
import { Polygon } from './polygon'

export const MapPage = () => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))
  const source = useAppSelector(selectSource)
  const fogOfWar = useAppSelector(selectFogOfWar)
  const { hexes, selectedHex } = useAppSelector(selectMap)
  const serializableMap = useAppSelector(selectMapSerializable)
  const dispatch = useAppDispatch()
  const { hasExploredHexes, explorationNotes } = useAppSelector(
    selectHasExploredHexes,
  )
  const { note } = useAppSelector(selectNote)

  const parchmentRef = useRef<HTMLDivElement>(null)

  const [pasteError, setPasteError] = useState<
    TranslationKey<'map'> | undefined
  >(undefined)

  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false)
  // const modalState = useOverlayTriggerState({
  //isOpen: isNoteOpen,
  //onOpenChange: setIsNoteOpen,
  // })

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

  const handleTooltip = useCallback((e: HTMLElement, hex: Hex) => {
    if (parchmentRef.current) {
      const { rect, parchmentRect } = getRect(e, parchmentRef.current)

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
  }, [])

  useEffect(() => {
    if (selectedHex.none) {
      setTooltip(initialTooltip)
    }
  }, [selectedHex, initialTooltip])

  const handleMouseOver = useCallback(
    (e: HTMLElement, hex: Hex) => {
      if (selectedHex.none) {
        handleTooltip(e, hex)
      }
    },
    [selectedHex, handleTooltip],
  )

  // Move to Journal Import/Export Page
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

      {/* // * Move to Map Page Toolbar? */}
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
          <div
            ref={parchmentRef}
            className="relative"
          >
            <div
              className="pointer-events-none absolute z-10 flex select-none items-center justify-center text-center text-[0.9vw] font-bold leading-none text-white"
              style={{
                textShadow: '0px 0px 1px black',
                top: numToPx(tooltip.y),
                left: numToPx(tooltip.x),
                width: numToPx(tooltip.width),
                height: numToPx(tooltip.height),
              }}
              aria-live="polite"
            >
              {tooltip.text}
            </div>

            <ParchmentModal
              isOpen={isNoteOpen}
              onClose={() => setIsNoteOpen(false)}
              title={t('journal: exploration_ note')}
              description={t('journal:exploration _note_ description')}
            >
              {close => (
                <div className="">
                  {note.some ? (
                    <ExplorationNote
                      explorationNote={note.safeUnwrap()}
                    ></ExplorationNote>
                  ) : null}
                  <div className="mt-8 flex flex-wrap justify-end gap-8">
                    <ParchmentButton
                      buttonType="ghost-secondary"
                      onPress={() => {
                        close()
                      }}
                    >
                      {t('journal:go_ to_ exploration _note _in_ journal')}
                    </ParchmentButton>
                    <ParchmentButton
                      buttonType="ghost"
                      onPress={() => {
                        dispatch(unsetSelectedHex())
                        close()
                      }}
                    >
                      {t('map:popover_hide')}
                    </ParchmentButton>
                  </div>
                </div>
              )}
            </ParchmentModal>

            <ForbiddenLandsMap fogOfWar={fogOfWar}>
              {hexes.map(hex => (
                <Polygon
                  key={hex.hexKey}
                  hex={hex}
                  explored={notNullish(
                    explorationNotes[hex.hexKey]?.exploredAt,
                  )}
                  selectedHex={selectedHex}
                  onHoverStart={e => {
                    handleMouseOver(e.target, hex)
                  }}
                  onPressStart={() => {
                    dispatch(setSelectedHex(hex.hexKey))
                    setIsNoteOpen(true)
                  }}
                  icon={explorationNotes[hex.hexKey]?.map.icon}
                ></Polygon>
              ))}
            </ForbiddenLandsMap>
          </div>
        </Parchment>
      </div>

      <div>
        <JournalPage />
      </div>
    </div>
  )
}

export const numToPx = (num: number): string => `${num}px`

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

const JournalHome = () => {
  const t = useAppSelector(selectTranslateFunction(['journal']))
  const allNotes = useAppSelector(selectAllExplorationNotes)

  return (
    <div className="">
      <BookPageTitle>{t('journal:title')}</BookPageTitle>

      <div className="flex flex-col gap-8">
        <section>
          <Typography
            variant="h3"
            parchment
          >
            Explored Hexes
          </Typography>
          <div className="mb-4">{t('monster:bookmonsters.description')}</div>
          <div className="flex flex-col gap-1">
            {allNotes
              .filter(n => n.exploredAt.some)
              .map(note => (
                <div
                  className="flex flex-col gap-1 rounded border-2 p-2 hover:border-rose-800"
                  key={note.id}
                >
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="h4"
                      parchment
                    >
                      {note.hexKey}
                    </Typography>

                    <div className="yx-hand text-2xl">
                      {note.exploredAt.map(d => d.format()).unwrapOr('Unknown')}
                    </div>
                  </div>
                  <div className="yx-hand line-clamp-1 text-2xl">
                    {note.note.map(n => n.body).unwrapOr('')}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}

const JournalPage = () => {
  const allNotes = useAppSelector(selectAllExplorationNotes)
  const [options] = useState({
    baseFrequency: getRandomInt(3, 8) / 100,
    numOctaves: getRandomInt(2, 5),
    scale: getRandomInt(3, 10),
    id: nanoid(),
  })
  // const t = useAppSelector(selectTranslateFunction(['journal']))

  return (
    <div className="p-2md:flex-row relative flex  flex-col">
      <div
        className="absolute inset-y-2 left-1/2 z-10 hidden w-4 -translate-x-1/2 bg-gradient-to-r from-transparent from-25%
 via-amber-950 to-transparent to-75% md:block"
      ></div>

      <div className="z-10 items-stretch md:w-1/2 ">
        <Parchment
          full
          parchmentClassName="rounded-t-2xl md:rounded-l-2xl"
        >
          <div className="flex h-full flex-col gap-4">
            <div
              className={`${
                // monsterSection === undefined ? '' : 'hidden 2xl:block'
                ''
              }`}
            >
              <JournalHome />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-50 h-4 w-full translate-y-2 bg-gradient-to-b from-transparent from-25% via-black to-transparent to-75% md:hidden"></div>
        </Parchment>
      </div>
      <div className="z-10 items-stretch md:w-1/2">
        <Parchment
          full
          parchmentClassName="rounded-b-2xl md:rounded-r-2xl"
        >
          <div className="flex h-full flex-col gap-4">
            <section>
              <Typography
                variant="h3"
                parchment
              >
                Latest exploration notes
              </Typography>
              {allNotes
                .filter(n => n.exploredAt.some)
                .slice(0, 5)
                .map(note => (
                  <ExplorationNote
                    key={note.id}
                    explorationNote={note}
                    noteEditable={false}
                  ></ExplorationNote>
                ))}
            </section>
          </div>
        </Parchment>
      </div>

      <div
        className="absolute inset-0 rounded-3xl bg-sky-700 shadow-lg"
        style={{ filter: `url(#filter-${options.id})` }}
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="0"
        width="0"
      >
        <defs>
          <filter
            id={`filter-${options.id}`}
            height="1.4"
            width="1.4"
          >
            <feTurbulence
              baseFrequency={options.baseFrequency}
              numOctaves={options.numOctaves}
              type="fractalNoise"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              scale={options.scale}
              result="displacement"
              xChannelSelector="R"
              in="SourceGraphic"
            />
            <feMergeNode
              in2="SourceGraphic"
              in="displacement"
              operator="atop"
              result="fbSourceGraphic"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

type ParchmentModalProps = {
  children: (close: () => void) => React.ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}
function ParchmentModal({
  children,
  isOpen,
  onClose,
  description,
  title,
}: ParchmentModalProps) {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
    >
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            className="fixed inset-0 z-40 bg-black/30"
            aria-hidden="true"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0 scale-y-75 translate-x-full"
          enterTo="opacity-100 scale-y-100 translate-x-0"
          leave="ease-in duration-75"
          leaveFrom="opacity-100 scale-y-100 translate-x-0"
          leaveTo="opacity-0 scale-y-75 translate-x-full"
        >
          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto">
            {/* The actual dialog panel  */}

            <div
              className="flex min-h-full w-full items-center p-4 md:max-w-lg
lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl
"
            >
              <Parchment className="flex-1">
                <Dialog.Panel className="">
                  {title ? (
                    <Dialog.Title className={`mb-2 text-4xl font-medium`}>
                      {title}
                    </Dialog.Title>
                  ) : null}

                  {description ? (
                    <Dialog.Description className="mb-4">
                      {description}
                    </Dialog.Description>
                  ) : null}

                  <div className="">
                    {cloneElement(children(onClose) as React.ReactElement)}
                  </div>
                </Dialog.Panel>
              </Parchment>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
