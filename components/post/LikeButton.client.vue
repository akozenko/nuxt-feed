<template>
  <PostLikeSnippet :readonly="readonly" :post-id="postId" :is-liked-by-me="isLikedByMe" :count="count" @click="handleLikeClickEvent" />
</template>
<script setup lang="ts">

const { status, data, send, open, close } = useWebSocket<{postId: number}>(`ws://${location.host}/api/ws`)

const props = withDefaults(defineProps<{
  readonly?: boolean;
  postId: number;
  isLikedByMe: boolean;
  count: number;
}>(), {
  readonly: false,
});

const handleLikeClickEvent = () => {
  if (props.isLikedByMe) {
    return;
  }
  send(JSON.stringify({
    type: 'like',
    postId: props.postId,
  }));
}
</script>
