import mealTransformer from './../../transformers/meal';
import store from './../../store';

import defaultMeals from './defaultData';

// When the request succeeds
const success = (meal) => {
  store.dispatch('meal/storeSingle', mealTransformer.fetch(meal));
  store.dispatch('meal/setCurrent', mealTransformer.fetch(meal));
};

// When the request fails
const failed = () => {
  store.dispatch('meal/unsetCurrent');
};

export default id => new Promise((resolve, reject) => {
  const meal = defaultMeals.find(single => single.id === id);
  if (!meal) {
    failed();
    return reject();
  }

  meal.guests.push(store.getters['account/userDetails']);
  meal.free_places = Math.max(meal.free_places - 1, 0);

  defaultMeals.map((single) => {
    if (single.id === meal.id) {
      return meal;
    }
    return single;
  });

  if (meal) {
    success(meal);
    return resolve();
  }
  failed();
  return reject();
});
