import { selectCurrentDate } from '../features/calendar/calendar-slice'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'

type DayNameProps = {
  children: React.ReactNode
  isCurrentDate: boolean
}
const DayName = ({ children, isCurrentDate }: DayNameProps) => (
  <div
    className={`hidden items-center justify-center border-b border-b-neutral-700 p-2 py-1 lg:flex
  ${isCurrentDate ? 'font-bold' : 'font-medium'}`}
  >
    {children}
  </div>
)

export const CalendarDayNames = () => {
  const t = useAppSelector(selectTranslateFunction(['calendar']))
  const { currentDate } = useAppSelector(selectCurrentDate)

  return (
    <>
      <DayName isCurrentDate={currentDate.dayIndex === 0}>
        {t('calendar:sun_day')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 1}>
        {t('calendar:moon_day')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 2}>
        {t('calendar:blood_day')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 3}>
        {t('calendar:earth_day')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 4}>
        {t('calendar:growth_day')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 5}>
        {t('calendar:harvest_day')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 6}>
        {t('calendar:still_day')}
      </DayName>
    </>
  )
}
