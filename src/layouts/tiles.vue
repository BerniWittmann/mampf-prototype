<template>
  <div>
    <v-navigation></v-navigation>

    <el-row>
      <el-col :span="24" class="container-tiles">
        <!-- Content will be placed here -->
        <slot></slot>
      </el-col>
    </el-row>

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
