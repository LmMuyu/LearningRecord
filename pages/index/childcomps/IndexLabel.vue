<template>
  <view class="flex">
    <view class="text" v-for="item in label" :key="item.id">
      <i class="iconfont">&#xe669;</i>
      <text class="font-size flex-ac" @click="openPath(item.path)">{{
        item.title
      }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      label: [
        {
          id: "contents",
          title: "目录"
        },
        {
          id: "file",
          title: "个人中心",
          path: "../file/File"
        }
      ]
    };
  },
  methods: {
    openPath(path) {
      this.$emit("openPath",path)
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  padding: 10rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.text {
  display: flex;
  align-items: center;
  padding: 10rpx;
  i {
    font-size: 38rpx;
  }
}
</style>
