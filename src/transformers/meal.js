/* ============
 * Meal Transformer
 * ============
 *
 * The transformer for the meal.
 */

import moment from 'moment';

import Transformer from './transformer';
import ImageTransformer from './image';
import PriceTransformer from './price';

export default class MealTransformer extends Transformer {
  /**
   * Method used to transform a fetched meal
   *
   * @param meal The fetched meal
   *
   * @returns {Object} The transformed meal
   */
  static fetch(meal) {
    if (!meal) return undefined;
    return {
      id: meal.id,
      name: meal.name,
      author: {
        name: meal.author.name,
        rating: meal.author.rating,
        image: ImageTransformer.fetch(meal.author.image),
      },
      image: ImageTransformer.fetch(meal.image),
      location: meal.location ? {
        displayName: meal.location.display_name,
      } : undefined,
      guests: meal.guests || [],
      date: meal.date ? moment(meal.date, moment.ISO_8601) : undefined,
      dateString: meal.date ? moment().to(meal.date) : undefined,
      displayDate: meal.date ? moment(meal.date, moment.ISO_8601).format('DD.MM.YYYY HH:mm') : undefined,
      freePlaces: typeof meal.free_places !== 'undefined' ? parseInt(meal.free_places, 10) : undefined,
      price: PriceTransformer.fetch(meal.price),
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
      author: meal.author ? {
        name: meal.author.name,
        rating: meal.author.rating,
        image: ImageTransformer.send(meal.author.image),
      } : undefined,
      image: ImageTransformer.send(meal.image),
      location: meal.location ? {
        display_name: meal.location.displayName,
      } : undefined,
      date: meal.date ? meal.date.toISOString() : undefined,
      guests: meal.guests,
      free_places: meal.freePlaces,
      price: PriceTransformer.send(meal.price),
    };
  }
}
