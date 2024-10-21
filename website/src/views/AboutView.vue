<template>
  <div class="about">
    <h1>About Me</h1>

    <img
      alt="Photo"
      class="logo"
      src="@/assets/me_1.jpeg"
      width="140"
      height="140"
    />

    <br />

    <a href="https://github.com/logende" target="_blank" rel="noopener">
      <FontAwesomeIcon :icon="faGithub" />
    </a>
    <a href="https://www.instagram.com/felix.neuby/" rel="noopener">
      <FontAwesomeIcon :icon="faInstagram" />
    </a>
    <a href="https://www.linkedin.com/in/neubauer-felix/" target="_blank">
      <FontAwesomeIcon :icon="faLinkedin" />
    </a>

    <br />

    <br />

    <h3>
      Hi, I'm <strong>Felix Neubauer</strong>, a software engineer based in
      Germany.

      <br />

      I started programming in Java 2012 and have since then completed my
      Bachelors and Masters degree in Software Engineering. Since 2019 I am
      working as a software engineer professionally in the area of self-driving
      cars for Robert Bosch GmbH. At work I use mainly C++ for the embedded code
      for the vehicle, Python for tooling, or develop CI/CD pipelines. In
      research and free time projects I use mostly Kotlin/Java and TypeScript. I
      am interested in software architecture, clean code, testing, DevOps and
      API design.

      <br />

      Before my full-time job, I have already earned money as a freelancer and
      with selling my Java software. My free-time projects have more than a
      million downloads combined and one of my Java minigames (plugin) has been
      played and recorded by Youtubers with more than 50 Million subscribers
      combined.
    </h3>
  </div>
</template>

<style></style>
<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
