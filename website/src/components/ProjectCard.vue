<script setup lang="ts">
import type { Project } from '@/model/data_structures'
import { formatTimeRange } from '@/utils'
import Card from 'primevue/card'
import Button from 'primevue/button'

defineProps<{
  projectData: Project
}>()
</script>

<template>
  <Card>
    <template #header> </template>
    <template #title>{{ projectData.title }}</template>
    <template #subtitle>
      {{ formatTimeRange(projectData.when) }}
      <div>
        <span
          v-if="projectData.programming_language"
          v-for="language in projectData.programming_language"
        >
          <span style="padding-right: 10px">{{ language }}</span>
        </span>
      </div>
    </template>
    <template #content>
      <p class="m-0">
        {{ projectData.description }}
      </p>

      <img v-if="projectData.icon" alt="user header" :src="projectData.icon" />
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <a
          v-if="projectData.article"
          :href="projectData.article"
          target="_blank"
          title="Read Article"
        >
          <Button>Read More</Button>
        </a>
        <a
          v-if="projectData.project_page"
          :href="projectData.project_page"
          target="_blank"
          title="Go to Project Page"
        >
          <Button>Project Page</Button>
        </a>
        <a
          v-if="projectData.source_code"
          :href="projectData.source_code"
          target="_blank"
          title="View Source Code"
        >
          <Button>Source Code</Button>
        </a>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.p-card {
  overflow: hidden;
  width: 24rem;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
}
</style>
