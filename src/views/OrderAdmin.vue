<template>
  <layout>
    <div class="container px-0">
      <div
        class="text-container d-flex align-items-center ml-2 mt-2 justify-content-center"
      >
        <h4 class="text">PRODUCT ORDER FORM</h4>
      </div>
      <form class="colorful-form mt-4">
        <div class="form-group">
          <label class="form-label" for="name">Tên/Biệt danh:</label>
          <input
            required=""
            placeholder="Nhập tên/biệt danh"
            class="form-input"
            type="text"
            v-model="order.name"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="email">Số điện thoại:</label>
          <input
            required=""
            placeholder="Nhập số điện thoại"
            class="form-input"
            name="number"
            id="number"
            type="numer"
            v-model="order.numer"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="message">Địa chỉ:</label>
          <textarea
            required=""
            placeholder="Nhập địa chỉ"
            class="form-input"
            name="address"
            id="address"
            v-model="order.address"
          ></textarea>
        </div>
        <button class="form-button" type="submit">Xác nhận</button>
      </form>
    </div>
  </layout>
</template>
<script setup>
import Layout from "@/Layout/Layout.vue";
import { ref } from "vue";
const order = ref({ name: "", number: "", address: "" });
</script>
<style scoped>
.container {
  height: auto;
}
.text-container {
  height: 50px;
}
.text {
  color: #4a5291;
  font-weight: 600;
}
.colorful-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
}

textarea.form-input {
  height: 250px;
}

.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #40b27f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #ff5f59;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
