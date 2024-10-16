<script setup lang="ts">

import {computed, defineProps, onMounted, type Ref, ref} from 'vue'
import {marked} from "marked";

const props = defineProps<{
  articlePath: string
}>()


const markdownContent: Ref<string> = ref(`# Hello, Markdown!`);

onMounted(async () => {
  const response = await fetch(props.articlePath);
  markdownContent.value = await response.text();
});

// Computed property to render markdown
const renderedMarkdown = computed(() => {
  return marked(markdownContent.value);
});


</script>

<template>
  <div>
    <div v-html="renderedMarkdown"></div>
  </div>
</template>

<style scoped>


</style>
