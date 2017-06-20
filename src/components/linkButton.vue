<template>
  <a v-if="href" v-bind:href="href" v-bind:target="target">
    <el-button :type="type" :size="size" :loading="loading" :disabled="disabled" :native-type="nativeType">
      <slot></slot>
    </el-button>
  </a>
  <router-link :to="url" v-else>
    <el-button :type="type" :size="size" :loading="loading" :disabled="disabled" :native-type="nativeType">
      <slot></slot>
    </el-button>
  </router-link>
</template>

<script>
  /* ============
   * Link Button Component
   * ============
   *
   * Button that serves as a Link
   */

  export default {
    props: {
      type: {
        type: String,
      },
      size: {
        type: String,
      },
      loading: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
      },
      nativeType: {
        type: String,
      },
      route: {
        type: Object,
      },
      href: {
        type: String,
      },
      target: {
        type: String,
      },
    },

    computed: {
      url() {
        if (this.disabled) return undefined;
        return this.href || this.route;
      },
    },
  };
</script>
