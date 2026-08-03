<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const scrollToSection = (hash) => {
  if (route.path === "/") {
    // already on Home — just scroll
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  } else {
    // navigate to Home first, then scroll once it's rendered
    router.push("/").then(() => {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  }
};
</script>

<template>
  <header class="navbar-custom">
    <nav
      class="container-max mx-auto d-flex justify-content-between align-items-center px-3 px-md-5 py-3"
      style="margin: 0 auto"
    >
      <router-link to="/" class="navbar-brand-custom text-decoration-none">
        &lt;jrDev /&gt;
      </router-link>

      <div class="d-none d-md-flex gap-4 align-items-center">
        <router-link
          to="/"
          class="nav-link-custom"
          active-class="nav-link-active"
          exact-active-class="nav-link-active"
          @click.prevent="scrollToSection('#hero')"
        >
          Home
        </router-link>
        <a
          href="#"
          class="nav-link-custom"
          @click.prevent="scrollToSection('#projects')"
        >
          Projects
        </a>
        <a
          href="#"
          class="nav-link-custom"
          @click.prevent="scrollToSection('#tools')"
        >
          Tools
        </a>
      </div>

      <button class="btn-lime" @click="scrollToSection('#contact')">
        Contact
      </button>
    </nav>
  </header>
</template>
