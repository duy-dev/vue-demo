import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
    meta: {
      layout: "default",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../pages/error/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
