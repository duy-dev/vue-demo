<template>
  <div id="ao-footer" class="flex justify-end text-sm text-gray-35 mt-6">
    <div id="ao-footer-link" class="flex mr-2">
      <router-link :to="{ name: 'about-index' }" class="px-2"
        >お問い合わせ</router-link
      >
      <router-link :to="{ name: 'about-index' }" class="px-2"
        >個人情報保護方針</router-link
      >
      <router-link :to="{ name: 'about-index' }" class="px-2"
        >利用規約</router-link
      >
    </div>
    <p class="px-4">© 2022 Japan Active Learning Association.</p>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
