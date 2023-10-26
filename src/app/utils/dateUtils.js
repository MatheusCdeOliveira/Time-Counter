function convertToDays(date) {
  const startDate = new Date('April 21, 2023 00:00:00');
  const presentDay = date;
  const oneDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((presentDay - startDate) / oneDay);
  const actualHours = date.getHours().toString().padStart(2, '0');
  const actualMinutes = date.getMinutes().toString().padStart(2, '0');
  const actualSeconds = date.getSeconds().toString().padStart(2, '0');
  return { totalDays, actualHours, actualMinutes, actualSeconds, startDate };
}

/**
 * Obtém o número de dias, horas, minutos e segundos entre a data atual e a data de início.
 * @param {Date} date - A data atual.
 * @returns {Object} - Um objeto com os valores calculados.
 */

export function getDays(date) {
  const { totalDays, actualHours, actualMinutes, actualSeconds } =
    convertToDays(date);
  return { totalDays, actualHours, actualMinutes, actualSeconds };
}

/**
 * Obtém o número total de meses e os dias restantes entre a data atual e a data de início.
 * @param {Date} date - A data atual.
 * @returns {Object} - Um objeto com os valores calculados.
 */

export function getMonths(date) {
  const { totalDays, startDate } = convertToDays(date);
  const allMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const months = Math.floor(totalDays / 30);
  let remainingDays = totalDays % 30;

  const startMonth = startDate.getMonth();
  const stopMonth = date.getMonth();
  // console.log(startMonth)
  // console.log(stop)

  return {
    months,
    remainingDays:
      remainingDays -
      allMonths.slice(startMonth, stopMonth).filter((m) => m === 31).length,
  };
}

export function getWeeks(date) {
  const { totalDays } = convertToDays(date);
  const weeks = Math.floor(totalDays / 7);
  return { weeks };
}

export function getYears(date) {
  const { totalDays } = convertToDays(date);
  const years = (totalDays / 365).toFixed(2);
  return { years };
}

export function getSeconds(date) {
  const { totalDays, actualHours, actualMinutes, actualSeconds } =
    convertToDays(date);
  const seconds =
    Number(totalDays) * 86400 +
    Number(actualHours) * 60 * 60 +
    Number(actualMinutes) * 60 +
    Number(actualSeconds);
  return { seconds };
}
