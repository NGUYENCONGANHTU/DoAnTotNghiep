<template>
    <button type="button" class="btn btn-success m-1" data-bs-toggle="modal" :data-bs-target="`#${index}`">
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa tài khoản người dùng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="updateUser">
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
                                v-model="userEdit.username"
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
                                v-model="userEdit.email"
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
                                v-model="userEdit.password"
                            />
                        </div>
                        <!-- Chọn quyền  -->
                        <div class="mb-3">
                            <label for="role" class="form-label">Quyền</label
                            ><select class="form-select form-select-sm" name="role" id="role" v-model="userEdit.role">
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
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const props = defineProps({
    data: { type: Object },
    index: {
        type: Number,
    },
});
const loading = ref(false);
const userEdit = ref({
    id: props.data.id,
    username: props.data.username,
    email: props.data.email,
    password: props.data.password,
    role: props.data.role,
});
const router = useRouter();
const updateUser = async () => {
    loading.value = true;
    await updateDoc(doc(db, "users", `${userEdit.value.id}`), {
        ...userEdit.value,
    });
    loading.value = false;

    toast.success("Sửa thành công");

    router.go(0);
};
</script>
