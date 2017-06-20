/* ============
 * Loading Mixin
 * ============
 *
 * Mixins are used to easily expand Vue components.
 * This loading-mixin, will add the ability to show and hide a loading spinner
 */

import Vue from 'vue';

export default {
  data() {
    return {
      loadingInstance: null,
    };
  },


  methods: {
    /**
     * Method used to start a fullscreenLoading
     *
     * @param options Options
     */
    startFullscreenLoading(options) {
      if (this.loadingInstance) return;
      const loadingOptions = {
        fullscreen: true,
        ...options,
      };
      this.loadingInstance = this.$loading(loadingOptions);
    },

    /**
     * Method used to end a loading
     *
     */
    stopLoading() {
      if (!this.loadingInstance) return;
      Vue.nextTick(() => {
        this.loadingInstance.close();
        this.loadingInstance = null;
      });
    },
  },
};
