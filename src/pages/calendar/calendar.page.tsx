import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
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
import { getCalendar, monthLabelDict } from '../../models/forbidden-lands-date'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { at } from '../../functions/array.functions'

export const CalendarPage = () => {
  const t = useAppSelector(selectTranslateFunction(['calendar']))
  const state = useAppSelector(selectCalendar)
  const dispatch = useAppDispatch()
  const cal5 = getCalendar(state.currentYear)

  if (cal5.err) {
    return null
  }

  const calendar = cal5.safeUnwrap()

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('calendar:title')}</PageHeader>

      <div>
        <Parchment>
          <Stack.Horizontal
            distribute
            wrap
          >
            <Stack.Vertical spacing="none">
              <div>
                {t('calendar:year')} {state.currentYear} {t('calendar:as')}
              </div>
              <Typography
                variant="h2"
                parchment
              >
                {t(monthLabelDict[state.currentMonth])}
              </Typography>
            </Stack.Vertical>

            <Stack.Horizontal>
              <ParchmentButton onPress={() => dispatch(previousMonth())}>
                <ArrowLeftIcon className="h-5 w-5" />
                {t('calendar:previous_month')}
              </ParchmentButton>
              <ParchmentButton onPress={() => dispatch(nextMonth())}>
                {t('calendar:next_month')}
                <ArrowRightIcon className="h-5 w-5" />
              </ParchmentButton>
            </Stack.Horizontal>
          </Stack.Horizontal>
          <CalendarMonthDisplay
            month={at(calendar.months, state.currentMonth)}
          ></CalendarMonthDisplay>
        </Parchment>
      </div>
    </div>
  )
}

export default CalendarPage
