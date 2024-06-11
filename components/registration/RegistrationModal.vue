<template>
  <BaseModal v-if="isVisible" @close="handleCloseModalEvent">
    <template #header>
      Registration
    </template>

    <BaseInput v-model="name" :error="error" label="Username:" class="w-full" :disabled="isFetching" />

    <template #footer>
      <BaseButton :processing="isFetching" :disabled="!isFilled" @click="handleSignInClickEvent">Sign in</BaseButton>
    </template>
  </BaseModal>
</template>
<script setup lang="ts">
const isVisible = ref(false);
const name = ref('');
const error = ref(false);
const isFetching = ref(false);

const isFilled = computed(() => name.value.trim().length > 0);

const handleCloseModalEvent = () => {
  isVisible.value = false;
}

const handleSignInClickEvent = async () => {
  isFetching.value = true;
  try {
    await $fetch('/api/auth', { method: 'POST', body: { name: name.value.trim() } })
    isFetching.value = false;
    handleCloseModalEvent();
    window.location.reload();
  } catch(e: any) {
    console.error(e);
    error.value = e.statusMessage;
    isFetching.value = false;
  }
}

defineExpose({
  showModal() {
    isFetching.value = false;
    name.value = '';
    isVisible.value = true;
    error.value = false;
  }
})
</script>
