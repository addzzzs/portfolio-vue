<script setup></script>

<template>
  <header class="navbar-custom">
    <nav
      class="container-max mx-auto d-flex justify-content-between align-items-center px-3 px-md-5 py-3"
      style="margin: 0 auto"
    >
      <div class="navbar-brand-custom">&lt;jrDev /&gt;</div>
      <div class="d-none d-md-flex gap-4 align-items-center">
        <a href="#" class="nav-link-custom nav-link-active">Home</a>
        <a href="#projects" class="nav-link-custom">Projects</a>
        <a href="#tools" class="nav-link-custom">Tools</a>
      </div>
      <button
        class="btn-lime"
        onclick="
          document
            .querySelector('#contact')
            .scrollIntoView({ behavior: 'smooth' })
        "
      >
        Contact
      </button>
    </nav>
  </header>
</template>
