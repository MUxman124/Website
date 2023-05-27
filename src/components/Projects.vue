<script setup>
const props = defineProps({
  image: String,
  title: String,
  description: String
});
</script>

<template>
  <router-link to="/projects">
  <div class="card">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</router-link>
</template>

