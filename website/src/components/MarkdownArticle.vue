<script setup lang="ts">
import { computed, defineProps, onMounted, type Ref, ref } from 'vue'
import { marked } from 'marked'
import VueMarkdown from 'vue-markdown-render'

const props = defineProps<{
  articlePath: string
}>()

const markdownContent: Ref<string> = ref(`# Hello, Markdown!`)

onMounted(async () => {
  const response = await fetch(props.articlePath)
  markdownContent.value = await response.text()
})

// Computed property to render markdown
const renderedMarkdown = computed(() => {
  return marked(markdownContent.value, {
    breaks: true,
  })
})
</script>

<template>
  <div>
    <vue-markdown
      :source="markdownContent"
      :options="{
        breaks: true,
        linkify: true,
        typographer: true,
      }"
    />
  </div>
</template>

<style scoped>
.vue-markdown p {
  margin-bottom: 100px;
}
</style>
