/* ============
 * Image Transformer
 * ============
 *
 * The transformer for the image.
 */

import Transformer from './transformer';

export default class ImageTransformer extends Transformer {
  /**
   * Method used to transform a fetched image
   *
   * @param image The fetched image
   *
   * @returns {Object} The transformed image
   */
  static fetch(image) {
    if (!image) return undefined;

    return {
      url: image.url,
    };
  }

  /**
   * Method used to transform a send image
   *
   * @param image The image to be send
   *
   * @returns {Object} The transformed image
   */
  static send(image) {
    if (!image) return undefined;

    return {
      url: image.url,
    };
  }
}
