import React from 'react'
import { useTranslation } from 'react-i18next'
import tw, { styled } from 'twin.macro'

const DayName = styled.div(() => [
  tw`hidden lg:(flex) uppercase px-2 py-1 border-b-2 border-b-black p-2 items-center justify-center font-bold`,
])

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
