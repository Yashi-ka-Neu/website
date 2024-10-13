<script setup lang="ts">
import workExperienceData from '@/assets/work_experiences/work_experiences.json'
import educationData from '@/assets/education/education.json'
import type {
  Education,
  Project,
  WorkExperience,
} from '@/model/data_structures'
import WorkExperienceItem from "@/components/WorkExperienceItem.vue";
import EducationItem from "@/components/EducationItem.vue";

const workExperienceEntries =
  workExperienceData.work_experiences as WorkExperience[]
const educationEntries = educationData.education as Education[]
</script>

<template>
  <main>
    <div class="sections-container">
    <section>
      <h2>Work Experience</h2>
      <div class="grid">
        <WorkExperienceItem
          v-for="workExperience in workExperienceEntries"
          :key="
            workExperience.role +
            workExperience.where +
            workExperience.timeRange
          "
          :work-experience-data="workExperience"
        />
      </div>
    </section>

    <section>
      <h2>Education</h2>
      <div class="grid">
        <EducationItem
          v-for="education in educationEntries"
          :key="education.role + education.where + education.timeRange"
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
