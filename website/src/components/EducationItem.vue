<script setup lang="ts">
import type {
  Education,
  Project,
  WorkExperience,
} from '@/model/data_structures'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Image from "primevue/image";
import {formatTimeRange} from "../utils";

defineProps<{
  educationData: Education
}>()
</script>

<template>
  <div class="item">
    <i> <Image  :src="educationData.icon" alt="img" width="80px" style="background: white" ></Image> </i>
    <div class="details">
      <h3>
        {{ educationData.role }}
      </h3>
      <h4>
        {{ educationData.organization }}
      </h4>
      <h5>
        {{ formatTimeRange(educationData.timeRange) }}
        <span v-if="educationData.location"> - {{educationData.location}}</span>
        <br/>
        Graduated with a {{ educationData.degree }} in {{ educationData.subject }} (grade: {{ educationData.grade }})
      </h5>
      <span v-if="educationData.description"> {{ educationData.description}} </span>
    </div>
  </div>
</template>

<style scoped>
.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
h4 {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.item {
  margin-left: 1rem;
  margin-top: 0;
  max-width: 600px;
  padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  display: flex;
  position: relative;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  top: calc(50% - 40px);
  left: -41px;
  position: absolute;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
  border-radius: 8px;
  width: 80px;
  height: 80px;
}

.item:before {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 40px);
  height: calc(50%);
}

.item:after {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 40px);
  height: calc(50%);
}

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
}
</style>
