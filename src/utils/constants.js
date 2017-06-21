/* ============
 * Constants
 * ============
 */

/**
 * Default currency symbol
 */
export const defaultCurrencySymbol = '€';
/**
 * Threshold for highlighting free available places of a meal
 */
export const highlightFreePlacesThreshold = 1;
/**
 * Default Options for v-money directive;
 */
export const defaultMoneyConfig = {
  decimal: ',',
  // The character used to separate numbers in groups of three.
  thousands: '',
  // The currency name or symbol followed by a space.
  prefix: '',
  // The suffix (If a suffix is used by the target currency.)
  suffix: defaultCurrencySymbol,
  // Level of decimal precision. REQUIRED
  precision: 2,
  // If mask is false, outputs the number to the model. Otherwise outputs the masked string.
  masked: false,
};
