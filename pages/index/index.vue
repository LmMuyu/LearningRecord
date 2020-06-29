<template>
  <view>
    <!--logo-->
    <IndexHeadImage />
    <!--发布-->
    <IndexCenterRelease @click.native="openWorks" />
    <!--标签-->
    <IndexLabel @openPath="openPath" />
  </view>
</template>

<script>
import IndexLabel from "./childcomps/IndexLabel";
import IndexHeadImage from "./childcomps/IndexHeadImage.vue";
import IndexCenterRelease from "./childcomps/IndexCenterRelease";

export default {
  components: {
    IndexLabel,
    IndexHeadImage,
    IndexCenterRelease
  },
  data() {
    return {};
  },
  created() {},
  onLoad() {},
  methods: {
    openWorks() {
      uni.navigateTo({
        url: "../works/Works"
      });
    },
    openPath(path) {
      uni.navigateTo({
        url: path
      });
    }
  }
};
</script>

<style scoped></style>
