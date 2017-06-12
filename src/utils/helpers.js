/* ============
 * Helpers
 * ============
 *
 * small helper functions
 */

import moment from 'moment';

/**
 * Method used to generate a GUID
 *
 * The current implementation is not a guid, since it is not necessary for the prototype.
 * Later the backend will provide the ids for entities
 *
 * @returns {String} GUID String
 */
export function guid() {
  return moment().valueOf();
}

export function foo() {
  return 'bar';
}
