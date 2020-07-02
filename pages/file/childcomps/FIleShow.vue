<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in listNum" :key="index">
      <slot :listData="listData"></slot>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directive: {
    swiper: directive
  },
  props: {
    listNum: {
      type: Number,
      default: 0
    },
    listData: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    swiper: this.$refs.mySwiper.$swiper
  },
  data() {
    return {
      swiperOptions: {}
    };
  },
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
  },
  mounted() {
    console.log(this.swiper);
  }
};
</script>

<style scoped>
</style>