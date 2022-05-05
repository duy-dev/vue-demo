<template>
  <div class="flex justify-between items-center mb-4">
    <h4>{{ props.title }}</h4>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
const props = defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss"></style>
