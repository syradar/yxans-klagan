import React from 'react'
import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'

interface MonthCollapseButtonProps {
  collapsed: boolean
  onMonthCollapseClick: () => void
  small?: boolean
  children?: React.ReactNode
}

export const MonthCollapseButton = ({
  collapsed,
  onMonthCollapseClick,
  children,
  small = false,
}: MonthCollapseButtonProps) => {
  const { t } = useTranslation('calendar')

  return (
    <button
      aria-label={t(collapsed ? `ShowMonth` : `HideMonth`)}
      tw="flex items-center gap-2"
      className="group"
      onClick={onMonthCollapseClick}
      type="button"
    >
      <div
        tw="border-2 border-black aspect-ratio[1] relative group-hover:(bg-red-500 border-red-500)"
        css={[small ? tw`w-4 h-4` : tw`w-8 h-8`]}
      >
        <div
          tw="absolute w-1/2 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform"
          css={[small ? tw`h-0.5 w-2/3` : tw`h-1`]}
        ></div>
        <div
          tw="absolute h-1 w-1/2 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform"
          css={[
            collapsed ? tw`-rotate-90` : tw`rotate-0`,
            small ? tw`h-0.5 w-2/3` : tw`h-1`,
          ]}
        ></div>
      </div>
      <div tw="group-hover:text-red-500">{children}</div>
    </button>
  )
}
