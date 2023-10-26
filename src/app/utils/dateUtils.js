function convertToDays(date) {
  const startDate = new Date('April 21, 2023 12:00:00');
  const presentDay = date;
  const oneDay = 1000 * 60 * 60 * 24;
  const difference = presentDay - startDate;
  const totalDays = Math.floor(difference / oneDay);
  const actualHours = date.getHours();
  const actualMinutes = date.getMinutes().toString().padStart(2, '0');
  const actualSeconds = date.getSeconds().toString().padStart(2, '0');
  return { totalDays, actualHours, actualMinutes, actualSeconds };
}

/**
 * Obtém o número de dias, horas, minutos e segundos entre a data atual e a data de início.
 * @param {Date} date - A data atual.
 * @returns {Object} - Um objeto com os valores calculados.
 */

export function getDays(date) {
  const { 
    totalDays,
    actualHours,
    actualMinutes,
    actualSeconds
  } = convertToDays(date);
  return { totalDays, actualHours, actualMinutes, actualSeconds };
}

/**
 * Obtém o número total de meses e os dias restantes entre a data atual e a data de início.
 * @param {Date} date - A data atual.
 * @returns {Object} - Um objeto com os valores calculados.
 */

export function getMonths(date) {
  const { totalDays } = convertToDays(date);
  const months = Math.floor(totalDays / 30);
  const remainingDays = totalDays - (months * 30);
  return { months, remainingDays };
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
  const {
    totalDays,
    actualHours,
    actualMinutes,
    actualSeconds
   } = convertToDays(date);
  const seconds =
    totalDays * 24 * 60 * 60 +
    actualHours * 60 * 60 +
    actualMinutes * 60 +
    actualSeconds;
  return { seconds };
}
