<template>
  <view>
    <WorkesFeatures />
    <WorksEditor :onTextarea.sync="textarea" />
    <robbyImageUpload :value="renImage" v-model="renImage" @add="renderImage" />
  </view>
</template>

<script>
import robbyImageUpload from "@/components/robby-image-upload/robby-image-upload.vue";

import WorkesFeatures from "./childcomps/WorkesFeatures";
import WorksEditor from "./childcomps/WorksEditor";

export default {
  components: {
    robbyImageUpload,
    WorkesFeatures,
    WorksEditor
  },
  data() {
    return {
      renImage: [], //渲染的图片
      textarea: ""
    };
  },
  watch: {},
  mounted() {
    this.$once("hook:beforeDestroy", () => {
      console.log("离开了");
    });
  },
  methods: {
    renderImage(imgArr) {
      if (imgArr.length > 0) {
        this.renImage = imgArr;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>