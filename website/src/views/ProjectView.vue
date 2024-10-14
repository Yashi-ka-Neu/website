<script setup lang="ts">
import projectsData from '@/assets/projects/projects.json'
import type { Project } from '@/model/data_structures'
import ProjectCard from '@/components/ProjectCard.vue'
import MultiSelect from "primevue/multiselect";
import {computed, ref} from "vue";

const projects = projectsData.projects as Project[]

const sizesRaw = ["xs", "s", "m", "l", "xl"]

const sizes = sizesRaw.map(size => ({ label: size, value: size }))
const languages = Array.from(new Set(projects.flatMap(project => project.programming_language))).map(lang => ({ label: lang, value: lang }))
const favorites = ['Yes', 'No'].map(fav => ({ label: fav, value: fav }))

const selectedSizes = ref<string[]>([])
const selectedLanguages = ref<string[]>([])
const selectedFavorites = ref<string[]>([])


const filteredProjects = computed(() => {
  const result = projects.filter(project => {
    const matchesSize = selectedSizes.value.length === 0 || selectedSizes.value.includes(project.size)
    const matchesLanguage = selectedLanguages.value.length === 0 || project.programming_language?.some(lang => selectedLanguages.value.includes(lang))
    const matchesFavorite = selectedFavorites.value.length === 0 || (selectedFavorites.value.includes('Yes') ? project.favorite : !project.favorite)
    return matchesSize && matchesLanguage && matchesFavorite
  })
  // sort the list of projects: first prefer favorites, then by end date
  result.sort((a, b) => {
    if (a.favorite !== b.favorite) {
      return a.favorite ? -1 : 1
    }

    let dateA = new Date(a.when.end).getTime()
    let dateB = new Date(b.when.end).getTime()

    // for favorite a special rule holds: for every size it is bigger, it gets more priority, as it was two years older
    if (a.favorite) {
      dateA += new Date(sizesRaw.indexOf(a.size) * 3 ,0).getTime()
      dateB += new Date(sizesRaw.indexOf(b.size) * 3 ,0).getTime()
    }

    return dateB - dateA;
  })
  return result
})


</script>

<template>
  <main class="full-width">
    <h2>Projects</h2>
    <div class="filters">
      <MultiSelect v-model="selectedSizes" :options="sizes" placeholder="Select sizes" optionLabel="label" optionValue="value" multiple />
      <MultiSelect v-model="selectedLanguages" :options="languages" placeholder="Select languages" optionLabel="label" optionValue="value" multiple />
      <MultiSelect v-model="selectedFavorites" :options="favorites" placeholder="Select favorite status" optionLabel="label" optionValue="value" multiple />
    </div>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project-data="project"
      />
    </div>
  </main>
</template>
e>

<style scoped>
.filters {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 16px;
  width: 100%;
  padding: 0;
  margin: 0;
}

.full-width {
  width: 100%;
}
</style>
