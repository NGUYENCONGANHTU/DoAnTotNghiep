<template>
    <div class="d-flex flex-column">
        <MenuHeader />
        <Banner />
        <CrollBrand />
        <div class="container">
            <div class="renderList"><h3>DANH SÁCH SẢN PHẨM</h3></div>
            <div class="row d-flex justify-content-center">
                <div class="col-lg-3 col-md-4 col-sm-12 mb-4" v-for="product in store.productsStore" :key="product.id">
                    <div class="card" style="width: 18rem">
                        <a href=""
                            ><img
                                :src="product.imageUrl"
                                class="card-img-top"
                                height="300px"
                                :alt="product.description"
                            />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <p class="card-price">
                                {{
                                    new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                                        product.price
                                    )
                                }}
                            </p>
                            <RouterLink :to="`/details/${product.id}`" class="btn btn-primary">Xem thêm</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Banner from "../PageLayout/Banner.vue";
import MenuHeader from "../PageLayout/MenuHeader.vue";
import CrollBrand from "@/components/ProductDetail/CrollBrand.vue";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";
import { useProductStore } from "@/stores/product";

const store = useProductStore();
const loading = ref(false);
const products = ref([]);
onMounted(async () => {
    loading.value = true;
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.value.push({ id: doc.id, ...doc.data() });
    });
    store.storeProduct(products.value);
    loading.value = false;
});
</script>
<style scoped>
.container {
}
.item {
    border: 1px solid;
}
img {
    background-size: cover;
}
.renderList {
    text-align: center;
    margin-bottom: 60px;
}
</style>
