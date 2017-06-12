import mealTransformer from './../../transformers/meal';
import store from './../../store';

import defaultMeals from './defaultData';

// When the request succeeds
const success = (meals) => {
  meals = mealTransformer.fetchCollection(meals);

  store.dispatch('meal/store', meals);
};

// When the request fails
const failed = () => {
};

export default () => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With the include REST-client Axios, you can do something like this:
   * Vue.$http.get('/meal')
   *   .then((response) => {
   *     success(response);
   *   })
   *   .catch((error) => {
   *     failed(error);
   *   });
   */
  const succeeds = true;

  if (succeeds) {
    success(defaultMeals);
  } else {
    failed();
  }
};
