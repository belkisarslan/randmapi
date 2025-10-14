<script setup>
import Header from './components/Header/Header.vue';
</script>

<template>

    <div :class="container">
      <Header />
      <router-view></router-view>
    </div>

</template>

<style scoped></style>
