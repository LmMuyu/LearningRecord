<template>
  <view>
    <FileInfo />
    <FileLabel :list="list" />
  </view>
</template>

<script>
import FileLabel from "./childcomps/FileLabel";
import FIleShow from "./childcomps/FIleShow";
import FileInfo from "./childcomps/FileInfo";

export default {
  components: {
    FileLabel,
    FileInfo,
    FIleShow
  },
  data() {
    return {
      list: [
        {
          id: "shouc",
          name: "收藏"
        },
        {
          id: "xihuan",
          name: "喜欢"
        },
        {
          id: "fangke",
          name: "访客"
        },
        {
          id: "xaingche",
          name: "相册"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>