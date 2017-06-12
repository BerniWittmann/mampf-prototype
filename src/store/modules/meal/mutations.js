/* ============
 * Mutations for the meal module
 * ============
 *
 * The mutations that are available on the
 * meal module.
 */

import { ADD, STORE, SET_CURRENT } from './mutation-types';

export default {
  [ADD](state, meal) {
    state.meals.push(meal);
  },
  [STORE](state, meals) {
    state.meals = meals;
  },
  [SET_CURRENT](state, meal) {
    state.currentMeal = meal;
  },
};
