import { useTranslation } from 'react-i18next'

type MonthCollapseButtonProps = {
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
      aria-label={t(collapsed ? `ShowMonth` : `HideMonth`) ?? ''}
      className="group flex w-full items-center gap-2 text-left"
      onClick={onMonthCollapseClick}
      type="button"
    >
      <div
        className={`
          relative aspect-square border-2 border-black group-hover:border-red-500 group-hover:bg-red-500
          ${small ? 'h-4 w-4' : 'h-8 w-8'}
        `}
      >
        <div
          className={`
          absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-black transition-transform
          ${small ? 'h-0.5 w-2/3' : 'h-1'}
          `}
        ></div>
        <div
          className={`
          absolute top-1/2 left-1/2 h-1 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-black transition-transform
          ${small ? 'h-0.5 w-2/3' : 'h-1'}
          ${collapsed ? '-rotate-90' : 'rotate-0'}
          `}
        ></div>
      </div>
      <div className="w-full group-hover:text-red-500">{children}</div>
    </button>
  )
}
