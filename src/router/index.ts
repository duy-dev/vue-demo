import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import Resource from "@/components/Resource.vue";

export {};

import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // is optional
    group: string;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home-index",
    component: Home,
    meta: {
      layout: "default",
      group: "home",
    },
  },
  {
    path: "/post",
    component: Resource,
    meta: {
      breadcrumb: {
        title: "Post",
        name: "post-index",
      },
      group: "post",
    },
    children: [
      {
        path: "",
        name: "post-index",
        component: () => import("../pages/post/Index.vue"),
        meta: {
          layout: "default",
          group: "post",
        },
      },
      {
        path: ":id",
        name: "post-detail",
        component: () => import("../pages/post/Detail.vue"),
        meta: {
          layout: "default",
          group: "post",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login-index",
    component: () => import("../pages/auth/Login.vue"),
    meta: {
      layout: "auth",
      group: "auth",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "404-route",
    component: () => import("../pages/error/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
