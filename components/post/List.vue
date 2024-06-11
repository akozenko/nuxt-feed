<template>
  <div
    class="max-w-4xl justify-self-center flex flex-col gap-4 w-full grow"
    ref="root"
  >
    <PostItem
      v-for="item in posts"
      :key="item.id"
      :item="item"
      :is-auth="Boolean(userId)"
    />
  </div>
</template>
<script setup lang="ts">
import type { Post } from '../../db/schema';

const root = ref<HTMLElement>();

const props = defineProps<{
  posts: Post[]
}>();

const userId = useCookie('user_id', { watch: true, readonly: true });
const userName = useCookie('user_name', { watch: true, readonly: true });
const postsCount = computed(() => props.posts.length);

watch(postsCount, async () => {
  const lastPost = props.posts[props.posts.length - 1];
  if (lastPost.userName !== userName.value) {
    return;
  }
  await nextTick();
  const el = root.value;
  if (!el) {
    return;
  }
  el.scrollTo({
    top: el.scrollHeight,
    behavior: 'smooth',
  });
});
</script>