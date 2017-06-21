/* ============
 * Slot Mixin
 * ============
 *
 * Mixins are used to easily expand Vue components.
 * This slot-mixin, will add the hasSlot-method
 * to the specified Vue component.
 */

import { defaultMoneyConfig } from '@/utils/constants';

export default {
  computed: {
    /**
     * Property which configures default value of v-money directive
     *
     * @returns {Object} Config object
     */
    moneyConfig() {
      return defaultMoneyConfig;
    },
  },
};
