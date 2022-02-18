import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import Resource from "@/components/Resource.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home-index",
    component: Home,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/about",
    component: Resource,
    children: [
      {
        path: "",
        name: "about-index",
        component: () => import("../pages/About.vue"),
        meta: {
          layout: "default",
        },
      },
      {
        path: "pets",
        name: "about-pets",
        component: () => import("../pages/Pets.vue"),
        meta: {
          layout: "default",
        },
      },
      {
        path: "pets",
        component: Resource,
        children: [
          {
            path: "dog",
            name: "about-pets-dog",
            component: () => import("../pages/Dog.vue"),
            meta: {
              layout: "default",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login-index",
    component: () => import("../pages/Login.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/about/pets/login",
    name: "login-index-pet",
    component: () => import("../pages/Login.vue"),
    meta: {
      layout: "auth",
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
