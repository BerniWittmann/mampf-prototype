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

/**
 * Method used to generate a moment object from a separate date and time
 *
 * @param {String} date DateString
 * @param {String} time TimeString
 * @returns {Object} moment Object
 */
export function combineDate(date, time) {
  if (!date) return undefined;
  if (!time) time = '09:00';
  date = typeof date === 'string' ? date : moment(date).format('DD.MM.YYYY');
  time = typeof time === 'string' ? time : moment(time).format('HH:mm');
  const dateTimeString = `${date} ${time}`;
  return moment(dateTimeString, 'DD.MM.YYYY HH:mm');
}
