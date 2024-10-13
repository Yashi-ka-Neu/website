<script setup lang="ts">
import projectsData from '@/assets/projects/projects.json'
import type { Project } from '@/model/data_structures'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = projectsData.projects as Project[]
</script>

<template>
  <main class="full-width">
    <h2>Projects</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project-data="project"
      />
    </div>
  </main>
</template>
e>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 16px; /* Adjust the gap between cards as needed */
  width: 100%;
  padding: 0;
  margin: 0;
}

.full-width {
  width: 100%;
}
</style>
