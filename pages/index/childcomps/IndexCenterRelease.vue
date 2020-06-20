<template>
  <view class="flex-jc">
    <view class="text_padd">
      <i class="iconfont">&#xe667;</i>
      <text>发布作品</text>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text_padd {
  padding: 26rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1d8e0;
  border-radius: 8rpx;
}

.text_padd > text {
  font-size: 32rpx;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>