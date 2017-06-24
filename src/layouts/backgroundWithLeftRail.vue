<template>
  <div class="full-size-background">
    <v-navigation :back-navigation="backNavigation"></v-navigation>

    <el-row>
      <el-col v-if="hasSlot('side')" :lg="{span: 5, offset: 1}" :md="{span: 5, offset: 1}" :sm="{span: 5, offset: 1}"
              :xs="{span: 22, offset: 1}">
        <slot name="side"></slot>
      </el-col>

      <el-col v-if="hasSlot('body')" :lg="{span: 12, offset: 2}" :md="{span: 10, offset: 4}" :sm="{span: 10, offset: 4}"
              :xs="{span: 22, offset: 1}">
        <div class="page">
          <!-- Content will be placed here -->
          <slot name="body"></slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /* ============
   * Background With RailLayout
   * ============
   *
   * Has a big background image a sticky siderail
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  import SlotMixin from '@/mixins/slot';

  export default {
    mixins: [
      SlotMixin,
    ],

    props: {
      backNavigation: {
        type: String,
      },
    },

    components: {
      VNavigation: require('@/components/navigation.vue'),
    },
  };

</script>
