<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#PlusProduct"
    data-bs-whatever="@mdo"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-plus-circle"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
      />
      <path
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
      />
    </svg>
    Thêm
  </button>
  <div
    class="modal fade"
    id="PlusProduct"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm sản phẩm</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label"
                >Tên sản phẩm:</label
              >
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-3">
              <label for="brand" class="form-label">Hãng:</label
              ><select
                class="form-select form-select-sm mb-3"
                aria-label="Large select example"
                fdprocessedid="kijs1k"
              >
                <option value="Tide">Apple</option>
                <option value="Gain">SamSung</option>
                <option value="Persil">Xiaomi</option>
                <option value="Persil">Oppo</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Mô tả:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <div class="mb-3">
              <label for="quantity" class="form-label">Tồn kho:</label
              ><input
                type="number"
                class="form-control"
                name="quantity"
                id="quantity"
                aria-describedby="quantityID"
                fdprocessedid="w0mucc"
              />
            </div>
            <div class="mb-3">
              <label for="quantity" class="form-label">Giá sản phẩm:</label
              ><input
                type="number"
                class="form-control"
                name="quantity"
                id="quantity"
                aria-describedby="quantityID"
                fdprocessedid="w0mucc"
              />
            </div>
            <div class="mb-3">
              <label for="imageUrl" class="form-label">Chọn ảnh</label
              ><input
                type="file"
                class="form-control"
                accept="image/*"
                name="imageUrl"
                id="imageUrl"
                placeholder=""
                aria-describedby="fileHelpId"
              />
              <div id="fileHelpId" class="form-text">
                Lưu ý ảnh không quá 20Mb
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style="display: none"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  style="width: 0%"
                >
                  0%
                </div>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  disabled=""
                  fdprocessedid="xohzq"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Hủy
          </button>
          <button type="button" class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.form-select-sm {
  padding: 10px;
}
textarea.form-input {
  height: 200px;
}
</style>
