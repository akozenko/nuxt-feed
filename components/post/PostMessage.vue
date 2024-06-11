<template>
  <div>
    <p
      v-for="(text, idx) in texts"
      :key="idx"
    >
      {{ text }}
    </p>
    <!-- TODO: add "show more"/"show less button" -->
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  message: string
}>();

const texts = computed(() => props.message.split('\n'));
</script>
