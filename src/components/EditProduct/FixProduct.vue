<template>
    <button
        type="button"
        class="btn btn-success m-1"
        data-bs-toggle="modal"
        :data-bs-target="`#${index}`"
        data-bs-whatever="@mdo"
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
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1l1-4Z"></path>
            </g>
        </svg>
        Sửa
    </button>
    <div class="modal fade" :id="index" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="editProduct">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Tên sản phẩm:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="productEdit.name" />
                        </div>
                        <div class="mb-3">
                            <label for="brand" class="form-label">Hãng:</label
                            ><select
                                class="form-select form-select-sm mb-3"
                                aria-label="Large select example"
                                fdprocessedid="kijs1k"
                                v-model="productEdit.brand"
                            >
                                <option value="Apple">Apple</option>
                                <option value="SamSung">SamSung</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Oppo">Oppo</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Mô tả:</label>
                            <textarea
                                class="form-control"
                                id="message-text"
                                v-model="productEdit.description"
                            ></textarea>
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
                                v-model="productEdit.quantity"
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
                                v-model="productEdit.price"
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
                                    v-model="productEdit.imageUrl"
                                    v-if="productEdit.imageUrl != ''"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button class="btn btn-primary">
                            <span v-if="loading">Sửa...</span>
                            <span v-else>Sửa</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

import { toast } from "vue3-toastify";
import { getStorage, ref as refStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRouter } from "vue-router";
const props = defineProps({
    data: { type: Object },
    loading: {
        type: Boolean,
    },
    index: {
        type: Number,
    },
});

const productEdit = ref();
const storage = getStorage();
const updateProgress = ref(0);
const loading = ref(false);
const router = useRouter();
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
                productEdit.value.imageUrl = downloadURL;
            });
        }
    );
};

const editProduct = async () => {
    loading.value = true;
    await updateDoc(doc(db, "products", `${productEdit.value.id}`), {
        ...productEdit.value,
    });
    loading.value = false;

    toast.success("Sửa thành công");

    router.go(0);
};

onBeforeMount(() => {
    productEdit.value = props.data;
});
</script>
<style scoped>
.form-select-sm {
    padding: 10px;
}
textarea.form-input {
    height: 200px;
}
</style>
