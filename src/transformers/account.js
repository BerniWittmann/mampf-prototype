/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account.
 */

import Transformer from './transformer';
import ImageTransformer from './image';

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account
   *
   * @param account The fetched account
   *
   * @returns {Object} The transformed account
   */
  static fetch(account) {
    if (!account) return undefined;
    return {
      id: account.id,
      name: account.name,
      rating: account.rating > 0 ? account.rating : 0,
      email: account.email,
      firstName: account.first_name,
      lastName: account.last_name,
      image: ImageTransformer.fetch(account.image),
    };
  }

  /**
   * Method used to transform a send account
   *
   * @param account The account to be send
   *
   * @returns {Object} The transformed account
   */
  static send(account) {
    if (!account) return undefined;
    return {
      id: account.id,
      name: account.name,
      rating: account.rating,
      email: account.email,
      first_name: account.firstName,
      last_name: account.lastName,
      image: ImageTransformer.send(account.image),
    };
  }
}
