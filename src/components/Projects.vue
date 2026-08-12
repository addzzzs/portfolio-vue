<script setup>
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <section
    class="bg-surface-container-lowest py-section-padding border-t border-outline-variant container"
    id="projects"
  >
    <div class="container-fluid px-2 mx-auto px-margin-mobile md:px-gutter">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-stack-md mb-[64px]"
      >
        <div>
          <h2 class="font-headline-lg text-headline-lg mb-stack-sm">
            Featured Projects
          </h2>
          <div class="h-1 w-24 bg-primary-fixed"></div>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-sm">
          A selection of architectural achievements in web development and
          systems design.
        </p>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-6 p-2"
          v-for="project in projects"
          :key="project.id"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>
