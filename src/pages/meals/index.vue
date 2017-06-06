<template>
  <v-layout>
    <v-meal-panel :meal="meal" v-for="meal in this.meals" v-bind:key="meal.id"></v-meal-panel>
  </v-layout>
</template>

<script>
  /* ============
   * Account Index Page
   * ============
   *
   * Page where the user can view the account information.
   */

  export default {
    components: {
      VLayout: require('@/layouts/tiles.vue'),
      VMealPanel: require('@/components/mealpanel.vue'),
    },

    computed: {
      meals() {
        return this.$store.state.meal.meals;
      },
    },
  };
</script>
