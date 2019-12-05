import Vue from "vue";
import Vant from "vant";
import App from "./App.vue";
import router from "./router";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
