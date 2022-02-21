<template>
  <a-breadcrumb>
    <a-breadcrumb-item
      ><router-link :to="{ name: 'home-index' }"
        >Trang chủ</router-link
      ></a-breadcrumb-item
    >
    <a-breadcrumb-item v-for="(path, index) in pathsBreadcrumb" :key="index"
      ><router-link :to="{ name: path?.name }">{{
        path?.title
      }}</router-link></a-breadcrumb-item
    >
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, watch, ref, computed } from "vue";

import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    let listPath = ref(route.matched);
    watch(route, (newRoute) => {
      listPath.value = newRoute.matched;
    });

    const pathsBreadcrumb = computed(() => {
      let pathsFilter = listPath.value
        .filter((value) => value.meta.breadcrumb)
        .map((value) => value.meta.breadcrumb);
      return pathsFilter;
    });

    return {
      pathsBreadcrumb,
    };
  },
});
</script>

<style scoped lang="scss"></style>
