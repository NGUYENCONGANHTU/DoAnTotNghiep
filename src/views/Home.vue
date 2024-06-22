<script setup>
import Banner from "@/components/PageLayout/Banner.vue";
import BrandPopularVue from "@/components/PageLayout/BrandPopular.vue";
import MenuHeader from "@/components/PageLayout/MenuHeader.vue";
import PhonePopularVue from "@/components/PageLayout/PhonePopular.vue";
import OnSale from "@/components/PageLayout/OnSale.vue";
import Footer from "@/components/PageLayout/Footer.vue";
import { useLocalStorage } from "@vueuse/core";
const userInfo = useLocalStorage("users");
</script>
<template>
  <menu-header />
  <Banner />
  <BrandPopularVue />
  <PhonePopularVue />
  <OnSale />
  <Footer></Footer>
  {{ userInfo }}
</template>
<style scoped></style>
