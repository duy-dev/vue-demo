<template>
  <a-layout class="h-screen">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :width="250"
    >
      <Sidebar @toggleSidebar="handleToggle" :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout class="h-screen flex flex-col">
      <!-- <a-layout-header class="h-fit">
        <Navbar />
      </a-layout-header> -->
      <a-layout-content class="p-6 bg-white h-full flex-grow overflow-y-auto">
        <div id="ao-content">
          <!-- <Breadcrumb /> -->
          {{}}
          <slot />
        </div>
        <Footer />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Sidebar from "@/layouts/components/Sidebar.vue";
import Footer from "@/layouts/components/Footer.vue";

document.documentElement.style.setProperty(
  "--position-left-notification",
  "250px"
);
const collapsed = ref<boolean>(false);
const handleToggle = () => {
  collapsed.value = !collapsed.value;
  document.documentElement.style.setProperty(
    "--position-left-notification",
    `${collapsed.value ? 80 : 250}px`
  );
};
</script>

<style lang="scss" scoped>
#ao-content {
  min-height: calc(100vh - 92px);
}
</style>
