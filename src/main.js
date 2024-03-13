import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";

Vue.use(Router);
import HomeCom from "./components/HomeCom";
import LoginCom from "./components/LoginCom";
import GetApi from "./components/GetApi";
import CardsData from "./components/CardsData";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeCom,
  },
  {
    path: "/carditem",
    name: "CardsData",
    component: CardsData,
  },
  {
    path: "/getapi",
    name: "GetApi",
    component: GetApi,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginCom,
  },
];
const router = new Router({
  routes,
  // mode: 'history'
});
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
