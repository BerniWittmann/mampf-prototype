<template>
  <el-card class="user-panel">
    <div class="user-panel-body">
      <v-user-avatar v-bind:user="user" v-bind:size="120"></v-user-avatar>
    </div>
    <div class="user-panel-footer">
      <p class="user-panel-name">{{user.name}}</p>
      <el-rate
        v-model="user.rating"
        :allow-half="true"
        disabled></el-rate>
    </div>
  </el-card>
</template>

<script>
  /* ============
   * UserPanel Component
   * ============
   *
   * A panel component which displays a user.
   */

  export default {
    components: {
      VUserAvatar: require('@/components/useravatar.vue'),
    },
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  };

</script>
