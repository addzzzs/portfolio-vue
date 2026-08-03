<script setup>
import { onBeforeMount, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import Projects from "../data/projects.json";

const route = useRoute();
let project = reactive({});

const getProjectDetails = (id) => {
  const found = Projects.find((proj) => proj.id == id);
  Object.assign(project, found);
};

onBeforeMount(() => {
  getProjectDetails(route.params.id);
});

watch(
  () => route.params.id,
  (newId) => {
    getProjectDetails(newId);
  },
);
</script>
<template>
  <div class="p-5 container">
    <h6 class="bg-secondary p-2 rounded mb-2" style="width: fit-content">
      {{ project.type }}
    </h6>
    <h1 class="mb-5">{{ project.title }}</h1>

    <img :src="project.image" alt="img" class="rounded-4 img-fluid" />

    <h2 class="mt-5">Overview</h2>
    <p style="color: #a7c9ad">{{ project.description }}</p>

    <h2 class="mt-5">Key Features</h2>
    <ul class="list-unstyled mb-0">
      <li v-for="features in project.keyFeatures" class="tool-list-item">
        <span class="tool-dot"></span>{{ features }}
      </li>
    </ul>

    <div class="d-flex gap-3">
      <button class="btn-lime rounded-2">View Live Site</button>
      <button class="btn-outline-custom">View Source</button>
    </div>

    <div class="bento-card mt-5">
      <h6 class="text-lime">ROLE</h6>
      <h6>{{ project.role }}</h6>

      <h6 class="text-lime mt-4">TIMELINE</h6>
      <h6>{{ project.timeline }}</h6>

      <h6 class="text-lime mt-4">TECH STACK</h6>
      <div class="d-flex gap-2">
        <div
          class="tool-box p-2"
          style="height: fit-content; width: fit-content"
          v-for="tech in project.techstack"
        >
          {{ tech }}
        </div>
      </div>

      <h6 class="text-lime mt-4">Status</h6>
      <h6>{{ project.status }}</h6>
    </div>
  </div>
</template>
