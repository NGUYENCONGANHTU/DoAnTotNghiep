<template>
  <layout>
    <div class="container px-0">
      <div
        class="text-container d-flex align-items-center ml-2 mt-4 justify-content-center"
      >
        <h4 class="text">TOÀN BỘ SẢN PHẨM</h4>
      </div>
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Ảnh</th>
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col">Hãng</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Tồn kho</th>
            <th scope="col">Giá Sản Phẩm</th>
            <th scope="col">
              <PlusProduct />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <th scope="row">
              <img
                :src="product.imageUrl"
                alt=""
                class="img-fluid"
                style="width: 70px; height: 70px"
              />
            </th>
            <td>{{ product.name }}</td>
            <td>{{ product.brand }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.id }}</td>
            <td class="btn-button">
              <FixProduct />
              <DeleteProduct :data="product" @delete-product="deleteProduct" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </layout>
</template>
<script setup>
import Layout from "@/Layout/Layout.vue";
import FixProduct from "@/components/EditProduct/FixProduct.vue";
import DeleteProduct from "@/components/EditProduct/DeleteProduct.vue";
import PlusProduct from "@/components/EditProduct/PlusProduct.vue";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { onBeforeMount, ref } from "vue";
import { connectStorageEmulator } from "firebase/storage";

const products = ref([]);

onBeforeMount(async () => {
  const q = query(collection(db, "products"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    products.value.push({ id: doc.id, ...doc.data() });
  });
});
const deleteProduct = (id) => {
  console.log(id);
};
</script>

<style scoped>
.text {
  color: #4a5291;
  font-weight: 600;
}
.btn {
  margin-left: 4px;
}
table th {
  color: #4a5291;
  font-weight: 600;
}
th,
td {
  vertical-align: middle !important;
}
</style>
