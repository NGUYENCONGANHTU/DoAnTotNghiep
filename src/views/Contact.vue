<template>
  <menu-header />
  <div class="container contact-page d-flex flex-nowrap vh-100">
    <ContactLeft />
    <ContactRight />
  </div>
  <Footer />
</template>

<script setup>
import MenuHeader from "@/components/PageLayout/MenuHeader.vue";
import Footer from "@/components/PageLayout/Footer.vue";
import ContactLeft from "@/components/Contact/ContactLeft.vue";
import ContactRight from "@/components/Contact/ContactRight.vue";
</script>

<style scoped>
.contact-page {
  margin-top: 40px;
}
</style>
