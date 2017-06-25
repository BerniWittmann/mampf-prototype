import mealTransformer from './../../transformers/meal';
import store from './../../store';

import backendMock from './backendMock';

// When the request succeeds
const success = (meal) => {
  const fetchedMeal = mealTransformer.fetch(meal);
  store.dispatch('meal/storeSingle', fetchedMeal);
  store.dispatch('meal/setCurrent', fetchedMeal);
};

// When the request fails
const failed = () => {
  store.dispatch('meal/unsetCurrent');
};

export default id => new Promise((resolve, reject) => {
  const meal = backendMock.join(id, store.getters['account/userDetails']);

  if (meal) {
    success(meal);
    return resolve();
  }
  failed();
  return reject();
});
