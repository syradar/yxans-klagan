import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'

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
  const t = useAppSelector(selectTranslateFunction(['core', 'calendar']))

  return (
    <button
      aria-label={
        t(collapsed ? `calendar:show_month` : `calendar:hide_month`) ?? ''
      }
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
            ${small ? 'size-6' : 'size-[1em]'}
            ${menu ? 'group-hover:text-white' : 'group-hover:text-red-500'}
          `}
        />
      ) : (
        <MinusIcon
          className={`
            ${small ? 'size-6' : 'size-8'}
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
