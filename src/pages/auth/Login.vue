<template>
  <div class="login px-10">
    <div class="mb-4">
      <a-button type="primary" class="mr-6" @click="showSuccessMessage"
        >Primary Button</a-button
      >
      <a-button type="primary" disabled>Primary(disabled)</a-button>
    </div>
    <div class="mb-4">
      <a-button type="primary" size="small" class="mr-6"
        >Primary Button</a-button
      >
      <a-button type="primary" size="small" disabled
        >Primary(disabled)</a-button
      >
    </div>
    <div class="mb-4">
      <a-button class="mr-6">Default Button</a-button>
      <a-button disabled>Default(disabled)</a-button>
    </div>
    <div class="mb-4">
      <a-button size="small" class="mr-6">Default Button</a-button>
      <a-button size="small" disabled>Default(disabled)</a-button>
    </div>
    <div class="mb-4">
      <a-button type="primary" class="mr-6" danger>Danger Button</a-button>
      <a-button type="primary" disabled danger>Danger(disabled)</a-button>
    </div>
    <div class="mb-4">
      <a-button type="primary" size="small" danger class="mr-6"
        >Danger Button</a-button
      >
      <a-button type="primary" size="small" danger disabled
        >Danger(disabled)</a-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onHttpSuccess } from "@/services/message.service";

const showSuccessMessage = (): void => {
  onHttpSuccess("ログイン時の2段階認証プロセスを無効にしました");
};
</script>
