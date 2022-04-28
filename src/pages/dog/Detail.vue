<template>
  <h1>Dog Details {{ DogID }}</h1>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const DogID = route.params.id;
</script>
