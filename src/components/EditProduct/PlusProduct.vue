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
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
            />
        </svg>
        Thêm
    </button>
    <div class="modal fade" id="PlusProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="addProduct">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Tên sản phẩm:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="product.name" />
                        </div>
                        <div class="mb-3">
                            <label for="brand" class="form-label">Hãng:</label
                            ><select
                                class="form-select form-select-sm mb-3"
                                aria-label="Large select example"
                                fdprocessedid="kijs1k"
                                v-model="product.brand"
                            >
                                <option value="Apple">Apple</option>
                                <option value="SamSung">SamSung</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Oppo">Oppo</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Mô tả:</label>
                            <textarea class="form-control" id="message-text" v-model="product.description"></textarea>
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
                                v-model="product.quantity"
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
                                v-model="product.price"
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
                                @change="(e) => uploadImage(e)"
                            />
                            <div id="fileHelpId" class="form-text">Lưu ý ảnh không quá 20Mb</div>
                            <div
                                v-show="updateProgress > 0"
                                class="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <div
                                    class="progress-bar progress-bar-striped progress-bar-animated"
                                    :style="`width: ${updateProgress}%`"
                                >
                                    {{ `${updateProgress}%` }}
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
                                    v-model="product.imageUrl"
                                    v-if="product.imageUrl != ''"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button type="submit" class="btn btn-primary">
                            <div v-if="loading" class="spinner-border" role="status" style="width: 1rem; height: 1rem">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <span v-else>Thêm</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "vue3-toastify";
import { getStorage, ref as refStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const product = ref({
    name: "",
    brand: "",
    description: "",
    quantity: 0,
    price: 0,
    imageUrl: "",
});
const updateProgress = ref(0);
const loading = ref(false);

const uploadImage = (e) => {
    // lấy thông tin hình ảnh
    const image = e.target.files[0];
    // lấy đuôi file hình ảnh
    const imageExtension = image.name.split(".").pop();
    // đường link upload lên firebase
    const storageRef = refStorage(storage, `products/${Date.now()}.${imageExtension}`);

    // bắt đầu upload ảnh lên storage
    const uploadTask = uploadBytesResumable(storageRef, image);

    // quá trình load ảnh
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            updateProgress.value = progress;
            switch (snapshot.state) {
                case "paused":
                    console.log("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is running");
                    break;
            }
        },
        (error) => {
            toast.error("Có lỗi xảy ra");
            console.eror(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                product.value.imageUrl = downloadURL;
            });
        }
    );
};
// Hàm thêm sản phẩm
const addProduct = async () => {
    loading.value = true;
    const docRef = await addDoc(collection(db, "products"), product.value);

    loading.value = false;
    toast.success("Thêm sản phẩm thành công");
};
</script>
<style scoped>
.form-select-sm {
    padding: 10px;
}
textarea.form-input {
    height: 200px;
}
</style>
