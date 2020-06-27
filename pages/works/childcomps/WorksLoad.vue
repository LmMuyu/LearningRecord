<template>
  <view>
    <robbyImageUpload @add="renderImage" />
    <view></view>
  </view>
</template>

<script>
import robbyImageUpload from "@/components/robby-image-upload/robby-image-upload.vue";

export default {
  components: {
    robbyImageUpload
  },
  data() {
    return {
      renImage: [] //渲染的图片
    };
  },
  methods: {
    renderImage(imgArr) {
      console.log(imgArr);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>