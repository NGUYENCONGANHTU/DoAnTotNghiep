<template>
  <button
    type="button"
    class="btn btn-success m-1"
    data-bs-toggle="modal"
    data-bs-target="#FixCustomer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      class="iconify iconify--lucide"
      style="color: white"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
        ></path>
        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1l1-4Z"></path>
      </g>
    </svg>
    Sửa
  </button>
  <div
    class="modal fade"
    id="FixCustomer"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Sửa tài khoản người dùng
          </h1>
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

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
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
