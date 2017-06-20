<template>
  <el-card class="meal-panel" :body-style="{ padding: '0px' }">
    <div class="meal-panel-body">
      <img class="meal-panel-body-image" v-if="this.imageUrl" v-bind:src="this.imageUrl">
      <div class="meal-panel-body-text-wrap">
        <span class="meal-panel-body-text">{{this.meal.name}}</span>
      </div>
    </div>
    <div class="meal-panel-footer">
      <span class="meal-panel-footer-author">
        <span class="meal-panel-footer-author-image">
          <v-user-avatar v-bind:user="this.meal.author" v-bind:size="45"></v-user-avatar>
        </span>
        <span class="meal-panel-footer-author-additional">
          <span class="meal-panel-footer-author-name">
            {{this.meal.author.name}}
          </span>
          <span class="meal-panel-footer-author-rating" v-if="this.meal.author.rating">
            <el-rate v-model="this.meal.author.rating" disabled></el-rate>
          </span>
        </span>
      </span>
      <span class="meal-panel-footer-info">
        <span class="meal-panel-footer-info-price">
          {{this.price}}
        </span>
        <span v-bind:class="this.freePlacesTextClasses">
          {{this.freePlacesText}}
        </span>
      </span>
    </div>
  </el-card>
</template>

<script>
  /* ============
   * MealPanel Component
   * ============
   *
   * A panel component which displays a meal.
   */
  import formatters from '../utils/formatters';
  import { highlightFreePlacesThreshold } from '../utils/constants';

  export default {
    components: {
      VUserAvatar: require('@/components/useravatar.vue'),
    },
    props: {
      meal: {
        type: Object,
        required: true,
      },
    },
    computed: {
      imageUrl() {
        if (!this.meal.image || !this.meal.image.url) return './static/images/meals/empty.png';

        return this.meal.image.url;
      },

      price() {
        return formatters.price(this.meal.price);
      },

      freePlaces() {
        return Math.max(this.meal.freePlaces || 0, 0);
      },

      placesAvaliable() {
        return this.freePlaces > 0;
      },

      freePlacesText() {
        if (!this.placesAvaliable) {
          return this.$t('meal.no_free_places');
        }
        return this.$tc('meal.free_places', this.freePlaces, { count: this.freePlaces });
      },

      freePlacesTextClasses() {
        const result = ['meal-panel-footer-info-places'];

        if (!this.placesAvaliable) {
          result.push('booked-out');
        }

        if (this.freePlaces <= highlightFreePlacesThreshold) {
          result.push('highlighted');
        }

        return result.join(' ');
      },
    },
  };

</script>
