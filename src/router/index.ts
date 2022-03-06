import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lottery",
    name: "Lottery",
    component: () =>
      import(/* webpackChunkName: "lottery" */ "../views/lottery"),
  },
  {
    path: "/subway",
    name: "Subway",
    component: () => import(/* webpackChunkName: "subway" */ "../views/subway"),
  },
  {
    path: "/time",
    name: "Time",
    component: () => import(/* webpackChunkName: "time" */ "../views/time"),
  },
  {
    path: "/img2pdf",
    name: "Image2PDF",
    component: () =>
      import(/* webpackChunkName: "img2pdf" */ "../views/image-2-pdf"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "setting" */ "../views/setting"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import(/* webpackChunkName: "todo" */ "../views/todo"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "todo" */ "../views/test"),
  },
];
console.log("process.env.BASE_URL", process.env.BASE_URL);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
