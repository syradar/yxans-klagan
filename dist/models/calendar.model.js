import { range } from '../functions/array.functions.js';
const month = ['Åldervinter', 'Ungvår', 'Åldervår', 'Ungsommar', 'Åldersommar', 'Unghöst', 'Ålderhöst', 'Ungvinter'];

const numberOfMonths = () => 8;

const dayNames = ['Soldag', 'Måndag', 'Bloddag', 'Jorddag', 'Växtdag', 'Skördedag', 'Stilledag'];
export const getMonthName = monthNumber => month[monthNumber % 8];
export const getDayName = dayNumber => dayNames[dayNumber % 7];
export const getDayNumber = dayName => {
  switch (dayName) {
    case 'Stilledag':
      return 7;

    case 'Skördedag':
      return 6;

    case 'Växtdag':
      return 5;

    case 'Jorddag':
      return 4;

    case 'Bloddag':
      return 3;

    case 'Måndag':
      return 2;

    case 'Soldag':
    default:
      return 1;
  }
};
export const getMoonPhase = day => {
  switch (true) {
    case day % 30 === 0:
      return 'full';

    case day % 15 === 0:
      return 'new';

    default:
      return undefined;
  }
};
export const dayInMonth = m => {
  switch (m) {
    case 'Åldervinter':
    case 'Åldervår':
    case 'Ungsommar':
    case 'Åldersommar':
    case 'Ålderhöst':
      return 46;

    default:
      return 45;
  }
};
export const getCal = (startYear = 1165) => {
  const dayOffset = startYear % 1165 % 7;
  const cal = range(numberOfMonths()).reduce((cal, m) => {
    const monthName = getMonthName(m);
    cal.cal.months[m] = {
      name: monthName,
      days: range(dayInMonth(monthName)).map(d => ({
        number: d + 1,
        name: getDayName(cal.daysPassed + d),
        moon: getMoonPhase(cal.daysPassed + d + 1 + 9)
      }))
    };
    cal.daysPassed += dayInMonth(monthName);
    return cal;
  }, {
    daysPassed: dayOffset,
    cal: {
      year: startYear,
      months: {}
    }
  });
  return cal.cal;
};