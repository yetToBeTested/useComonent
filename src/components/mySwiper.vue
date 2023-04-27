<template>
  <!-- <div></div> -->
  <swiper :navigation="true" :modules="[Navigation]">
    <swiper-slide><img src="../assets/img/1.jpg" alt="1.jpg" /></swiper-slide>
    <swiper-slide><img src="../assets/img/2.jpg" alt="2.jpg" /></swiper-slide>
    <swiper-slide><img src="../assets/img/3.jpg" alt="3.jpg" /></swiper-slide>
    <swiper-slide><img src="../assets/img/4.jpg" alt="4.jpg" /></swiper-slide>
    <swiper-slide><img src="../assets/img/5.jpg" alt="5.jpg" /></swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
// const onSwiper = (swiper: any) => {
//   console.log(swiper)
// }
// const onSlideChange = () => {
//   console.log('slide change')
// }
</script>

<style scoped lang="less">
.swiper {
  @var: 25px;
  width: 100vw;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 800px;
  height: 400px;
  object-fit: cover;
}
</style>
