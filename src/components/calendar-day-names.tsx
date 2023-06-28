import { featureToggles } from '../App'
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
  ${
    featureToggles.showNewCalendar
      ? isCurrentDate
        ? 'font-bold'
        : 'font-medium'
      : 'font-bold uppercase'
  }`}
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
        {t('calendar:SunDay')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 1}>
        {t('calendar:MoonDay')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 2}>
        {t('calendar:BloodDay')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 3}>
        {t('calendar:EarthDay')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 4}>
        {t('calendar:GrowthDay')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 5}>
        {t('calendar:HarvestDay')}
      </DayName>
      <DayName isCurrentDate={currentDate.dayIndex === 6}>
        {t('calendar:StillDay')}
      </DayName>
    </>
  )
}
