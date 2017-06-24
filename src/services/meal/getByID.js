import mealTransformer from './../../transformers/meal';
import store from './../../store';

import defaultMeals from './defaultData';

// When the request succeeds
const success = (meal) => {
  store.dispatch('meal/setCurrent', mealTransformer.fetch(meal));
};

// When the request fails
const failed = () => {
  store.dispatch('meal/unsetCurrent');
};

export default id => new Promise((resolve, reject) => {
  const meal = defaultMeals.find(single => single.id === id);

  if (meal) {
    success(meal);
    return resolve();
  }
  failed();
  return reject();
});
