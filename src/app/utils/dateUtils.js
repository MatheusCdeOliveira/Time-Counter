function convertToDays(time) {
  const startDate = new Date('April 21, 2023 12:00:00');
  const presentDay = time;
  const oneDay = 1000 * 60 * 60 * 24;
  const difference = presentDay - startDate;
  const totalDays = Math.floor(difference / oneDay);
  const actualHours = time.getHours();
  const actualMinutes = time.getMinutes().toString().padStart(2, '0');
  const actualSeconds = time.getSeconds().toString().padStart(2, '0');
  return { totalDays, actualHours, actualMinutes, actualSeconds };
}

/**
 * Obtém o número de dias, horas, minutos e segundos entre a data atual e a data de início.
 * @param {Date} time - A data atual.
 * @returns {Object} - Um objeto com os valores calculados.
 */

export function getDays(time) {
  const { totalDays, actualHours, actualMinutes, actualSeconds } =
    convertToDays(time);
  return { totalDays, actualHours, actualMinutes, actualSeconds };
}

/**
 * Obtém o número total de meses e os dias restantes entre a data atual e a data de início.
 * @param {Date} time - A data atual.
 * @returns {Object} - Um objeto com os valores calculados.
 */

export function getMonths(time) {
  const { totalDays } = convertToDays(time);
  const months = Math.floor(totalDays / 30);
  const remainingDays = totalDays - months * 30;
  return { months, remainingDays };
}

export function getWeeks(time) {
  const { totalDays } = convertToDays(time);
  const weeks = Math.floor(totalDays / 7);
  return { weeks };
}

export function getYears(time) {
  const { totalDays } = convertToDays(time);
  const years = (totalDays / 365).toFixed(2);
  return { years };
}

export function getSeconds(time) {
  const { totalDays, actualHours, actualMinutes, actualSeconds } =
    convertToDays(time);
  const seconds =
    totalDays * 24 * 60 * 60 +
    actualHours * 60 * 60 +
    actualMinutes * 60 +
    actualSeconds;
  return { seconds };
}
