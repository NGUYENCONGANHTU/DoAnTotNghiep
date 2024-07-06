<script setup>
import logo from "@/assets/logo/logo-Ci.png";
import "@/assets/main.css";
import { onMounted, ref, watch } from "vue";
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useProductStore } from "@/stores/product";

const searchInput = ref("");
const store = useProductStore();
const loading = ref(false);
const products = ref([]);

onMounted(async () => {
    console.log("mounted");
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        products.value.push({ id: doc.id, ...doc.data() });
    });
    store.storeProduct(products.value);
});

const handleSearchResult = () => {
    loading.value = true;
    store.searchProduct(searchInput.value);
    loading.value = false;
};

const toggleLogin = () => {
    isLoggedIn.value = !isLoggedIn.value;
};
</script>

<template>
    <div class="container">
        <div class="menu d-flex justify-content-between">
            <div class="logo">
                <img :src="logo" alt="" />
            </div>
            <ul class="nav nav-pills mt-1">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Trang chủ </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">Giới thiệu </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/ListProduct">Sản phẩm </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Support">Hỗ trợ</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Contact">Liên hệ </router-link>
                </li>
            </ul>
            <form
                class="search-bar d-flex justify-content-center mt-1 position-relative"
                @submit.prevent="handleSearchResult"
            >
                <input
                    type="search"
                    v-model="searchInput"
                    placeholder="Search..."
                    style="width: 260px; height: 38px; padding: 5px; outline: none"
                />
                <button style="width: 90px; color: white; height: 38px; outline: none">
                    <span v-if="!loading">Search</span>
                    <span v-else>Search...</span>
                </button>

                <div
                    class="search-result bg-body w-100 h-auto p-2 overflow-y-scroll position-absolute"
                    v-if="store.searchResult.length > 0 && searchInput.length > 0"
                >
                    <p v-if="store.searchResult.length <= 0" class="text-center">Không có kết quả !</p>
                    <RouterLink
                        :to="`/details/${product.id}`"
                        v-else
                        class="d-flex m-3 gap-2 text-decoration-none text-black"
                        v-for="product in store.searchResult"
                    >
                        <img :src="product.imageUrl" alt="" width="70px" height="70px" />
                        <div>
                            <p class="">{{ product.name }}</p>
                            <p>
                                {{
                                    new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                                        product.price
                                    )
                                }}
                            </p>
                        </div>
                    </RouterLink>
                </div>
            </form>

            <button type="button" class="btn position-relative btn-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                    />
                </svg>
                <span
                    class="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
                    style="top: 10px"
                >
                    99+
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>
            <div class="dropdown">
                <a href="#" class="dropdowón-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img
                        src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                        alt=""
                        width="28"
                        height="28"
                        class="avatar"
                    />
                </a>
                <ul class="dropdown-menu dropdown-menu-light text-small shadow">
                    <li v-if="!toggleLogin">
                        <a class="dropdown-item" href="#">Đăng Nhập</a>
                    </li>
                    <li v-if="!toggleLogin">
                        <router-link><a class="dropdown-item" href="#">Đăng Kí</a></router-link>
                    </li>
                    <li v-if="toggleLogin">
                        <a class="dropdown-item" href="#">Đăng xuất</a>
                    </li>
                </ul>
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
.logo img {
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
.dropdown {
    margin-top: 10px;
}
.avatar {
    border-radius: 20px;
}
.search-result {
    top: 90%;
    z-index: 10;
    border-radius: 5px;
}
</style>
