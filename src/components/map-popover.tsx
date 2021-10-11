import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import tw from 'twin.macro'
import { Button } from '.'
import { Hex } from '../models/map.model'

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

  useEffect(() => {
    if (options) {
      setPosition({ x: getX(options), y: getY(options) })
      setShow(true)
    }
  }, [options, ref])

  const getX = (options?: MapPopoverOptions) => {
    if (!options || !ref.current) {
      return initialPosition
    }

    const { x, mapMaxX, mapMinX } = options

    const rect = ref.current.getBoundingClientRect()
    const popoverX = x - rect.width / 2

    if (popoverX - mapMinX < 0) {
      return 0
    }

    if (popoverX > mapMaxX) {
      return mapMaxX - rect.width
    }

    return popoverX - mapMinX
  }

  const getY = (options?: MapPopoverOptions) => {
    if (!options || !ref.current) {
      return initialPosition
    }

    const { y, mapMinY } = options

    const rect = ref.current.getBoundingClientRect()
    const popoverY = y - rect.height - mapMinY - 2

    if (popoverY < 0) {
      return mapMinY
    }

    return popoverY
  }

  return (
    <div
      ref={ref}
      css={[
        tw`absolute z-index[-1] p-2 bg-white border-2 border-black flex flex-col gap-4 opacity-0 transition-[opacity, transform, top, left] -translate-y-12`,
        show && tw`opacity-100 translate-y-0 z-20`,
        {
          top: position.y,
          left: position.x,
        },
      ]}
    >
      {options && (
        <>
          <div tw="text-2xl">
            {options.hex.hexKey}:{' '}
            {options.hex.explored
              ? t('Popover-Explored')
              : t('Popover-Unexplored')}
          </div>
          <div tw="flex gap-2">
            <Button
              isSmall
              variant="secondary"
              onClick={() => {
                onHide()
                setShow(false)
              }}
            >
              {t('Popover-Hide')}
            </Button>
            {options.hex.explored ? (
              <Button
                isSmall
                onClick={() => {
                  setShow(false)
                  onHide()
                  onExploreChanged({ ...options.hex, explored: false })
                }}
              >
                {t('Popover-Forget')}
              </Button>
            ) : (
              <Button
                isSmall
                onClick={() => {
                  setShow(false)
                  onHide()
                  onExploreChanged({ ...options.hex, explored: true })
                }}
              >
                {t('Popover-Explore')}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
