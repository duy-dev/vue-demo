<template>
  <a-config-provider :locale="language">
    <component :is="layout">
      <div id="nav">
        <router-link :to="{ name: 'home-index' }">Home</router-link> |
        <router-link :to="{ name: 'about-index' }">About</router-link> |
        <router-link :to="{ name: 'login-index' }">Login</router-link>
      </div>
      <router-view />
    </component>
  </a-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    return {
      language: computed(() => store.state.language.language),
      layout: computed(() => (route.meta.layout || "default") + "-layout"),
    };
  },
};
</script>
