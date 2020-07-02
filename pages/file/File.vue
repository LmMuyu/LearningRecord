<template>
  <view>
    <FileInfo />
    <FileLabel :list="list" />

    <!--滑屏-->
    <FileShow>
      <template v-slot="{ listData }">
        <view>
          {{ listData }}
        </view>
      </template>
    </FileShow>
  </view>
</template>

<script>
import FileLabel from "./childcomps/FileLabel";
import FileShow from "./childcomps/FileShow";
import FileInfo from "./childcomps/FileInfo";

export default {
  components: {
    FileLabel,
    FileInfo,
    FileShow
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