<template>
  <div class="d-flex flex-column">
    <MenuHeader />
    <Banner />
    <CrollBrand />
    <div class="container product-page">
      <div class="renderList"><h3>DANH SÁCH SẢN PHẨM</h3></div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div class="card" style="width: 18rem">
            <a href=""
              ><img
                src="https://cdn2.cellphones.com.vn/x/media/catalog/product/2/_/2_61_8_2_1_4_1_1.jpg"
                class="card-img-top"
                alt="   Iphone 13 Pro Max (256gb)- Chính hãng Vn/A "
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                Iphone 13 Pro Max (256gb)- Chính hãng Vn/A
              </h5>
              <p class="card-price">28.990.000 VND</p>
              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div class="card" style="width: 18rem">
            <a href=""
              ><img
                src="https://cdn2.cellphones.com.vn/x/media/catalog/product/2/_/2_61_8_2_1_4_1_1.jpg"
                class="card-img-top"
                alt="   Iphone 13 Pro Max (256gb)- Chính hãng Vn/A "
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                Iphone 13 Pro Max (256gb)- Chính hãng Vn/A
              </h5>
              <p class="card-price">28.990.000 VND</p>
              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div class="card" style="width: 18rem">
            <a href=""
              ><img
                src="https://cdn2.cellphones.com.vn/x/media/catalog/product/2/_/2_61_8_2_1_4_1_1.jpg"
                class="card-img-top"
                alt="   Iphone 13 Pro Max (256gb)- Chính hãng Vn/A "
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                Iphone 13 Pro Max (256gb)- Chính hãng Vn/A
              </h5>
              <p class="card-price">28.990.000 VND</p>
              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div class="card" style="width: 18rem">
            <a href=""
              ><img
                src="https://cdn2.cellphones.com.vn/x/media/catalog/product/2/_/2_61_8_2_1_4_1_1.jpg"
                class="card-img-top"
                alt="   Iphone 13 Pro Max (256gb)- Chính hãng Vn/A "
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                Iphone 13 Pro Max (256gb)- Chính hãng Vn/A
              </h5>
              <p class="card-price">28.990.000 VND</p>
              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Banner from "../PageLayout/Banner.vue";
import MenuHeader from "../PageLayout/MenuHeader.vue";
import CrollBrand from "@/components/ProductDetail/CrollBrand.vue";
import Footer from "@/components/PageLayout/Footer.vue";
</script>
<style scoped>
.product-page {
  margin-top: 70px;
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
