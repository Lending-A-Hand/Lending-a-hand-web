import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PoolPage from "../views/PoolPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pool",
    name: "PoolPage",
    component: PoolPage
    // route level code-splitting
    // this generates a separate chunk (PoolPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "PoolPage" */ "../views/PoolPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
