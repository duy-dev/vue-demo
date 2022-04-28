<template>
  <div
    id="ao-navbar"
    class="flex justify-between items-center h-16 bg-gray-94 border-solid border-b border-gray-85"
  >
    <div class="flex-auto"></div>
    <div class="flex items-center px-6">
      <SvgIcon icon="notification" class="w-7 h-7 text-gray-55 mr-6" />
      <a-popover
        v-model:visible="visibleMenuUser"
        trigger="click"
        placement="bottomRight"
        class="flex items-center h-10 cursor-pointer"
      >
        <template #content>
          <div class="w-40">
            <div
              class="flex items-center px-4 py-2 cursor-pointer rounded text-red-400 hover:text-red-500 bg-gray-92 hover:bg-gray-85"
              @click="visibleMenuUser = !visibleMenuUser"
            >
              <logout-outlined class="mr-2" /> Đăng xuất
            </div>
          </div>
        </template>
        <a-avatar class="bg-gray-55" size="large">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <p class="ml-2">D.Zuy</p>
      </a-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const visibleMenuUser = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
