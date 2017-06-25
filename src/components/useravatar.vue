<template>
  <span>
    <div :class="classes" :style="this.wrapStyle" v-if="this.showPopover" v-popover:user-avatar-popover>
      <img class="user-avatar-image" :src="this.imageUrl" :width="this.size" :height="this.size">
      <el-popover v-if="this.showPopover"
                  ref="user-avatar-popover"
                  placement="bottom"
                  width="150"
                  popper-class="user-avatar-popover"
                  trigger="hover">
        <h3 class="user-avatar-popover-name">{{this.user.name}}</h3>
        <el-rate v-model="rating" disabled :allow-half="true"></el-rate>
      </el-popover>
    </div>

    <div :class="classes" :style="this.wrapStyle" v-else>
      <img class="user-avatar-image" :src="this.imageUrl" :width="this.size" :height="this.size">
    </div>
  </span>
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
      showPopover: {
        type: Boolean,
        default: false,
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

      classes() {
        const result = ['user-avatar'];

        if (this.showPopover) {
          result.push('has-popover');
        }

        return result.join(' ');
      },

      rating() {
        return this.user ? this.user.rating : 0;
      },
    },
  };
</script>
