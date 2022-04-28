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
      <a-layout-header class="h-fit">
        <Navbar />
      </a-layout-header>
      <a-layout-content class="p-6 bg-white h-full flex-grow overflow-y-auto">
        <div id="ao-content">
          <Breadcrumb />
          <slot />
        </div>
        <Footer />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Sidebar from "@/layouts/components/Sidebar.vue";
import Navbar from "@/layouts/components/Navbar.vue";
import Footer from "@/layouts/components/Footer.vue";

const handleToggle = () => {
  collapsed.value = !collapsed.value;
};
const collapsed = ref<boolean>(false);
</script>

<style lang="scss" scoped>
#ao-content {
  min-height: calc(100vh - 156px);
}
</style>
