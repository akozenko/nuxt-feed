<template>
  <div class="flex flex-col w-full h-full items-center p-4">
    <BaseSpinner v-if="!posts" />
    <PostList
      v-else
      class="grow overflow-auto"
      :posts="posts"
    />

    <PostAddNew v-if="userId" />
    <RegistrationBlock
      v-else
      @registered="handleRegisteredUserEvent"
    />
  </div>

  <LazyPostSubscriber
    @liked-post="handleLikedPostEvent"
    @added-post="handleAddedNewPostEvent"
  />
</template>
<script setup lang="ts">
import type { Post } from '../db/schema';

const { data: posts } = await useFetch('/api/feeds');

const userId = useCookie('user_id', { watch: true });

const handleLikedPostEvent = (data: { post: Post, userId: number }) => {
  const { post } = data;
  posts.value = (posts.value || []).map((p) => {
    if (p.id === post.id) {
      return {
        ...p,
        ...post,
        isLikesByMe: post.likesCount > 0 ? data.userId : p.isLikesByMe,
      };
    }
    return p;
  });
};

const handleAddedNewPostEvent = (post: Post) => {
  posts.value?.push({
    ...post,
    isLikesByMe: 0,
  });
};

const handleRegisteredUserEvent = () => {

};
</script>
