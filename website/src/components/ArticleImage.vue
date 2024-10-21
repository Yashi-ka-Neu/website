<script setup lang="ts">
defineProps({
  src: String,
  caption: {
    type: String,
    required: false,
  },
  width: String,
})
</script>

<template>
  ssdfsdfsd

  <figure>
    <a :href="src" target="_blank" rel="noopener noreferrer">
      <img :src="src" :alt="caption" :width="width" />
    </a>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped></style>
