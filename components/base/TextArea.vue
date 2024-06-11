<template>
  <div class="inline-flex flex-col gap-1">
    <label
      v-if="label"
      :for="uuid"
      class="text-slate-500 text-sm"
    >
      {{ label }}
    </label>
    <textarea
      v-model="text"
      :id="uuid"
      :rows="5"
      class="border rounded-sm resize-none"
      :class="{
        'border-green-950': !error && !disabled,
        'border-red-900': error && !disabled,
        'bg-slate-300 border-slate-500': disabled,
      }"
      :type="type"
      :aria-invalid="Boolean(error)"
      :aria-errormessage="`${uuid}-error-message`"
      :disabled="disabled"

      @keydown="$emit('keydown', $event)"
      @keyup="$emit('keyup', $event)"
    >
    </textarea>
    <span
      v-if="typeof error === 'string'"
      :id="`${uuid}-error-message`"
      class="text-red-800 typography-caption-regular"
    >{{ error }}</span>
  </div>
</template>
<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { InputTypeHTMLAttribute } from 'vue';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    error?: boolean | string;
    label?: string;
    modelValue?: string;
    type?: InputTypeHTMLAttribute;
  }>(),
  {
    disabled: false,
    error: false,
    label: void 0,
    modelValue: '',
    type: 'text',
  },
);

const emit = defineEmits<{
  (e: 'keydown', ev: KeyboardEvent): void;
  (e: 'keyup', ev: KeyboardEvent): void;
  (e: 'update:modelValue', value: string): void;
}>();

const text = useVModel(props, 'modelValue', emit);
const uuid = window.crypto.randomUUID();
</script>
