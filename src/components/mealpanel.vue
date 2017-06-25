<template>
  <router-link :to="{ name: 'meals.single', params: { mealID: this.meal.id } }" tag="span">
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
          {{this.meal.price}}
        </span>
        <v-free-places-text :free-places="freePlaces" classes="meal-panel-footer-info-places" :highlight="true"></v-free-places-text>
      </span>
      </div>
    </el-card>
  </router-link>
</template>

<script>
  /* ============
   * MealPanel Component
   * ============
   *
   * A panel component which displays a meal.
   */
  export default {
    components: {
      VUserAvatar: require('@/components/useravatar.vue'),
      VFreePlacesText: require('@/components/freePlacesText.vue'),
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

      freePlaces() {
        return Math.max(this.meal.freePlaces || 0, 0);
      },
    },
  };

</script>
