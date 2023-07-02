import { FireIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Parchment } from '../../components/parchment'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { Hex } from './map.model'
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
  const t = useAppSelector(selectTranslateFunction(['map']))
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(true)
  const initialPosition = -9999
  const [position, setPosition] = useState({
    x: initialPosition,
    y: initialPosition,
  })

  const getX = useCallback(
    (xOptions?: MapPopoverOptions) => {
      if (!xOptions || !ref.current) {
        return initialPosition
      }

      const { x, mapMaxX, mapMinX } = xOptions

      const rect = ref.current.getBoundingClientRect()
      const popoverX = x - rect.width / 2

      if (popoverX - mapMinX < 0) {
        return 0
      }

      if (popoverX > mapMaxX) {
        return mapMaxX - rect.width
      }

      return popoverX - mapMinX
    },
    [initialPosition],
  )

  const getY = useCallback(
    (yOptions?: MapPopoverOptions) => {
      if (!yOptions || !ref.current) {
        return initialPosition
      }

      const { y, mapMinY } = yOptions

      const rect = ref.current.getBoundingClientRect()
      const popoverY = y - rect.height - mapMinY - 2

      if (popoverY < 0) {
        return mapMinY
      }

      return popoverY
    },
    [initialPosition],
  )

  useEffect(() => {
    if (options) {
      setPosition({ x: getX(options), y: getY(options) })
      setShow(true)
    }
  }, [getX, getY, options, ref])

  return (
    <div
      ref={ref}
      className={`absolute -z-10 flex -translate-y-12 flex-col gap-4 opacity-0 transition-all
        ${show ? 'z-20 translate-y-0 opacity-100' : ''}
      `}
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      {options && (
        <Parchment padding="sm">
          <div className="mb-3 text-2xl">
            {options.hex.hexKey}:{' '}
            {options.hex.explored
              ? t('map:popover_explored')
              : t('map:popover_unexplored')}
          </div>
          <div className="flex gap-2">
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
              <ParchmentButton
                buttonType="danger"
                onPress={() => {
                  setShow(false)
                  onHide()
                  onExploreChanged({ ...options.hex, explored: false })
                }}
              >
                <FireIcon className="h-5 w-5" />
                {t('map:popover_forget')}
              </ParchmentButton>
            ) : (
              <ParchmentButton
                onPress={() => {
                  setShow(false)
                  onHide()
                  onExploreChanged({ ...options.hex, explored: true })
                }}
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                {t('map:popover_explore')}
              </ParchmentButton>
            )}
          </div>
        </Parchment>
      )}
    </div>
  )
}
