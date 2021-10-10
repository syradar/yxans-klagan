import React from 'react'
import 'twin.macro'
import { range } from '../functions/array.functions'
import { getDayName } from '../models/calendar.model'
import { useTranslation } from 'react-i18next'

const CalendarDayNames = () => {
  const { t } = useTranslation('calendar')

  return (
    <>
      {range(7).map((i) => (
        <div
          tw="hidden lg:(flex) uppercase px-2 py-1 border-b-2 border-b-black p-2 items-center justify-center font-bold"
          key={getDayName(i)}
        >
          {t(getDayName(i))}
        </div>
      ))}
    </>
  )
}

export default CalendarDayNames
