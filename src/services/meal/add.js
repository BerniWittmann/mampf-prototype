import moment from 'moment';

import mealTransformer from './../../transformers/meal';
import Vue from 'vue';
import store from './../../store';
import { guid } from '../../utils/helpers';


// When the request succeeds
const success = (meal) => {
  const newMeal = mealTransformer.fetch({
    name: meal.name,
    price: parseFloat(meal.price),
    free_places: parseInt(meal.places, 10),
    date: meal.date ? moment(meal.date, 'YYYY-MM-DD').toISOString() : undefined,
    id: guid(),
    guests: [],
    author: {
      name: 'Me',
      rating: undefined,
      image: undefined,
    },
    image: undefined,
    location: undefined,
  });

  store.dispatch('meal/add', newMeal);
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
    success(meal);
  }
};
