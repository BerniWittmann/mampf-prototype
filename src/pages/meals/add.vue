<template>
  <v-layout>
    <h2 class="text-center">Ein Essen anbieten</h2>
    <br>
    <form @submit.prevent="add()" class="form-horizontal">
      <div class="form-group">
        <label for="meal-name" class="col-sm-3 control-label">
          {{ $t('meal.name_label') }}
        </label>
        <div class="col-sm-9">
          <input
            v-model="meal.name"
            type="text"
            id="meal-name"
            v-bind:placeholder="$t('meal.name')"
            class="form-control col-sm-9"
          >
        </div>
      </div>
      <div class="form-group">
        <label for="meal-places" class="col-sm-3 control-label">
          {{ $t('meal.places_label') }}
        </label>
        <div class="col-sm-9">
          <input
            v-model="meal.places"
            type="number"
            id="meal-places"
            v-bind:placeholder="$t('meal.places')"
            class="form-control col-sm-9"
          >
        </div>
      </div>
      <div class="form-group">
        <label for="meal-price" class="col-sm-3 control-label">
          {{ $t('meal.price_label') }}
        </label>
        <div class="col-sm-9">
          <input
            v-model="meal.price"
            type="number"
            step="any"
            id="meal-price"
            v-bind:placeholder="$t('meal.price')"
            class="form-control col-sm-9"
          >
        </div>
      </div>
      <div class="form-group">
        <label for="meal-date" class="col-sm-3 control-label">
          {{ $t('meal.date_label') }}
        </label>
        <div class="col-sm-9">
          <input
            v-model="meal.date"
            type="date"
            id="meal-date"
            v-bind:placeholder="$t('meal.date')"
            class="form-control col-sm-9"
          >
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">
          {{ $t('meal.create') }}
        </button>
      </div>
    </form>
  </v-layout>
</template>

<script>
  /* ============
   * Meal Add Page
   * ============
   *
   * Page where the user can add a new meal.
   */

  import mealService from '../../services/meal';

  export default {
    components: {
      VLayout: require('@/layouts/default.vue'),
    },

    data() {
      return {
        meal: {
          name: null,
          places: null,
          price: null,
          date: null,
        },
      };
    },

    methods: {
      add() {
        mealService.add(this.meal);
      },
    },
  };
</script>
