<template>
  <span v-bind:class="this.freePlacesTextClasses">
    {{this.freePlacesText}}
  </span>
</template>

<script>
  /* ============
   * Free Places Text Component
   * ============
   *
   * Component that isplays a contextualized styled text about how many places are left
   */
  import { highlightFreePlacesThreshold } from '../utils/constants';

  export default {
    props: {
      freePlaces: {
        type: Number,
        required: true,
      },
      classes: {
        type: String,
      },
      highlight: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      placesAvailable() {
        return this.freePlaces > 0;
      },

      freePlacesTextClasses() {
        const result = this.classes ? this.classes.trim().split(' ') : [];
        result.push('meal-free-places');

        if (this.highlight && !this.placesAvailable) {
          result.push('booked-out');
        }

        if (this.highlight && this.freePlaces <= highlightFreePlacesThreshold) {
          result.push('highlighted');
        }

        return result.join(' ');
      },

      freePlacesText() {
        if (!this.placesAvailable) {
          return this.$t('meal.no_free_places');
        }
        return this.$tc('meal.free_places', this.freePlaces, { count: this.freePlaces });
      },
    },
  };
</script>
