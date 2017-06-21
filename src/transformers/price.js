/* ============
 * Price Transformer
 * ============
 *
 * The transformer for the Price.
 */

import Transformer from './transformer';
import formatters from '@/utils/formatters';

export default class PriceTransformer extends Transformer {
  /**
   * Method used to transform a fetched price
   *
   * @param price The fetched price
   *
   * @returns {String} The transformed price
   */
  static fetch(price) {
    if (!price) return undefined;

    return formatters.displayPrice(price);
  }

  /**
   * Method used to transform a send price
   *
   * @param price The price to be send
   *
   * @returns {Number} The transformed price
   */
  static send(price) {
    if (!price) return undefined;

    return formatters.priceToFloat(price);
  }
}
