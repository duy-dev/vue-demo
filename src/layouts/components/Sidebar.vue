<template>
  <div id="ao-sidebar" class="h-full flex flex-col">
    <div class="flex items-center justify-center flex-none h-16">
      <div v-if="!props.collapsed" class="logo flex-auto" />
      <div class="text-gray-100 text-xl mx-4 flex items-center justify-center">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="onToggleSidebar"
        />
        <menu-fold-outlined v-else class="trigger" @click="onToggleSidebar" />
      </div>
    </div>

    <a-menu
      class="flex-auto"
      theme="dark"
      mode="inline"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item
        v-for="navigation in NAVIGATIONS"
        :key="navigation.group"
        @click="navigatePage(navigation.nameUrl)"
      >
        <template #icon>
          <SvgIcon :icon="navigation.icon" class="w-4 h-4 text-white" />
        </template>
        <span>{{ navigation.title }}</span>
      </a-menu-item>
    </a-menu>
    <a-menu
      class="flex-none"
      :style="{ marginBottom: 60 + 'px' }"
      theme="dark"
      mode="inline"
    >
      <a-menu-item key="logout" @click="handleLogout()">
        <template #icon>
          <SvgIcon icon="logout" class="w-4 h-4 text-white" />
        </template>
        <span>ログアウト</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import SvgIcon from "@/components/SvgIcon.vue";
import { NAVIGATIONS } from "@/uses/constants/navigations";
import { defineEmits, defineProps } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const route = useRoute();
let selectedKeys = ref<string[]>([route.meta.group]);
const props = defineProps<{
  collapsed: boolean;
}>();

const emit = defineEmits<{
  (e: "toggleSidebar"): void;
}>();

watch(route, (newRoute) => {
  selectedKeys.value = [newRoute.meta.group];
});

// Function
const onToggleSidebar = () => {
  emit("toggleSidebar");
};
const navigatePage = (name: string | undefined) => {
  router.push({ name: name });
};
const handleLogout = (): void => {
  navigatePage("login-index");
};
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px 0 16px 16px;
  width: auto;
}

.ant-menu-item-icon {
  @apply w-4 h-4;
}
</style>
