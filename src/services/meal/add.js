import mealTransformer from './../../transformers/meal';
import Vue from 'vue';
import store from './../../store';

import defaultMeals from './defaultData';

import { guid, combineDate } from '../../utils/helpers';

// When the request succeeds
const success = (meal) => {
  store.dispatch('meal/add', mealTransformer.fetch(meal));
  Vue.router.push({
    name: 'meals.index',
  });
};

// When the request fails
const failed = () => {
};

export default (meal) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   *
   * With the include REST-client Axios, you can do something like this:
   * Vue.$http.post('/auth/login', user)
   *   .then((response) => {
   *     success(response);
   *   })
   *   .catch((error) => {
   *     failed(error);
   *   });
   */
  if (!meal.name || !meal.places || !meal.date || !meal.price) {
    failed();
  } else {
    meal.date = combineDate(meal.date, meal.time);
    meal.author = {
      name: 'Me',
      rating: undefined,
      image: undefined,
    };
    meal.id = guid();
    meal.freePlaces = meal.places;
    defaultMeals.push(meal);
    success(mealTransformer.send(meal));
  }
};
