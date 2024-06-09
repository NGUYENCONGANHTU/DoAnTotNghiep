<script setup>
import Banner from "@/components/PageLayout/Banner.vue";
import BrandPopularVue from "@/components/PageLayout/BrandPopular.vue";
import MenuHeader from "@/components/PageLayout/MenuHeader.vue";
import PhonePopularVue from "@/components/PageLayout/PhonePopular.vue";
import OnSale from "@/components/PageLayout/OnSale.vue";
import Footer from "@/components/PageLayout/Footer.vue";
import LayoutHeader from "@/Layout/LayoutHeader.vue";
</script>
<template>
  <layout-header>
    <Banner />
    <BrandPopularVue />
    <PhonePopularVue />
    <OnSale />
    <Footer></Footer>
  </layout-header>
</template>
<style scoped></style>
