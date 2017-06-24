<template>
  <div class="user-avatar" v-bind:style="this.wrapStyle">
    <img class="user-avatar-image" v-bind:src="this.imageUrl" v-bind:width="this.size" v-bind:height="this.size">
  </div>
</template>

<script>
  /* ============
   * User Avatar Component
   * ============
   *
   * A component to display a user avatar
   */

  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
      size: {
        type: Number,
        required: false,
        default: 32,
      },
    },
    computed: {
      imageUrl() {
        if (!this.user.image || !this.user.image.url) return './static/images/users/default.png';

        return this.user.image.url;
      },

      wrapStyle() {
        return `width: ${this.size}px; height: ${this.size}px;`;
      },
    },
  };

</script>
