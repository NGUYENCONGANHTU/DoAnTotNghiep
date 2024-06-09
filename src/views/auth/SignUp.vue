<template>
  <div class="container">
    <div class="form-container">
      <p class="title">Sign Up</p>
      <form class="form">
        <div class="user-name">
          <label for="username" class="form-label">User Name:</label> <br />
          <input type="user" class="input" />
        </div>
        <div class="email">
          <label for="email" class="label-email">Email:</label> <br />
          <input type="email" class="input" placeholder="abc@gmail.com" />
        </div>
        <div class="password">
          <label for="password" class="form-label">Password:</label>
          <br />
          <input type="password" class="input-password" />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="green"
              class="bi bi-eye eye-icon"
              viewBox="0 0 16 16"
              style="cursor: pointer"
            >
              <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
              />
              <path
                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
              />
            </svg>
          </span>
        </div>
        <div class="confirm">
          <label for="confirm-password" class="form-label"
            >Confirm Password:</label
          >
          <br />
          <input type="password" class="input-password" />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="green"
              class="bi bi-eye eye-icon"
              viewBox="0 0 16 16"
              style="cursor: pointer"
            >
              <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
              />
              <path
                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
              />
            </svg>
          </span>
        </div>
        <button class="form-btn">Log in</button>
      </form>
      <p class="text-login">
        Đã có tài khoản ? <router-link to="/login">Đăng Nhập</router-link>
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form-container {
  width: 380px;
  height: 600px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
  position: relative;
}

.title {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 0 0 15px 0;
  font-size: 28px;
  font-weight: 800;
  color: #008080;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 15px;
}
.input-password {
  width: 100%;
}
.input {
  border-radius: 20px;
  border: 1px solid #3b4f63;
  outline: 0 !important;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 15px;
}

.input-password {
  border-radius: 20px;
  border: 1px solid #3b4f63;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
}
.page-link {
  text-decoration: underline;
  margin: 0;
  text-align: end;
  color: #747474;
  text-decoration-color: #747474;
}

.page-link-label {
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 9px;
  font-weight: 700;
}

.page-link-label:hover {
  color: #000;
}

.form-btn {
  padding: 12px 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: teal;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  bottom: 35px;
  width: 85%;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  margin: 0;
  font-size: 10px;
  color: #747474;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.sign-up-link {
  margin-left: 1px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: teal;
  color: teal;
  cursor: pointer;
  font-weight: 800;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.password {
  position: relative;
}
.confirm {
  position: relative;
}

.password span {
  position: absolute;
  right: 10px;
  top: 45px;
}
.confirm span {
  position: absolute;
  right: 10px;
  top: 45px;
}
label {
  margin-bottom: 0.5rem;
  color: #008080;
  font-weight: 420;
}
.eye-icon {
  fill: #3b4f63;
}
</style>
