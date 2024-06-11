<template>
  <button
    class="inline-flex gap-4 overflow-hidden rounded-md justify-center items-center min-w-32 bg-blue-700 hover:bg-blue-500 px-4 py-2 text-white"
    :type="type"
    :disabled="disabled || processing"
    v-on="{
      click: (e: MouseEvent) => $emit('click', e),
    }"
  >
    <slot />

    <BaseSpinner
      v-if="processing"
      size="sm"
    />
  </button>
</template>
<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

withDefaults(
  defineProps<{
    disabled?: boolean;
    processing?: boolean;
    type?: ButtonHTMLAttributes['type'];
  }>(),
  {
    disabled: false,
    processing: false,
    type: 'button',
  },
);

defineEmits<{
  (e: 'click', ev: MouseEvent): void;
}>();
</script>
