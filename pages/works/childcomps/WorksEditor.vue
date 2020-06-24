<template>
  <view class="editor">
    <textarea
      :value="value"
      v-model="value"
      :placeholder="title"
      @blur="onTextarea"
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
      arrval:[]
    };
  },
  methods: {
    onTextarea() {
            
    }
  },
  mounted() {
    this;
  }
};
</script>

<style lang="scss" scoped>
.editor {
  border: 1rpx solid black;
}
</style>