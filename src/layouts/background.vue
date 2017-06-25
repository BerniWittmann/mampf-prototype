<template>
  <div class="full-size-background">
    <v-navigation></v-navigation>

    <el-row>
      <el-col :span="24">
        <div class="page">
          <!-- Content will be placed here -->
          <slot></slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /* ============
   * Background Layout
   * ============
   *
   * Used for the login and register pages. Has a big background image
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
