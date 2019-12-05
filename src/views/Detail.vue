<template>
  <div class="detail">
    <div class="pic">
      <img
        class="big"
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c51dce873f5ac2c81531008f51a213.jpg"
        alt
      />
      <a href class="header-btn">
        <van-icon name="arrow-left" class="jiantou" style="font-size: 20px;" />
      </a>
    </div>
    <div class="d_content">
      <h1 class="gooods_name">Redmi Note 8 Pro</h1>
      <p
        class="introduce"
      >6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速</p>
      <span class="d_price">￥1499</span>
    </div>
    <van-goods-action style="z-index:999">
      <van-goods-action-icon icon="van-icon van-icon-wap-home-o" text="首页" @click="onHome" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    onHome() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style>
.d_price {
  color: #ff6700;
  font-size: 0.48rem;
  line-height: 1.5em;
}
.introduce {
  line-height: 1.5em;
  color: rgba(0, 0, 0, 0.54);
}
.d_content {
  width: 341px;
  margin-left: 15px;
  margin-top: 20px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.gooods_name {
  margin-top: 10px;
}
.jiantou {
  margin-left: 3px;
  margin-top: 5px;
  font-size: 16px;
}
.big {
  width: 100%;
}

.header-btn {
  position: absolute;
  top: 10px;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 0.2rem;
  color: #ddd;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
}
</style>