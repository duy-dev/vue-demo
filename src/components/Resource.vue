<template>
  <div id="Resource">
    <slot>
      <router-view v-if="true" />
    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Resource",
};
</script>

<style scoped></style>
