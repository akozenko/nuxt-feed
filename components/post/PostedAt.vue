<template>
  <div class="inline-flex gap-2 items-center">
    <span
      v-html="CalendarIcon"
      aria-hidden="true"
      class="w-4 h-4 fill-slate-700 inline-flex"
    />
    <span
      aria-label="Posted By:"
      class="text-sm text-slate-700"
      :title="humanReadableTimeStamp"
    >
      {{ timeAgo }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core';

import CalendarIcon from '@/assets/schedule-calendar-icon.svg?raw';

const props = defineProps<{
  timestamp: string
}>();

const timeAgo = useTimeAgo(new Date(props.timestamp));
const humanReadableTimeStamp = computed(() => new Date(props.timestamp).toLocaleString());
</script>
