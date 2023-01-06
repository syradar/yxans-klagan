import { useTranslation } from 'react-i18next'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

type MonthCollapseButtonProps = {
  collapsed: boolean
  onMonthCollapseClick: () => void
  small?: boolean
  children?: React.ReactNode
  menu?: boolean
}
export const MonthCollapseButton = ({
  collapsed,
  onMonthCollapseClick,
  children,
  small = false,
  menu = false,
}: MonthCollapseButtonProps) => {
  const { t } = useTranslation('calendar')

  return (
    <button
      aria-label={t(collapsed ? `ShowMonth` : `HideMonth`) ?? ''}
      className={`
        group flex w-full items-center gap-2 text-left
        ${menu ? 'px-4 py-1 hover:bg-amber-900 hover:text-amber-50' : ''}

        `}
      onClick={onMonthCollapseClick}
      type="button"
    >
      {collapsed ? (
        <PlusIcon
          className={`
            ${small ? 'h-6 w-6' : 'h-[1em] w-[1em]'}
            ${menu ? 'group-hover:text-white' : 'group-hover:text-red-500'}
          `}
        />
      ) : (
        <MinusIcon
          className={`
            ${small ? 'h-6 w-6' : 'h-8 w-8'}
            ${menu ? 'group-hover:text-white' : 'group-hover:text-red-500'}
        `}
        />
      )}
      <div
        className={`
        w-full
        ${menu ? 'group-hover:text-white' : 'group-hover:text-red-500'}
      `}
      >
        {children}
      </div>
    </button>
  )
}
