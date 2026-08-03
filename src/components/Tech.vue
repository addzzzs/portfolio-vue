<script setup>
defineProps({
  tech: Object,
});
</script>
<template>
  <div class="tool-box">
    <i :class="tech.icon"></i>
    <span>{{ tech.name }}</span>
  </div>
</template>
