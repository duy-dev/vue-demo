<template>
  <a-config-provider :locale="language">
    <component :is="layout">
      <!-- <div id="nav">
        <router-link :to="{ name: 'home-index' }">Home</router-link> |
        <router-link :to="{ name: 'about-index' }">About</router-link> |
        <router-link :to="{ name: 'login-index' }">Login</router-link>
      </div> -->
      <router-view />
    </component>
  </a-config-provider>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const language = computed(() => store.state.language.language);
const layout = computed(() => (route.meta.layout || "default") + "-layout");
</script>
