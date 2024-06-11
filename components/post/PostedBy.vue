<template>
  <div class="inline-flex gap-2 items-center">
    <span v-html="UserProfileIcon" aria-hidden="true" class="w-4 h-4 fill-slate-700 inline-flex" />
    <span aria-label="Posted By:" class="text-sm text-slate-700">
      {{ name }}
    </span>
  </div>
</template>
<script setup lang="ts">
import UserProfileIcon from '@/assets/user-profile-icon.svg?raw';

defineProps<{
  name: string
}>();
</script>
