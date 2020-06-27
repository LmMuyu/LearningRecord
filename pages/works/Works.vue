<template>
  <view>
    <WorkesFeatures />
    <WorksEditor />
    <WorksLoad />
  </view>
</template>

<script>
import WorkesFeatures from "./childcomps/WorkesFeatures";
import WorksEditor from "./childcomps/WorksEditor";
import WorksLoad from "./childcomps/WorksLoad";

export default {
  components: {
    WorkesFeatures,
    WorksEditor,
    WorksLoad
  },
  data() {
    return {};
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
</style>