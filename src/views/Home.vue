<template>
  <div class="home">
    <div class="header">
      <div class="header_top">
        <img src="../../public/img/logo.png" alt />
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <input placeholder="请输入搜索关键词" show-action shape="round" />
        </div>
        <i class="iconfont icon-iconfontwode2eps" id="top"></i>
      </div>
    </div>
    <section class="container">
      <van-tabs class="header_nav" v-model="active">
        <van-tab title="推荐" name="a"></van-tab>
        <van-tab title="手机" name="b" style="background-color: rgb(186, 25, 39);">
          <a href>
            <img
              class="banner"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2842bb6a3604534351e86254481f4bf3.jpg?thumb=1&w=720&h=606"
              alt
            />
          </a>
          <a href>
            <img
              class="banner_b"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a2b0f12e3d6457234aff41568cd4f97.jpg?thumb=1&w=720&h=107"
              alt
            />
          </a>
          <div class="item">
            <a href>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1edf0aa17b746224815f73d8c4cfea05.jpg?thumb=1&w=688&h=367"
                alt
              />
            </a>
            <div class="items">
              <div class="item_left">
                <h2>小米CC9e</h2>
                <p>3200万自拍，索尼4800万三摄</p>
              </div>
              <div class="item_right">
                <h3>
                  ￥1099
                  <span>起</span>
                </h3>
                <div class="button">立即购买</div>
              </div>
            </div>
          </div>
          <div class="good_list">
            <div class="good">
              <img
                @click="Detail()"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f3bc3be9c245ddb4a0b04dcbc8931fc.jpg?thumb=1&w=338&h=338"
                alt
              />
              <h3>Redmi 8A</h3>
              <p>5000mAh超长续航</p>
              <span>￥699</span>
              <div class="good_button">立即购买</div>
            </div>
            <div class="good">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f3bc3be9c245ddb4a0b04dcbc8931fc.jpg?thumb=1&w=338&h=338"
                alt
              />
              <h3>Redmi 8A</h3>
              <p>5000mAh超长续航</p>
              <span>￥699</span>
              <div class="good_button">立即购买</div>
            </div>
            <div class="good">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f3bc3be9c245ddb4a0b04dcbc8931fc.jpg?thumb=1&w=338&h=338"
                alt
              />
              <h3>Redmi 8A</h3>
              <p>5000mAh超长续航</p>
              <span>￥699</span>
              <div class="good_button">立即购买</div>
            </div>
            <div class="good">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f3bc3be9c245ddb4a0b04dcbc8931fc.jpg?thumb=1&w=338&h=338"
                alt
              />
              <h3>Redmi 8A</h3>
              <p>5000mAh超长续航</p>
              <span>￥699</span>
              <div class="good_button">立即购买</div>
            </div>
            <img
              src="https://m.mi.com/static/img/top.451d650ecd.png"
              class="scrollTop"
              @click="backTop()"
              v-if="btnFlag"
            />
          </div>
        </van-tab>
        <van-tab title="智能" name="c"></van-tab>
        <van-tab title="电视" name="a"></van-tab>
        <van-tab title="笔记本" name="b"></van-tab>
        <van-tab title="家电" name="c"></van-tab>
        <van-tab title="生活周边" name="c"></van-tab>
      </van-tabs>
    </section>
    <div class="footer">
      <van-tabbar route>
        <van-tabbar-item icon="van-icon van-icon-wap-home-o" :to="{ name: 'home' }">首页</van-tabbar-item>
        <van-tabbar-item icon="van-icon van-icon-qr" :to="{ name: 'Hot' }">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" :to="{ name: 'Fav' }">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" :to="{ name: 'User' }">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import "../../public/css/reset.css";
import "../../public/font/iconfont.css";

export default {
  // name: "home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      active: 2,
      btnFlag: false
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    // backTop() {
    //   document.body.scrollTop = 0;
    //   document.documentElement.scrollTop = 0;
    // }
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    Detail() {
      this.$router.push({
        name: "Detail"
      });
    }
  }
};
</script>
<style>
.scrollTop {
  position: fixed;
  bottom: 100px;
  right: 35px;
  width: 36px;
  height: 36px;
}
.good_list {
  display: flex;
  margin-top: 5px;
  width: 375px;
  flex-wrap: wrap;
}
.good {
  border-radius: 4px;
  width: 176px;
  height: 291px;
  background: #fff;
  margin-left: 8px;
  margin-top: 6px;
}
.good h3 {
  font-weight: 900;
  font-size: 0.32rem;
  color: #3c3c3c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 0.5rem;
}
.good p {
  text-align: center;
  line-height: 0.5rem;
}
.good img {
  border-radius: 5px;
  width: 176px;
  height: 176px;
}
.good span {
  font-size: 0.28rem;
  text-align: center;
  display: block;
  color: rgb(245, 75, 75);
  font-weight: 900;
  line-height: 0.5rem;
}
.good_button {
  width: 91px;
  height: 25px;
  background: rgb(245, 75, 75);
  color: #fff;
  text-align: center;
  line-height: 25px;
  margin-left: 42px;
  margin-top: 6px;
}
.item_right h3 {
  color: #ff4a48;
  font-weight: bold;
  padding-top: 0.28rem;
}
.button {
  width: 114px;
  height: 25px;
  background: #ff4a48;
  color: #fff;
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  border-radius: 3px;
}
.items {
  display: flex;
}
.footer {
  height: 50px;
}
.header {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 43px;
  background: #f2f2f2;
  /* display: flex; */
  flex-direction: column;
}
.header_top {
  /* width: 100%; */
  height: 43px;
  /* background: #ccc; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header_top img {
  padding-left: 8px;
  padding-right: 8px;
  width: 25px;
  height: 16px;
}
.header_top input {
  width: 270px;
  height: 33px;
  font-size: 15px;
}
.search {
  width: 286px;
  border: 1px solid #e5e5e5;
  background: #fff;
}
.search i {
  color: #b2b2b2;
}
#top {
  color: #838383;
  font-size: 21px;
}
.search input {
  border: none;
}
.search input::placeholder {
  color: #b2b2b2;
  text-indent: 10px;
}
/* .header_nav {
  background: #f2f2f2;
} */

.container {
  flex: 1;
  overflow-y: auto;
  /* background: rgb(186, 25, 39); */
  background-color: rgb(186, 25, 39);
  position: absolute;
  top: 0.8rem;
  left: 0;
  right: 0;
  margin-bottom: 50px;
}
.banner {
  width: 100%;
  height: 315px;
}
.banner_b {
  width: 100%;
  height: 55px;
}
.item {
  width: 358px;
  height: 265px;
  background: #fff;
  margin-left: 10px;
  border-radius: 5px;
}
.item img {
  width: 358px;
  height: 191px;
  border-radius: 5px;
}
.item_left {
  width: 204px;
  margin-left: 0.2rem;
  padding-left: 0.28rem;
  padding-top: 0.28rem;
}
.item_left h2 {
  font-weight: 900;
  font-size: 0.32rem;
  color: #3c3c3c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item_left p {
  font-size: 0.2rem;
  color: #3c3c3c;
  height: 1.5em;
  line-height: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
