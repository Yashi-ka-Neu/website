<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="full-width">
    <main class="full-width">
      <RouterView class="full-width" />
    </main>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  padding-left: 50px;
  width: 100%;
  z-index: 1000;
  background: var(--color-background);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

main {
  flex-grow: 1;
  margin-top: 60px; /* Adjust based on header height */
}

.full-width {
  width: 100%;
  max-width: 2000px;
}

header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.sidebar-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
