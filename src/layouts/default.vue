<template>
  <h1>Default layout</h1>
  <Breadcrumb />
  <slot />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default defineComponent({
  components: {
    Breadcrumb,
  },
});
</script>
