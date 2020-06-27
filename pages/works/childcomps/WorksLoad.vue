<template>
  <view>
    <robbyImageUpload @add="renderImage" />
    <view v-for="(item, index) in items" :key="index">
    </view>
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
      this.renImage = imgArr.currentImages;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>