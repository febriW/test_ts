<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/a">Home</RouterLink>
        <RouterLink to="/b">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

