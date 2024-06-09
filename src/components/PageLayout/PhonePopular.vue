<script setup></script>
<template>
  <div class="container">
    <h3 class="brand-title">PHONE POPULAR</h3>
    <div class="phone-popular">
      <div class="item phone-item-1">
        <div class="text-products">
          <a href="#" class="title-product">Glaxy Z Fold</a>
          <p class="des-text">
            A powerful and flexible smartphone like a computer right in your
            pocket.
          </p>
          <router-view to="" class="view-more"
            ><button class="btn p-2">
              <router-link>View more</router-link>
            </button></router-view
          >
        </div>
      </div>
      <div class="item phone-item-2">
        <div class="text-product">
          <a href="#" class="title-product">Glaxy S24 Ultra</a>
          <p>
            SamSung S24 ultra is the top smartphone product opening in 2024.
          </p>
        </div>
      </div>
      <div class="item phone-item-3">
        <div class="text-product">
          <a href="#" class="title-product">Iphone 14 ProMax</a>
          <p>
            At the end of 2020, the Iphone 12 set of 4 was released width many
            improvements.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 10px;
}
.phone-popular {
  padding: 10px;
  margin-top: 30px;
  display: grid;
  grid-template-areas:
    "phone-item-1 phone-item-2"
    "phone-item-1 phone-item-3";
}
.brand-title {
  color: #4a5291;
  font-weight: 700;
  font-size: 35px;
  margin-top: 15px;
}
.item {
  background-color: #ccc; /* Màu nền */
  padding: 20px; /* Khoảng cách lề bên trong */
  position: relative;
  width: 200px;
  height: 300px;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}
.item:hover {
  cursor: pointer;
  transform: scale(1.02);
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.phone-item-1 {
  background-image: url("@/assets/PhonePopular/banner-phone-popular-left.png");
  grid-area: phone-item-1; /* Xác định vị trí của item1 trong grid container */
  width: 680px;
  height: 400px;
  border-radius: 20px;
  font-size: 20px;
}
.view-more {
  text-decoration: underline;
}
.btn {
  color: #e95476;
  text-decoration: underline;
  font-weight: 500;
  outline: none;
  border: none;
}
.btn:hover {
  color: #e95476;
  text-decoration: underline;
}
.btn a {
  color: #e95476;
  text-decoration: underline;
  font-weight: 500;
  outline: none;
  border: none;
}
.btn a:hover {
  color: #e95476;
  text-decoration: underline;
}
.title-product {
  font-weight: 700;
  font-size: 30px;
  color: #e95476;
}

.phone-item-2 {
  background-image: url("@/assets/PhonePopular/banner-phone-popular-right-2.png");
  width: 580px;
  height: 190px;
  grid-area: phone-item-2; /* Xác định vị trí của item2 trong grid container */
  border-radius: 20px;
  position: relative;
}
.text-product {
  width: 300px;
  position: absolute;
  right: 0;
  padding: 2px;
  font-size: 16px;
}
.text-products .des-text {
  font-size: 16px;
}
.phone-item-3 {
  background-image: url("@/assets/PhonePopular/banner-phone-popular-right.png");
  margin-top: 20px;
  width: 580px;
  height: 190px;
  border-radius: 20px;
  grid-area: phone-item-3; /* Xác định vị trí của item3 trong grid container */
}
</style>
