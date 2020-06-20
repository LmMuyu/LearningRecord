<template>
  <view>
    <view class="flex">
      <image class="flex-jc img-wh-br" :src="getHomeImage" />
    </view>
  </view>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getHomeImage"])
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
}
</style>