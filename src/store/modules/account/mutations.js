/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { STORE } from './mutation-types';

export default {
  [STORE](state, account) {
    state.id = account.id;
    state.name = account.name;
    state.email = account.email;
    state.firstName = account.firstName;
    state.lastName = account.lastName;
    state.rating = account.rating;
  },
};
