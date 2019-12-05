<template>
  <div id="app">
    <router-view />
    <van-tabbar :route="true">
      <van-tabbar-item icon="van-icon van-icon-wap-home-o" :to="{ name: 'home' }">首页</van-tabbar-item>
      <van-tabbar-item icon="van-icon van-icon-qr" :to="{ name: 'Fenlei' }">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :to="{ name: 'Car' }">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" :to="{ name: 'user' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
<style>
</style>
