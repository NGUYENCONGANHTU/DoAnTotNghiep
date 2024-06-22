<script setup>
import logo from "@/assets/logo/logo-Ci.png";
import "@/assets/main.css";
</script>

<template>
  <div class="container">
    <div class="menu d-flex justify-content-between">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>
      <ul class="nav nav-pills mt-1">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ListProduct">Product </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/hotline">Hotline </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact </router-link>
        </li>
      </ul>
      <div class="search-bar d-flex justify-content-center mt-1">
        <input
          type="search"
          placeholder="Search..."
          style="width: 260px; height: 38px; padding: 5px; outline: none"
        />
        <button style="width: 90px; color: white; height: 38px; outline: none">
          Search
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  padding: 10px;
}
.menu {
  padding: 5px;
}
img {
  width: 210px;
}
.search-bar input {
  border-radius: 5px 0 0 5px;
}
.search-bar button {
  border-radius: 0 5px 5px 0;
  background-color: var(--color-text-logo);
}
.nav {
}
.nav-item {
  margin-left: 10px;
}
.nav-item a {
  color: var(--color-text-logo);
  font-weight: 400;
}
.nav .nav-item.active {
}
button {
  border: none;
  outline: none;
}
input {
  border: 0.5px solid;
  outline: none;
}
.router-link-active {
  border-bottom: 3px solid #eb626c;
}
.nav-pills .nav-link {
  border-radius: 0;
}
</style>
