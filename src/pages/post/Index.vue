<template>
  <div id="ao-list-post">
    <ul class="list-disc py-2">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post-detail', params: { id: post.id } }">{{
          post.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import PostRepository, { IPost } from "./post.repository";

let posts = reactive<IPost[]>([]);
const fetchPostList = async (): Promise<IPost[]> => {
  try {
    const params = {
      _page: 1,
      _limit: 10,
    };
    const { data } = await PostRepository.all(params);
    return data;
  } catch (error) {
    return [];
  }
};
posts = await fetchPostList();
</script>
