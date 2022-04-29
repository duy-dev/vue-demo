<template>
  <component
    :class="[{ rotating: spin }, props.class]"
    class="fill-current"
    :is="loadedIcon"
    :name="icon"
    v-bind="$attrs"
    :style="{
      transform: `rotate(${rotate}deg)`,
    }"
  />
</template>

<script lang="ts" setup>
import { ref, defineProps, markRaw, withDefaults } from "@vue/runtime-core";
interface Props {
  icon: string;
  class: string;
  rotate?: string | number;
  spin?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  spin: false,
});
const loadedIcon = ref(null);

import(`@/assets/icons/${props.icon}.svg`)
  .then((module) => {
    loadedIcon.value = markRaw(module.default);
  })
  .catch(console.error.bind(console));
</script>

<style lang="scss" scoped>
@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

.rotating {
  -webkit-animation: rotating 2s linear infinite;
}
</style>
