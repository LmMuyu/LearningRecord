<template>
  <view>
    <!--logo-->
    <IndexHeadImage />
    <!--发布-->
    <IndexCenterRelease />
  </view>
</template>

<script>
import IndexHeadImage from "./childcomps/IndexHeadImage.vue";
import IndexCenterRelease from "./childcomps/IndexCenterRelease";

export default {
  components: {
    IndexHeadImage,
    IndexCenterRelease
  },
  data() {
    return {};
  },
  created() {},
  onLoad() {},
  methods: {}
};
</script>

<style scoped></style>
