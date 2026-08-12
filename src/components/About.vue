<script setup></script>

<template>
  <section
    class="hero-section container-max mx-auto"
    id="hero"
    style="margin: 0 auto"
  >
    <div class="row align-items-center g-5">
      <div class="col-12 col-lg-7 order-2 order-md-1" style="z-index: 10">
        <span class="badge-outline mb-4">Full Stack Web Developer</span>
        <h1 class="headline-xl mt-3 mb-3">
          Hi I'm <span class="text-lime">John Rhey</span>
        </h1>
        <h2 class="headline-lg mb-4">
          Crafting digital experiences with
          <span class="text-lime fst-italic">precision</span> and purpose.
        </h2>
        <p
          class="mb-4"
          style="
            font-size: 18px;
            color: var(--color-on-surface-variant);
            max-width: 560px;
          "
        >
          A multidisciplined creator specializing in building scalable design
          systems and high-performance web applications using Corporate Modern
          aesthetics.
        </p>

        <div class="social-icons d-flex gap-3 mb-4">
          <a
            href="https://www.linkedin.com/in/jr292003/"
            id="linkedin"
            class="social-icon"
            target="_blank"
            rel="noopener"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/john.rhey.dahil.2024/"
            id="facebook"
            class="social-icon"
            target="_blank"
            rel="noopener"
          >
            <i class="bi bi-facebook"></i>
          </a>
          <a
            href="https://github.com/addzzzs"
            id="github"
            class="social-icon"
            target="_blank"
            rel="noopener"
          >
            <i class="bi bi-github"></i>
          </a>
        </div>
        <div class="d-flex flex-wrap gap-3">
          <button class="btn-outline-custom">View Resume</button>
          <button
            class="btn-lime"
            style="border-radius: 8px; padding: 12px 24px"
          >
            Connect With Me
          </button>
        </div>
      </div>
      <div class="col-12 col-lg-5 order-1 order-md-2">
        <div class="hero-photo-wrap">
          <div class="hero-photo-ring-outer"></div>
          <div class="hero-photo-ring-inner"></div>
          <div class="hero-photo">
            <img
              alt="John Rhey Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb6Dk4GelahyTCv8aAe6pnWb3FIfSqyZ4ziZ4VP-s5sL6xeK2XHAwVAWnHKcjAvsiycoiMyxK_H29GZxervGbZXVhQ8UJq2OCH5oG-YcOsAr6nSzzSd6u09ydHYzdOHBVaz6JRRcq2fEZGLJYNv7yToWC4wLSA0WSePUquaamF1QVGIBKwY0EzsQe22AhHXHfwLuRyihhqWE7LRDfddGBjPLZwjxoRigmT81qAOsb1Y6bXjEnEgS1Ns-kLxzXpTsqe-PQzqrGdKlse4Q"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-glow"></div>
  </section>
</template>
