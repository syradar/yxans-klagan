import { TranslationKey } from '../store/translations/translation.model'

export type Time = 'quarterDay' | 'day' | 'week' | 'twoWeeks' | 'bookTime'

export const timeLabelDict: Readonly<Record<Time, TranslationKey<'common'>>> =
  Object.freeze({
    quarterDay: 'common:time.quarterDay',
    day: 'common:time.day',
    week: 'common:time.week',
    twoWeeks: 'common:time.twoWeeks',
    bookTime: 'common:time.bookTime',
  })
