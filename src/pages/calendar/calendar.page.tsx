import { useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import Stack from '../../components/Stack'
import { Typography } from '../../components/Typography'
import { CalendarMonthDisplay } from '../../components/calendar-month'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import {
  nextMonth,
  previousMonth,
  selectCalendar,
} from '../../features/calendar/calendar-slice'
import {
  getCalendar,
  monthLabelDict,
} from '../../models/forbidden-lands-date.model'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'

export const CalendarPage = () => {
  const t = useAppSelector(selectTranslateFunction(['calendar']))
  const state = useAppSelector(selectCalendar)
  const dispatch = useAppDispatch()

  const [cal5] = useState(getCalendar(state.currentYear))

  if (cal5.err) {
    return null
  }

  const calendar = cal5.safeUnwrap()

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('calendar:Title')}</PageHeader>

      <div>
        <Parchment>
          <Stack.Horizontal distribute wrap>
            <Stack.Vertical spacing="none">
              <div>
                {t('calendar:Year')} {state.currentYear} {t('calendar:AS')}
              </div>
              <Typography variant="h2" parchment>
                {t(monthLabelDict[state.currentMonth])}
              </Typography>
            </Stack.Vertical>

            <Stack.Horizontal>
              <ParchmentButton onPress={() => dispatch(previousMonth())}>
                Previous month
              </ParchmentButton>
              <ParchmentButton onPress={() => dispatch(nextMonth())}>
                Next month
              </ParchmentButton>
            </Stack.Horizontal>
          </Stack.Horizontal>
          <CalendarMonthDisplay
            month={calendar.months[state.currentMonth]}
          ></CalendarMonthDisplay>
        </Parchment>
      </div>
    </div>
  )
}

export default CalendarPage
