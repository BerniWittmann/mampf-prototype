/* ============
 * Formatters
 * ============
 *
 * simple formatting functions
 */

import { defaultCurrencySymbol } from './constants';

/**
 * Method used to convert a double number to a price
 *
 * @param value The price as a double
 * @returns {String} Formatted Price string
 */
function price(value) {
  return `${value.toFixed(2).toString().replace('.', ',')}${defaultCurrencySymbol}`;
}

export default {
  price,
};
