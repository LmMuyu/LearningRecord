<template>
  <view>
    <swiper>
      <swiper-item> </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  created() {
    this.getSystemInfo();
  },
  methods: {
    getSystemInfo() {
      uni.getSystemInfo({
        success: res => {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style scoped>
</style>