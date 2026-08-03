<script setup>
import NavBar from "./components/NavBar.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Projects from "./components/Projects.vue";
import Tools from "./components/Tools.vue";
</script>

<template>
  <NavBar />

  <main><router-view /></main>
  <Footer />
</template>

<style scoped></style>
