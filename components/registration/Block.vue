<template>
  <BaseButton class="mt-4" @click="handleRegistryClickEvent">Registry</BaseButton>
  <RegistrationModal ref="modal" />
</template>
<script setup lang="ts">
import type RegistrationModal from './RegistrationModal.vue';

const modal = ref<InstanceType<typeof RegistrationModal>>();

const handleRegistryClickEvent = () => {
  modal.value?.showModal();
  // $fetch('/api/auth', { method: 'POST', body: { name: 'admin' } });
};
</script>
