<template>
  <div class="border-slate-400 p-4 border bg-white rounded w-full flex flex-col gap-4 ">
    <!-- {{ item }} -->
    <div class="flex md:flex-row flex-col justify-between gap-2">
      <PostedBy :name="item.userName" />
      <PostedAt :timestamp="item.createdAt" />
    </div>
    <PostMessage :message="item.content" />
    <div>
      <PostLikeButton
        :count="item.likesCount"
        :readonly="isLikedByMe || !isAuth"
        :is-liked-by-me="isLikedByMe"
        :post-id="item.id"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Post } from '../../db/schema';
import PostedAt from './PostedAt.vue';
import PostedBy from './PostedBy.vue';

const props = defineProps<{
  item: Post & { isLikesByMe?: boolean };
  isAuth: boolean;
}>();

const isLikedByMe = computed(() => Boolean(props.item.isLikesByMe));
</script>