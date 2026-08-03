<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="bento-card group p-stack-lg flex flex-col rounded-xl overflow-hidden opacity-100 translate-y-0"
  >
    <div
      class="relative aspect-[2/1] bg-surface-container-high rounded-lg overflow-hidden mb-stack-lg border border-outline-variant"
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h3 class="font-headline-md text-headline-md mb-stack-sm">
      {{ project.title }}
    </h3>
    <p
      class="font-body-md text-body-md text-on-surface-variant mb-stack-lg flex-grow"
    >
      {{ project.description }}
    </p>
    <div class="flex flex-wrap gap-2 mb-stack-lg">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="bg-surface-variant px-3 py-1 rounded text-[11px] font-label-sm text-on-surface-variant tracking-wider uppercase"
      >
        {{ tag }}
      </span>
    </div>
    <button
      class="w-fit btn-lime px-stack-lg py-stack-sm bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold rounded hover:opacity-90 active:scale-95 transition-all"
    >
      View Project
    </button>
  </div>
</template>
