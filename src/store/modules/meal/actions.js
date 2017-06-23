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

export const setCurrentByID = ({ commit, state }, payload) => {
  const meal = state.meals.find(single => single.id === payload);
  commit(types.SET_CURRENT, meal);
};

export const unsetCurrent = ({ commit }) => {
  commit(types.SET_CURRENT, undefined);
};

export default {
  add,
  store,
  setCurrent,
  unsetCurrent,
  setCurrentByID,
};
