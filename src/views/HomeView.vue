<template>
  <div class="home">
    <router-link to="/swiper">Swiper</router-link>
    <router-link to="/calc">计算器</router-link>
    <router-link to="/test">Test</router-link>
  </div>
  <div class="compont">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.home {
  background-color: #1d365d;
  height: 50px;
  margin-bottom: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-align: center;
    color: #fff;
    flex: 1;
  }
}
.compont {
  @var: 51px;
  height: calc(100vh - @var);
  width: 100vw;
  background: url('../assets/img/2.jpg') no-repeat center 0;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
