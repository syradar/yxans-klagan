import { FireIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Parchment } from '../../components/parchment'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { HexKey } from './map.model'

export type MapPopoverOptions = {
  hexKey: HexKey
  x: number
  y: number
  mapMinX: number
  mapMaxX: number
  mapMinY: number
  mapMaxY: number
}

export type MapPopoverProps = {
  options: MapPopoverOptions
}

export const MapPopover = ({ options }: MapPopoverProps) => {
  const t = useAppSelector(selectTranslateFunction(['map']))
  // const hex = useAppSelector(selctexpl(options.hex.hexKey))

  const { hex, note } = useAppSelector(selectNote(options.hexKey))
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(true)

  useEffect(() => {
    if (options) {
      setShow(true)
    }
  }, [options, ref])

  if (hex.none) {
    return null
  }

  return (
    <div
      ref={ref}
      className={`absolute -z-10 flex w-full max-w-prose -translate-x-12 flex-col
        gap-4 opacity-0 transition-all
        ${show ? 'z-20 translate-x-0 opacity-100' : ''}
      `}
      style={{
        top: '50%', //position.y,
        left: show ? '50%' : '100%', //position.x,
        transform: `translate(-50%, -50%)`,
      }}
    >
      {options ? (
        <ExplorationNote explorationNote={note}>
          <div className="flex justify-end">
            <ParchmentButton
              buttonType="ghost"
              onPress={() => {
                dispatch(unsetSelectedHex())
                setShow(false)
              }}
            >
              {t('map:popover_hide')}
            </ParchmentButton>
          </div>
        </ExplorationNote>
      ) : null}
    </div>
  )
}

type ExplorationNoteProps = ComponentPropsWithoutRef<'div'> & {
  explorationNote: ExplorationNoteViewModel
}
export function ExplorationNote({
  explorationNote: { hexKey, note, exploredAt, gameSource },
  children,
}: ExplorationNoteProps) {
  const t = useAppSelector(selectTranslateFunction(['map']))
  const dispatch = useAppDispatch()
  const { currentDate } = useAppSelector(selectCurrentDate)

  return (
    <Parchment padding="sm">
      <div className="mb-2">
        <NoteBox className="items-baseline">
          <PrintedText className="">HEX</PrintedText>
          <span className="yx-hand text-4xl font-bold uppercase">{hexKey}</span>
        </NoteBox>
        <NoteBox className="items-center">
          <PrintedText className="">EXPLORED</PrintedText>
          <span
            className={`yx-hand text-2xl transition-opacity
                ${exploredAt.some ? 'opacity-100' : 'opacity-0'}
              `}
          >
            {exploredAt.some ? exploredAt.val.format() : ''}
          </span>
          <span className="flex flex-1 justify-end">
            <ParchmentButton
              buttonType={exploredAt.some ? 'danger' : 'primary'}
              small
              onPress={() => {
                dispatch(
                  toggleExploredAt({
                    hexKey,
                    exploredAt: currentDate.serialize(),
                    gameSource: gameSource,
                  }),
                )
              }}
            >
              {exploredAt.some ? (
                <FireIcon className="h-5 w-5" />
              ) : (
                <MagnifyingGlassIcon className="h-5 w-5" />
              )}
              {t(
                exploredAt.some ? 'map:popover_forget' : 'map:popover_explore',
              )}
            </ParchmentButton>
          </span>
        </NoteBox>
        <NoteBox className="">
          <div className="flex w-full flex-col gap-2">
            {/* <PrintedText className="">NOTE</PrintedText> */}
            <TextArea
              className=""
              placeholder="Write a note..."
              label="NOTE"
              value={note.map((n) => n.body).unwrapOr('')}
              maxLength={NOTE_MAX_LENGTH}
              onChange={(e) => {
                if (isString(e)) {
                  dispatch(
                    upsertExplorationNote({
                      hexKey: hexKey,
                      note: e,
                      updatedAt: currentDate.serialize(),
                      gameSource: gameSource,
                    }),
                  )
                }
              }}
            ></TextArea>
            <div className="flex items-center justify-between"></div>
          </div>
        </NoteBox>
      </div>
      {children}
    </Parchment>
  )
}

