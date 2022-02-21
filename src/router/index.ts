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
    meta: {
      breadcrumb: {
        title: "About",
        name: "about-index",
      },
    },
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
        component: Resource,
        meta: {
          breadcrumb: {
            title: "Pets",
            name: "about-pets",
          },
        },
        children: [
          {
            path: "",
            name: "about-pets",
            component: () => import("../pages/Pets.vue"),
            meta: {
              layout: "default",
            },
          },
          {
            path: "dog",
            component: Resource,
            meta: {
              breadcrumb: {
                title: "Dog",
                name: "about-pets-dog",
              },
            },
            children: [
              {
                path: "",
                name: "about-pets-dog",
                component: () => import("../pages/dog/Index.vue"),
                meta: {
                  layout: "default",
                },
              },
              {
                path: ":id",
                name: "about-pets-dog-detail",
                component: () => import("../pages/dog/Detail.vue"),
                meta: {
                  layout: "default",
                },
              },
            ],
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
