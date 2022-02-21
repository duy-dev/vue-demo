<template>
  <h1>Dog Details {{ DogID }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    let DogID = route.params.id;

    return { DogID };
  },
});
</script>
