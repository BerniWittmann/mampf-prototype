<template>
  <v-layout>
    <h1>{{meal.name}}</h1>
  </v-layout>
</template>

<script>
  /* ============
   * Meal Singe Page
   * ============
   *
   * Page where the user can view a single meal
   */

  import loadingMixin from '@/mixins/loading';

  export default {
    mixins: [loadingMixin],
    components: {
      VLayout: require('@/layouts/tiles.vue'),
    },

    computed: {
      meal() {
        return this.$store.state.meal.currentMeal;
      },
    },

    mounted() {
      if (!this.meal) this.$router.replace({ name: 'meals.index' });
    },

    destroyed() {
      this.$store.dispatch('meal/unsetCurrent');
    },
  };
</script>
