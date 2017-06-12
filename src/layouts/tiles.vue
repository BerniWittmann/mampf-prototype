<template>
  <div>
    <v-navigation></v-navigation>

    <div class="container">
      <div class="row">
        <div class="col-md-12 container-tiles">
          <!-- Content will be placed here -->
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  export default {
    components: {
      VNavigation: require('@/components/navigation.vue'),
    },
  };

</script>
