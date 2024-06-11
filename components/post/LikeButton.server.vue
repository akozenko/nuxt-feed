<template>
  <PostLikeSnippet
    :post-id="postId"
    :is-liked-by-me="isLikedByMe"
    :count="count"
  />
</template>
<script setup lang="ts">
defineProps<{
  postId: number;
  isLikedByMe: boolean;
  count: number;
}>();
</script>
