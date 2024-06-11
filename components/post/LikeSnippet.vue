<template>
  <span
    class="inline-flex gap-2 items-center "
    :class="{
      'group cursor-pointer hover:text-blue-800': !readonly,
      'text-blue-800': isLikedByMe,
    }"
  >
    <span
      v-if="isLikedByMe"
      v-html="HeartFilledIcon"
      aria-hidden="true"
      class="w-4 h-4 fill-blue-700 inline-flex "
    />
    <span
      v-else
      v-html="HeartIcon"
      aria-hidden="true"
      class="w-4 h-4 fill-slate-700 inline-flex group-hover:fill-blue-800"
    />

    {{ count }}
  </span>
</template>
<script setup lang="ts">
import HeartIcon from '@/assets/heart.svg?raw';
import HeartFilledIcon from '@/assets/heart-filled.svg?raw';

withDefaults(
  defineProps<{
    readonly?: boolean;
    postId: number;
    isLikedByMe: boolean;
    count: number;
  }>(),
  {
    readonly: false,
  },
);
</script>
