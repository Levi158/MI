<template>
  <div class="User">
    <div class="top">
      <div class="shadow">
        <img src="../assets/img/touXiang.png" alt="" />
      </div>
      <span>登录/注册</span>
    </div>
    <div class="dingDan">
      <span>我的订单</span>
      <div>
        <span>全部订单 </span>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-grid :column-num="3">
      <van-grid-item icon="paid" text="代付款" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="exchange" text="退换修" />
    </van-grid>

    <div class="ui-line"></div>
    <dl class="user-dl">
      <dd>
        <van-icon name="vip-card" />
      </dd>
      <dt>
        <span>会员中心</span>
        <van-icon name="arrow" />
      </dt>
    </dl>
    <dl class="user-dl">
      <dd>
         <van-icon name="card" />
      </dd>
      <dt class="bian">
        <span>我的优惠</span>
       <van-icon name="arrow" />
      </dt>
    </dl>

     <div class="ui-line"></div>
    <dl class="user-dl">
      <dd>
        <van-icon name="like" />
      </dd>
      <dt>
        <span>服务中心</span>
        <van-icon name="arrow" />
      </dt>
    </dl>
    <dl class="user-dl">
      <dd>
       <van-icon name="shop" />
      </dd>
      <dt class="bian">
        <span>小米之家</span>
       <van-icon name="arrow" />
      </dt>
    </dl>

     <div class="ui-line"></div>
    <dl class="user-dl">
      <dd>
         <van-icon name="smile" />
      </dd>
      <dt>
        <span>我的F码</span>
       <van-icon name="arrow" />
      </dt>
    </dl>
    <dl class="user-dl">
      <dd>
         <van-icon name="point-gift" />
      </dd>
      <dt class="bian">
        <span>礼物码兑换</span>
      <van-icon name="arrow" />
      </dt>
    </dl>

     <div class="ui-line"></div>
    <dl class="user-dl">
      <dd>
        <van-icon name="setting" />
      </dd>
      <dt class="bian">
        <span>设置</span>
       <van-icon name="arrow" />
      </dt>
    </dl>
    
  </div>
</template>
<style scoped>
.User {
  width: 100%;
  height: 12.9rem;
  color: rgba(0,0,0,0.87);
  overflow: auto;
  padding-bottom: .7rem;
  font-size: 0.22rem;
}
.top {
  height: 1rem;
  background: url(../assets/img/beiJing.png) center 0 #f37d0f;
  background-size: auto 100%;
  padding: 0.32rem 0;
  position: relative;
}
.shadow {
  height: 0.88rem;
  width: 0.88rem;
  background: #ffb500;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(245, 233, 165, 0.5);
  position: absolute;
  left: 0.34rem;
  top: 0.32rem;
}

.shadow img {
  height: 0.88rem;
}
.top span {
  font-size: 0.28rem;
  color: #fff;
  position: absolute;
  top: 0.6rem;
  left: 1.5rem;
}
.dingDan {
  height: 0.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-right: 0.56rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.29rem;
  position: relative;
}
.dingDan > span {
  margin-left: 0.33rem;
}
.dingDan > div > span {
  font-size: 0.25rem;
}
.dingDan > div .van-icon-arrow:before {
  position: absolute;
  top: -0.28rem;
  right: -0.35rem;
  font-size: 0.4rem;
}
.van-grid-item__icon{
  font-size: 0.56rem;
}


.van-grid {
  height: 1.77rem;
}
.ui-line{
  height: .2rem;
  background: #f5f5f5;
}

.user-dl{
  height: 1.08rem;
  background: #fff;
}
.user-dl dd{
  height: 1.08rem;
  width: 16%;
  float: left;
  text-align: center;
 
 
}
.van-icon-vip-card:before{
  font-size: 0.6rem;
   line-height: 1.08rem;
   color: #fdbf2d;
}
.van-icon-card:before{
  font-size: 0.55rem;
   line-height: 1.08rem;
   color: #51bbe0;
}
.van-icon-like:before{
 font-size: 0.55rem;
   line-height: 1.08rem;
   color: #f96c5e;
}
.van-icon-shop:before{
 font-size: 0.55rem;
   line-height: 1.08rem;
   color: #ff8b43;
}
.van-icon-smile:before{
 font-size: 0.55rem;
   line-height: 1.08rem;
   color: #ffb500;
}
.van-icon-point-gift:before{
 font-size: 0.55rem;
   line-height: 1.08rem;
   color: #f5a623;
}
.van-icon-setting:before{
 font-size: 0.55rem;
   line-height: 1.08rem;
   color: #818c99;
}


.user-dl dt{
  height: 1.08rem;
  padding-right: .3rem;
  width: 80%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  float: right;
  font-size: .29rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
}
.user-dl .bian{
  border: none;
}
</style>