type PrintedTextProps = ComponentPropsWithoutRef<'div'>
const PrintedText = ({ children, className }: PrintedTextProps) => (
  <div
    className={`yx-prose text-xs uppercase tracking-wide
  ${className ? className : ''}
`}
  >
    {children}
  </div>
)

type NoteBoxProps = ComponentPropsWithoutRef<'div'>
const NoteBox = ({ children, className }: NoteBoxProps) => (
  <div
    className={`flex gap-2 border border-b-0 border-neutral-800 p-2 last:border-b ${
      className ? className : ''
    }
  `}
  >
    {children}
  </div>
)

import type { AriaTextFieldProps } from 'react-aria'
import { useTextField } from 'react-aria'
import { selectCurrentDate } from '../../features/calendar/calendar-slice'
import {
  ExplorationNoteViewModel,
  NOTE_MAX_LENGTH,
  selectNote,
  toggleExploredAt,
  upsertExplorationNote,
} from '../../features/journal/journal-slice'
import { unsetSelectedHex } from '../../features/map/map-slice'
import { isString } from '../../functions/utils.functions'

type TextAreaProps = AriaTextFieldProps & ComponentPropsWithoutRef<'textarea'>
function TextArea(props: TextAreaProps) {
  const { label } = props
  const [inputValue, setInputValue] = useState(
    props.value ?? props.defaultValue,
  )

  const [isFocused, setIsFocused] = useState(false)

  const ref = useRef<HTMLTextAreaElement>(null)
  const { className, onChange, onFocus, onBlur } = props

  const heightHandler = useCallback(() => {
    if (ref.current) {
      const area = ref.current
      const oldAlignment = area.style.alignSelf
      const oldOverflow = area.style.overflow
      const isFirefox = 'MozAppearance' in area.style
      if (isFirefox) {
        area.style.overflow = 'hidden'
      }
      area.style.alignSelf = 'start'
      area.style.height = 'auto'
      const height = `${
        area.scrollHeight + (area.offsetHeight - area.clientHeight)
      }px`
      area.style.height = height
      console.log('[TextArea] height', height)
      console.log('[TextArea] area.scrollHeight', area.scrollHeight)
      console.log('[TextArea] area.offsetHeight', area.offsetHeight)
      console.log('[TextArea] area.clientHeight', area.clientHeight)

      area.style.overflow = oldOverflow
      area.style.alignSelf = oldAlignment
    }
  }, [ref])

  useLayoutEffect(() => {
    if (ref.current) {
      heightHandler()
    }
  }, [heightHandler, inputValue, ref, props.value])

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      onFocus: (e) => {
        setIsFocused(true)
        if (onFocus) {
          onFocus(e)
        }
      },
      onBlur: (e) => {
        setIsFocused(false)
        if (onBlur) {
          onBlur(e)
        }
      },
      onChange: (e) => {
        setInputValue(e)
        if (onChange) {
          onChange(e)
        }
      },

      inputElementType: 'textarea',
    },
    ref,
  )

  return (
    <div
      className={`max-w-prose
      ${className ? className : ''}
    `}
    >
      <div className="flex justify-between gap-2">
        <label className="yx-prose mb-2 text-xs uppercase" {...labelProps}>
          {label}
        </label>
        <div
          className={`text-sm text-stone-600 transition-opacity
        ${
          (inputValue?.length ?? Infinity) > NOTE_MAX_LENGTH
            ? 'text-red-500'
            : ''
        }
        ${
          isFocused && (inputValue?.length ?? 0) > 100
            ? 'opacity-100'
            : 'opacity-0'
        }
        `}
        >
          {inputValue?.length ?? 0} / {NOTE_MAX_LENGTH} characters
        </div>
      </div>
      <textarea
        className="yx-hand w-full bg-transparent text-2xl"
        {...inputProps}
        ref={ref}
      />
    </div>
  )
}

;<TextArea label="Description" />
