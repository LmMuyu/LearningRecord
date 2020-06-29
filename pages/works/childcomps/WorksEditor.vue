<template>
  <view class="editor box-shadow">
    <textarea
      :placeholder="title"
      @blur="onTextarea"
      :maxlength="-1"
      class="font-size textarea"
    />
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      title: "开始输入"
    };
  },
  methods: {
    onTextarea(e) {
      this.$emit("update:onTextarea",e.target.value)
    }
  },
  mounted() {
    this;
  }
};
</script>

<style lang="scss" scoped>
.editor {
  padding: 16rpx;
}
.textarea {
  width: 100%;
}
</style>