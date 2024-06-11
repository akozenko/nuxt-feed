<template>
  <div class="inline-flex gap-2 items-center">
    <span
      v-html="UserProfileIcon"
      aria-hidden="true"
      class="w-4 h-4  inline-flex"
      :class="{
        'fill-blue-800': isPostedByMe,
        'fill-slate-700': !isPostedByMe,
      }"
    />
    <span
      aria-label="Posted By:"
      class="text-sm "
      :class="{
        'text-blue-800': isPostedByMe,
        'text-slate-700': !isPostedByMe,
      }"
    >
      {{ name }}
    </span>
  </div>
</template>
<script setup lang="ts">
import UserProfileIcon from '@/assets/user-profile-icon.svg?raw';

defineProps<{
  name: string;
  isPostedByMe: boolean;
}>();
</script>
