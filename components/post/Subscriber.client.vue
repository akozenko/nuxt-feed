<!-- eslint-disable-next-line vue/valid-template-root -->
<template>
  <!-- ws -->
</template>
<script setup lang="ts">
import type { Post } from '~/db/schema';

const { data } = useWebSocket(`ws://${location.host}/api/ws`);

const emit = defineEmits<{
  (e: 'added-post', post: Post): void;
  (e: 'liked-post', data: { post: Post, userId: number }): void;
}>();

watch(data, (event) => {
  try {
    event = JSON.parse(event);
    if (event.type === 'post:liked') {
      emit('liked-post', {
        post: event.post,
        userId: event.userId,
      });
    } else if (event.type === 'post:added') {
      emit('added-post', event.post);
    }
  } catch(e) {
    console.error(e);
  }
});
</script>
