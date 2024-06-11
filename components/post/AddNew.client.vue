<template>
  <fieldset
    :disabled="isPosting"
    class="max-w-4xl w-full justify-self-center flex flex-col gap-4 pt-6"
  >
    <BaseTextArea
      class="w-full"
      v-model="content"
    />

    <BaseButton
      @click="handleClickSendButtonEvent"
      :processing="isPosting"
    >
      Add
    </BaseButton>
  </fieldset>
</template>
<script setup lang="ts">
const content = ref('');
const isPosting = ref(false);

const { send } = useWebSocket(`ws://${location.host}/api/ws`);

const handleClickSendButtonEvent = async () => {
  send(JSON.stringify({
    type: 'new-post',
    content: content.value,
  }));
  content.value = '';
};
</script>
