import { useTranslation } from 'react-i18next'

type DayNameProps = {
  children: React.ReactNode
}
const DayName = ({ children }: DayNameProps) => (
  <div className="hidden items-center justify-center border-b-2 border-b-black p-2 py-1 font-bold uppercase lg:flex">
    {children}
  </div>
)

export const CalendarDayNames = () => {
  const { t } = useTranslation('calendar')

  return (
    <>
      <DayName>{t('SunDay')}</DayName>
      <DayName>{t('MoonDay')}</DayName>
      <DayName>{t('BloodDay')}</DayName>
      <DayName>{t('EarthDay')}</DayName>
      <DayName>{t('GrowthDay')}</DayName>
      <DayName>{t('HarvestDay')}</DayName>
      <DayName>{t('StillDay')}</DayName>
    </>
  )
}
