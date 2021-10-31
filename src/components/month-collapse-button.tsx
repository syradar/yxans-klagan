import React from 'react'
import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

interface MonthCollapseButtonProps {
  collapsed: boolean
  onMonthCollapseClick: () => void
}

export const MonthCollapseButton = ({
  collapsed,
  onMonthCollapseClick,
}: MonthCollapseButtonProps) => {
  const { t } = useTranslation('calendar')

  return (
    <button
      aria-label={t(collapsed ? `ShowMonth` : `HideMonth`)}
      tw="border-2 border-black aspect-ratio[1] relative w-8 h-8 hover:(bg-red-500 border-red-500)"
      onClick={onMonthCollapseClick}
    >
      <div tw="absolute h-1 w-4 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform"></div>
      <div
        tw="absolute h-1 w-4 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform"
        css={[collapsed ? tw`-rotate-90` : tw`rotate-0`]}
      ></div>
    </button>
  )
}
