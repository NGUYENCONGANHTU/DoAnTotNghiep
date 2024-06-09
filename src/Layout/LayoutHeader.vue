<script setup>
import MenuHeader from "@/components/PageLayout/MenuHeader.vue";
</script>
<template>
  <div class="d-flex flex-column">
    <MenuHeader />
    <slot></slot>
  </div>
</template>
<style scoped></style>
