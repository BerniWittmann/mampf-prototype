/* ============
 * Meal Transformer
 * ============
 *
 * The transformer for the meal.
 */

import moment from 'moment';

import Transformer from './transformer';
import ImageTransformer from './image';

export default class MealTransformer extends Transformer {
  /**
   * Method used to transform a fetched meal
   *
   * @param meal The fetched meal
   *
   * @returns {Object} The transformed meal
   */
  static fetch(meal) {
    return {
      id: meal.id,
      name: meal.name,
      author: {
        name: meal.author.name,
        rating: meal.author.rating,
        image: ImageTransformer.fetch(meal.author.image),
      },
      image: ImageTransformer.fetch(meal.image),
      location: {
        displayName: meal.location.display_name,
      },
      guests: meal.guests,
      date: meal.date ? moment(meal.date, moment.ISO_8601) : undefined,
      freePlaces: meal.freePlaces ? parseInt(meal.freePlaces, 10) : undefined,
      price: meal.price ? parseFloat(meal.price) : undefined,
    };
  }

  /**
   * Method used to transform a send meal
   *
   * @param meal The meal to be send
   *
   * @returns {Object} The transformed meal
   */
  static send(meal) {
    return {
      id: meal.id,
      name: meal.name,
      author: {
        name: meal.author.name,
        rating: meal.author.rating,
        image: ImageTransformer.send(meal.author.image),
      },
      image: ImageTransformer.send(meal.image),
      location: {
        display_Name: meal.location.displayName,
      },
      date: meal.date ? meal.date.toISOString() : undefined,
      guests: meal.guests,
      freePlaces: meal.freePlaces,
      price: meal.price,
    };
  }
}
