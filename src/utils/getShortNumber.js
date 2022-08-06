/**
 * Devuelve un número truncado a una cantidad de dígitos,
 * según el número de ceros.
 *
 * @param number El número a truncar
 * @returns El número truncado
 */
const getShortNumber = (number) => {
  if (number < 1000) {
    return Math.floor(number);
  } else if (number < 1000000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return (number / 1000000).toFixed(1) + "M";
  }
};

export default getShortNumber;
