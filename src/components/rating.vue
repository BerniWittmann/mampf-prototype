<template>
  <div class="rating">
    <i class="rating-icon fa fa-star" v-bind:style="this.style" v-for="n in this.stars"></i>
  </div>
</template>

<script>
  /* ============
   * Rating Component
   * ============
   *
   * A component to display a rating with stars
   */

  export default {
    props: {
      stars: {
        type: Number,
        required: true,
      },
      size: {
        type: Number,
        required: false,
        default: 32,
      },
    },

    computed: {
      style() {
        return {
          fontSize: `${this.size}px`,
        };
      },
    },
  };

</script>
