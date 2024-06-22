<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PlusCustomer">
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

    <!-- Modal -->
    <div
        class="modal fade"
        id="PlusCustomer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm tài khoản người dùng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="addUser">
                    <div class="modal-body">
                        <!--v-if-->
                        <div class="mb-3">
                            <!-- Tên người dùng --><label for="username" class="form-label">Tên người dùng</label
                            ><input
                                type="text"
                                name="username"
                                id="username"
                                class="form-control"
                                placeholder=""
                                v-model="userInfo.username"
                            />
                        </div>
                        <!-- Email -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label
                            ><input
                                type="email"
                                name="email"
                                id="email"
                                class="form-control"
                                placeholder=""
                                v-model="userInfo.email"
                            />
                        </div>
                        <!-- Mật khẩu -->
                        <div class="mb-3">
                            <label for="password" class="form-label">Mật khẩu</label
                            ><input
                                type="password"
                                name="password"
                                id="password"
                                class="form-control"
                                placeholder=""
                                v-model="userInfo.password"
                            />
                        </div>
                        <!-- Chọn quyền  -->
                        <div class="mb-3">
                            <label for="role" class="form-label">Quyền</label
                            ><select class="form-select form-select-sm" name="role" id="role" v-model="userInfo.role">
                                <option>Chọn quyền</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                            </select>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                        <button type="submit" class="btn btn-success">
                            <span v-if="loading">Đang thêm...</span>
                            <span v-else>Xác nhận</span>
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
import { useRouter } from "vue-router";

const userInfo = ref({
    username: "",
    email: "",
    password: "",
    role: "",
});
const loading = ref(false);
const router = useRouter();
const addUser = async () => {
    loading.value = true;
    await addDoc(collection(db, "users"), userInfo.value);
    toast.success(`Đã thêm người dùng ${userInfo.value.username} thành công`);
    loading.value = false;
    router.go(0);
};
</script>
