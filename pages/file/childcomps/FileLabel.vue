<template>
  <view class="flex-jb-a font-size ">
    <view class="padding-16" v-for="item in list" :key="item.id"
      ><text>{{ item.name }}</text></view
    >
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
</style>