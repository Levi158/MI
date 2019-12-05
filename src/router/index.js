import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fenlei from "../views/Fenlei.vue";
import Detail from "../views/Detail.vue";
import User from '../views/User.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/f",
    name: "Fenlei",
    component: Fenlei
  },
  {
    path: "/D",
    name: "Detail",
    component: Detail
  }
  ,
  {
    path:'/user',
    name:'user',
    component:User
  }
  // {
  // path: "/about",
  // name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
