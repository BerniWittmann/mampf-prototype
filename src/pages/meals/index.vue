<template>
  <v-layout>
    <v-meal-panel :meal="meal" v-for="meal in this.meals" v-bind:key="meal.id"></v-meal-panel>
  </v-layout>
</template>

<script>
  /* ============
   * Meal Index Page
   * ============
   *
   * Page where the user can view the available meals.
   */

  import loadingMixin from '@/mixins/loading';

  export default {
    mixins: [loadingMixin],
    components: {
      VLayout: require('@/layouts/tiles.vue'),
      VMealPanel: require('@/components/mealpanel.vue'),
    },

    computed: {
      meals() {
        return this.$store.state.meal.meals;
      },
    },

    created() {
      this.startFullscreenLoading();
    },

    mounted() {
      this.stopLoading();
    },
  };
</script>
