<template>
  <view class="editor box-shadow">
    <textarea
      v-model.trim="value"
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
      title: "开始输入",
      value: "",
      arrval: []
    };
  },
  methods: {
    onTextarea() {
      console.log(this.value);
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