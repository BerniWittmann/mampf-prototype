/* ============
 * Formatters
 * ============
 *
 * simple formatting functions
 */

import { defaultCurrencySymbol, defaultMoneyConfig } from './constants';

/**
 * Method used to convert a double number to a price
 *
 * @param value The price as a double
 * @returns {String} Formatted Price string
 */
function displayPrice(value) {
  return `${value.toFixed(2).toString().replace('.', ',')}${defaultCurrencySymbol}`;
}

/**
 * Method used to convert a price String to a float
 *
 * @param str The price as a string
 * @returns {Number} Price number
 */
function priceToFloat(str) {
  str = str
    .replace(defaultCurrencySymbol, '')
    .split(' ')
    .join('')
    .replace(defaultMoneyConfig.decimal, '.')
    .replace(defaultMoneyConfig.thousands, '');
  return parseFloat(str);
}

export default {
  displayPrice,
  priceToFloat,
};
