<template>
  <menu-header />
  <div class="container-fluid">
    <section>
      <div class="welcome">
        <h2>GIỚI THIỆU</h2>
      </div>
    </section>
    <section>
      <div class="container">
        <h5>1.Giới thiệu về cửa hàng điện thoại CellInfo</h5>
        <p class="welcome-text">
          Chào mừng bạn đến với Cửa Hàng Điện Thoại CellInfo – điểm đến lý tưởng
          cho tất cả những ai yêu công nghệ và tìm kiếm các sản phẩm di động
          chất lượng cao.
        </p>
      </div>
    </section>
  </div>
</template>
<script setup>
import MenuHeader from "@/components/PageLayout/MenuHeader.vue";
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playwrite+IT+Moderna:wght@100..400&family=Playwrite+US+Trad:wght@100..400&display=swap");
.container-fluid {
  border: 1px solid;
  height: 100vh;
}
section {
  border: 1px solid;
}
section .container {
  border: 1px solid;
}
.welcome {
  text-align: center;
  color: #4a5291;
  margin-top: 20px;
}
.welcome h2 {
  border: 1px solid;

  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
}
.welcome-text {
  margin-left: 20px;
}
</style>
