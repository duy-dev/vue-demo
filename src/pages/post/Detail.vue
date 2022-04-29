<template>
  <h1 class="py-2">Post Details - {{ post.id }}: {{ post.title }}</h1>
  <p class="text-gray-35">{{ post.body }}</p>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import PostRepository, { IPost } from "./post.repository";

const route = useRoute();
const postId = route.params.id;

const fetchPost = async (id: string): Promise<IPost> => {
  try {
    const { data } = await PostRepository.find(id, {});
    return data;
  } catch (error) {
    return {};
  }
};
let post = reactive<IPost>({});
post = await fetchPost(postId + "");
</script>
