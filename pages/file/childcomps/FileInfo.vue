<template>
  <view class="flex-jd margin-top fileinfo">
    <view>
      <image
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg"
      />
    </view>
    <view class="flex-jd font-size margin-top">
      <text>张三</text>
      <text>lv:14</text>
    </view>
    <view class="flex-jb-a font-size text margin-top">
      <text>收藏:150</text>
      <text>访问:155</text>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style scoped>
image {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
}
.text > text {
  padding: 10rpx;
}
.fileinfo {
  box-shadow: 1rpx 0 1rpx #c8c7cc;
}
</style>