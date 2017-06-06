/* ============
 * Actions for the meal module
 * ============
 *
 * The actions that are available on the
 * meal module.
 */

import * as types from './mutation-types';

export const add = ({ commit }, payload) => {
  commit(types.ADD, payload);
};

export const store = ({ commit }, payload) => {
  commit(types.STORE, payload);
};

export const setCurrent = ({ commit }, payload) => {
  commit(types.SET_CURRENT, payload);
};

export const unsetCurrent = ({ commit }) => {
  commit(types.SET_CURRENT, undefined);
};

export default {
  add,
  store,
  setCurrent,
  unsetCurrent,
};
