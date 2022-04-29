<template>
  <div id="ao-home">
    <div class="h-96 bg-secondary-200 mb-4"></div>
    <a-button type="primary" @click="showSuccessMessage">Show Message</a-button>
    <!-- <div class="h-96 bg-blue-200 mb-4"></div> -->
  </div>
</template>

<script lang="ts" setup>
import { onHttpError } from "@/services/message.service";

const showSuccessMessage = (): void => {
  onHttpError("ログイン時の2段階認証プロセスを無効にしました");
};
</script>
