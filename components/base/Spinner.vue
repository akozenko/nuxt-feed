<template>
  <span
    class="spinner border-slate-100 border-b-blue-950"
    :class="{
      'w-8 h-8 border-4': size === 'md',
      'w-4 h-4 border-2': size === 'sm'
    }"
  />
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md'
  }>(),
  {
    size: 'md',
  },
);
</script>
<style scoped>
  .spinner {
    border-style: solid;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>