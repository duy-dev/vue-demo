<template>
  <a-breadcrumb>
    <a-breadcrumb-item
      ><router-link :to="{ name: 'home-index' }"
        >Trang chủ</router-link
      ></a-breadcrumb-item
    >
    <a-breadcrumb-item v-for="(path, index) in pathsBreadcrumb" :key="index"
      ><router-link :to="{ name: path.name }">{{
        path.title
      }}</router-link></a-breadcrumb-item
    >
  </a-breadcrumb>
</template>

<script lang="ts" setup>
import { watch, ref, computed } from "vue";
import { RouteLocationMatched, useRoute } from "vue-router";

type PathBreadcrumb = RouteLocationMatched & { title: string };

const route = useRoute();
let listPath = ref(route.matched);

watch(route, (newRoute) => {
  listPath.value = newRoute.matched;
});
const pathsBreadcrumb = computed((): PathBreadcrumb[] => {
  let pathsFilter = (
    listPath.value.filter((value) => value.meta.breadcrumb) as PathBreadcrumb[]
  ).map((value) => value.meta.breadcrumb) as PathBreadcrumb[];
  return pathsFilter;
});
</script>

<style scoped lang="scss"></style>
