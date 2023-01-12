import { FireIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Hex } from '../models/map.model'
import { Parchment } from './parchment'
import { ParchmentButton } from './ParchmentButton'
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
  const { t } = useTranslation('map')
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
        <Parchment small>
          <div className="mb-3 text-2xl">
            {options.hex.hexKey}:{' '}
            {options.hex.explored
              ? t('Popover-Explored')
              : t('Popover-Unexplored')}
          </div>
          <div className="flex gap-2">
            <ParchmentButton
              buttonType="ghost"
              onClick={() => {
                onHide()
                setShow(false)
              }}
            >
              {t('Popover-Hide')}
            </ParchmentButton>

            {options.hex.explored ? (
              <ParchmentButton
                buttonType="danger"
                onClick={() => {
                  setShow(false)
                  onHide()
                  onExploreChanged({ ...options.hex, explored: false })
                }}
              >
                <FireIcon className="h-5 w-5" />
                {t('Popover-Forget')}
              </ParchmentButton>
            ) : (
              <ParchmentButton
                onClick={() => {
                  setShow(false)
                  onHide()
                  onExploreChanged({ ...options.hex, explored: true })
                }}
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                {t('Popover-Explore')}
              </ParchmentButton>
            )}
          </div>
        </Parchment>
      )}
    </div>
  )
}
