<template>
  <div id="ao-sidebar">
    <div class="flex items-center justify-center h-16">
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

    <a-menu theme="dark" mode="inline">
      <a-menu-item key="1">
        <template #icon>
          <UserOutlined />
        </template>
        <span>受験用URLの発行</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <VideoCameraOutlined />
        </template>
        <span>発行済URL·フィードバック</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <UploadOutlined />
        </template>
        <span>アカウント設定</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineEmits, defineProps } from "@vue/runtime-core";
const props = defineProps<{
  collapsed: boolean;
}>();

const emit = defineEmits<{
  (e: "toggleSidebar"): void;
}>();

const onToggleSidebar = () => {
  emit("toggleSidebar");
};
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px 0 16px 16px;
  width: auto;
}
</style>
