<script setup>
import Tech from "./Tech.vue";
import techStack from "../data/techStack.json";
</script>

<template>
  <section class="section-padded" id="tools">
    <div class="container-max mx-auto" style="margin: 0 auto">
      <div class="text-center mb-5" style="margin-bottom: 80px !important">
        <h2 class="headline-lg mb-2">Tools &amp; Stack</h2>
        <p
          class="mx-auto"
          style="
            max-width: 640px;
            font-size: 18px;
            color: var(--color-on-surface-variant);
          "
        >
          Precision-crafted toolkit for building robust, modern applications.
        </p>
      </div>

      <div class="row g-4">
        <div class="col-12 col-md-8">
          <div class="bento-card">
            <h3 class="headline-md mb-4 d-flex align-items-center gap-2">
              <i class="bi bi-terminal text-lime"></i>
              Tech Stack
            </h3>
            <div class="d-flex flex-wrap gap-3">
              <Tech
                v-for="(tech, index) in techStack"
                :tech="tech"
                :key="index"
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="bento-card">
            <h3 class="headline-md mb-4 d-flex align-items-center gap-2">
              <i class="bi bi-tools text-lime"></i>
              Tools
            </h3>
            <ul class="list-unstyled mb-0">
              <li class="tool-list-item">
                <span class="tool-dot"></span>Figma
              </li>
              <li class="tool-list-item">
                <span class="tool-dot"></span>MongoDB
              </li>
              <li class="tool-list-item">
                <span class="tool-dot"></span>Git / Github
              </li>
              <li class="tool-list-item">
                <span class="tool-dot"></span>Postman
              </li>
              <li class="tool-list-item mb-0">
                <span class="tool-dot"></span>VS Code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
