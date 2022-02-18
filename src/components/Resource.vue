<template>
  <div id="Resource">
    <Breadcrumb />
    <slot>
      <router-view v-if="true" />
    </slot>
  </div>
</template>

<script lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "Resource",
  components: {
    Breadcrumb,
  },
};
</script>

<style scoped></style>
