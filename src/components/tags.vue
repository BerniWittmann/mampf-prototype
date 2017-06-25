<template>
  <span>
    <el-tag
      :key="tag"
      v-for="tag in tags"
      :closable="editable"
      :close-transition="true"
      @close="handleClose(tag)"
    >
    {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="this.editable && inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputEnter"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-if="this.editable && !inputVisible" class="button-new-tag" size="small" @click="showInput">+ {{ $t('meal.tag_add') }}</el-button>

  </span>
</template>

<script>
  /* ============
   * Tag Component
   * ============
   *
   * Component that uses tags
   */

  export default {
    props: {
      tags: {
        type: Array,
        required: true,
      },
      editable: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        inputVisible: false,
        inputValue: '',
      };
    },

    methods: {
      handleClose(tag) {
        if (!this.editable) return;
        this.tags.splice(this.tags.indexOf(tag), 1);
      },

      showInput() {
        if (!this.editable) return;
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        if (!this.editable) return;
        this.handleInputEnter();
        this.inputVisible = false;
      },

      handleInputEnter() {
        if (!this.editable) return;
        const inputValue = this.inputValue;
        if (inputValue) {
          this.tags.push(inputValue);
        }
        this.inputValue = '';
      },
    },
  };
</script>
