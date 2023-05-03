import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'

type DayNameProps = {
  children: React.ReactNode
}
const DayName = ({ children }: DayNameProps) => (
  <div className="hidden items-center justify-center border-b-2 border-b-black p-2 py-1 font-bold uppercase lg:flex">
    {children}
  </div>
)

export const CalendarDayNames = () => {
  const t = useAppSelector(selectTranslateFunction(['calendar']))

  return (
    <>
      <DayName>{t('calendar:SunDay')}</DayName>
      <DayName>{t('calendar:MoonDay')}</DayName>
      <DayName>{t('calendar:BloodDay')}</DayName>
      <DayName>{t('calendar:EarthDay')}</DayName>
      <DayName>{t('calendar:GrowthDay')}</DayName>
      <DayName>{t('calendar:HarvestDay')}</DayName>
      <DayName>{t('calendar:StillDay')}</DayName>
    </>
  )
}
