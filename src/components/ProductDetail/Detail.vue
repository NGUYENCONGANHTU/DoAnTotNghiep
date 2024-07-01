<template>
    <div class="container">
        <div class="card">
            <div class="container-fliud">
                <div class="wrapper row">
                    <div class="preview col-md-6">
                        <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1">
                                <img :src="product.imageUrl" />
                            </div>
                        </div>
                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title">{{ product.name }}</h3>
                        <div class="rating">
                            <div class="rating d-flex flex-start">
                                <input value="5" name="rate" id="star5" type="radio" />
                                <label title="text" for="star5"></label>
                                <input value="4" name="rate" id="star4" type="radio" />
                                <label title="text" for="star4"></label>
                                <input value="3" name="rate" id="star3" type="radio" checked="" />
                                <label title="text" for="star3"></label>
                                <input value="2" name="rate" id="star2" type="radio" />
                                <label title="text" for="star2"></label>
                                <input value="1" name="rate" id="star1" type="radio" />
                                <label title="text" for="star1"></label>
                            </div>
                        </div>
                        <p class="product-description">
                            {{ product.description }}
                        </p>
                        <h4 class="price">
                            Giá:
                            <span>{{ new Intl.NumberFormat("vi-VN").format(product.price) }} <sup>vnd</sup></span>
                        </h4>

                        <div class="choice-rom d-flex flex-nowrap">
                            <h5 class="ram-rom">Dung lượng:</h5>
                            <span class="box03 group desk">
                                <a href="" data-index="0" class="box03__item item">128GB</a>
                                <a href="" data-index="1" class="box03__item item">256GB</a>
                                <a href="" data-index="2" class="box03__item item">512GB</a>
                                <a href="" data-index="3" class="box03__item item act">1TB</a>
                            </span>
                        </div>

                        <div class="choice-color">
                            <div class="colors d-flex">
                                <h5>Màu:</h5>
                                <div class="color d-flex">
                                    <a href="#" class="item color-gray"></a>
                                    <a href="#" class="item color-white"></a>
                                    <a href="#" class="item color-black"></a>
                                    <a href="#" class="item color-gold"></a>
                                </div>
                            </div>
                        </div>
                        <div class="action">
                            <button class="add-to-cart btn btn-default" type="button">Thêm vào giỏ hàng</button>
                            <button class="like btn btn-default" type="button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

const route = useRoute();
const id = route.params.id;

const product = ref({});
const loading = ref(false);
onMounted(async () => {
    loading.value = true;
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        product.value = docSnap.data();
    } else {
        console.log("No such document!");
    }
});
</script>
<style scoped>
img {
    max-width: 100%;
}
.tab-pane {
    text-align: center;
    width: 400px;
    height: 400px;
}
.preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
@media screen and (max-width: 996px) {
    .preview {
        margin-bottom: 20px;
    }
}

.preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.tab-content {
    overflow: hidden;
}
.tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
}

.card {
    margin-top: 50px;
    background: #eee;
    padding: 3em;
    line-height: 1.5em;
}

@media screen and (min-width: 997px) {
    .wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
}

.details {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.colors {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.product-title,
.price,
.ram-rom,
.colors {
    text-transform: UPPERCASE;
    font-weight: bold;
}

.checked,
.price span {
    color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.ram-rom {
    margin-bottom: 15px;
}

.product-title {
    margin-top: 0;
}

.size {
    margin-right: 10px;
    cursor: pointer;
}
.size button {
    font-size: 18px;
}
.ram-rom {
    margin-top: 5px;
}
.size:first-of-type {
    margin-left: 40px;
}

.add-to-cart,
.like {
    background: #ff9f1a;
    padding: 1.2em 1.5em;
    border: none;
    text-transform: UPPERCASE;
    font-weight: bold;
    color: #fff;
    -webkit-transition: background 0.3s ease;
    transition: background 0.3s ease;
}
.add-to-cart:hover,
.like:hover {
    background: #b36800;
    color: #fff;
}
.green {
    background: #85ad00;
}
.box03 {
    margin-left: 30px;
}
.blue {
    background: #0076ad;
}

.tooltip-inner {
    padding: 1.3em;
}

@-webkit-keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

.rating:not(:checked) > input {
    position: absolute;
    appearance: none;
}

.rating:not(:checked) > label {
    float: right;
    cursor: pointer;
    font-size: 30px;
    color: #e58e09;
}

.rating:not(:checked) > label:before {
    content: "★";
}
.like {
    margin-left: 20px;
}
.box03__item {
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    color: #333;
    display: inline-block;
    font-size: 13px;
    min-width: 67px;
    padding: 0 15px;
    text-align: center;
    margin-bottom: 5px;
    margin-right: 2px;
    vertical-align: top;
    height: 36px;
    line-height: 36px;
    position: relative;
    text-decoration: none;
    margin-left: 8px;
}
.color-gray {
    background-color: gray;
    width: 50px;
    height: 20px;
}
.color-white {
    background-color: white;
    width: 50px;
    height: 20px;
}
.color-black {
    background-color: black;
    width: 50px;
    height: 20px;
}
.color-gold {
    background-color: gold;
    width: 50px;
    height: 20px;
}
.item {
    margin-left: 20px;
}
.choice-color {
    margin-top: 15px;
    margin-bottom: 20px;
}
.product-description {
    width: 550px;
    line-height: 1.8;
}
</style>
