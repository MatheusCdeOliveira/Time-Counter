const startDate = new Date("April 21, 2023 12:00:00");
const oneDay = 1000 * 60 * 60 * 24;

/**
 * Obtém o número de dias, horas, minutos e segundos entre a data atual e a data de início.
 * @param {Date} time - A data atual.
 * @returns {Object} - Um objeto com os valores calculados.
 */

export function getDays(time) {
  const presentDay = time;
  const difference = presentDay - startDate;
  const hours = presentDay.getHours();
  const minutes = presentDay.getMinutes().toString().padStart(2, '0');
  const seconds = presentDay.getSeconds().toString().padStart(2, '0');
  const totalDays = Math.floor(difference / oneDay);
  return {totalDays, hours, minutes, seconds};
};


/**
 * Obtém o número total de meses e os dias restantes entre a data atual e a data de início.
 * @param {Date} time - A data atual.
 * @returns {Object} - Um objeto com os valores calculados.
 */

export function getMonths(time) {
  const presentDay = time;
  const difference = presentDay - startDate;
  const totalDays = Math.floor(difference / oneDay);
  const totalMonths = Math.floor(totalDays / 30);
  const remainingDays = totalDays - (totalMonths * 30);
  return {totalMonths, remainingDays};
};
