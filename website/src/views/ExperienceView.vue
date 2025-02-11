<script setup lang="ts">
import workExperienceData from '@/assets/main_work_experiences.json'
import educationData from '@/assets/main_education.json'
import type { Education, WorkExperience } from '@/model/data_structures'
import WorkExperienceItem from '@/components/WorkExperienceItem.vue'
import EducationItem from '@/components/EducationItem.vue'

const workExperienceEntries =
  workExperienceData.work_experiences as WorkExperience[]
const educationEntries = educationData.education as Education[]

// sort work experience and education entries by date in descending order
workExperienceEntries.sort((a, b) => {
  return (
    new Date(b.timeRange.end).getTime() - new Date(a.timeRange.end).getTime()
  )
})
educationEntries.sort((a, b) => {
  return (
    new Date(b.timeRange.end).getTime() - new Date(a.timeRange.end).getTime()
  )
})
</script>

<template>
  <main>
    <div class="sections-container">
      <section>
        <h1>Work Experience</h1>
        <div class="grid">
          <WorkExperienceItem
            v-for="workExperience in workExperienceEntries"
            :key="
              workExperience.role +
              workExperience.organization +
              workExperience.timeRange
            "
            :work-experience-data="workExperience"
          />
        </div>
      </section>

      <section>
        <h1>Education</h1>
        <div class="grid">
          <EducationItem
            v-for="education in educationEntries"
            :key="education.role + education.organization + education.timeRange"
            :education-data="education"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.sections-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Adjust the gap between sections as needed */
}

section {
  min-width: 500px; /* Adjust the minimum width as needed */
}

.grid {
  display: flex;
  flex-direction: column; /* Ensure items are arranged vertically */
  gap: 16px; /* Adjust the gap between cards as needed */
}
</style>
