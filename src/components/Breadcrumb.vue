<template>
  <a-breadcrumb>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import { useRoute } from "vue-router";
export default defineComponent({
  // props: {
  //   breadcrumb: {
  //     type: String,
  //     required: true,
  //   },
  // },

  setup() {
    const route = useRoute();
    console.log(route);
    watch(route, (pa) => {
      console.log(pa);
    });
    //console.log(route);

    return {};
  },
});
</script>

<style scoped lang="scss"></style>
