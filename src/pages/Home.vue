<template>
  <div id="ao-home">
    <Header title="ダッシュ ボード">
      <a-button type="primary" class="flex-center">
        <template #icon
          ><SvgIcon icon="download" class="w-3 h-3 mr-2"
        /></template>
        入力 要項·下書き用シートをダウンロード する</a-button
      >
    </Header>

    <div class="h-96 bg-secondary-200 mb-4"></div>
    <a-button type="primary" @click="showSuccessMessage">Show Message</a-button>
  </div>
</template>

<script lang="ts" setup>
import { onHttpError } from "@/services/message.service";
import Header from "@/components/Header.vue";
import SvgIcon from "@/components/SvgIcon.vue";

const showSuccessMessage = (): void => {
  onHttpError("ログイン時の2段階認証プロセスを無効にしました");
};
</script>
