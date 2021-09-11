import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PoolView from "../views/PoolView.vue";
import PoolInfo from "../views/PoolInfo.vue";
import NFTPool from "../views/NFTPool.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pool",
    name: "PoolView",
    component: PoolView
    // route level code-splitting
    // this generates a separate chunk (PoolView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "PoolView" */ "../views/PoolView.vue")
  },
  {
    path: "/pool/:pool",
    name: "PoolInfo",
    component: PoolInfo
  },
  {
    path: "/nftpool/:nftpool",
    name: "NFTPool",
    component: NFTPool
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
