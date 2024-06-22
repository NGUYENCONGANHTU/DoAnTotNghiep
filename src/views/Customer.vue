<template>
    <layout>
        <div class="container px-0">
            <div class="text-container d-flex align-items-center ml-2 mt-4 justify-content-center">
                <h4 class="text">QUẢN LÍ NGƯỜI DÙNG</h4>
            </div>
            <table class="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">Tên người dùng</th>
                        <th scope="col">Email</th>
                        <th scope="col">Quyền</th>

                        <th scope="col">
                            <PlusCustomer />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="user.id">
                        <td>{{ user.username }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.role }}</td>
                        <td class="btn-button">
                            <FixCustomer :data="user" :index="index" />
                            <DeleteCustomer :id="user.id" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </layout>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import Layout from "@/Layout/Layout.vue";
import DeleteCustomer from "@/components/EditCustomer/DeleteCustomer.vue";
import FixCustomer from "@/components/EditCustomer/FixCustomer.vue";
import PlusCustomer from "@/components/EditCustomer/PlusCustomer.vue";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";

const users = ref([]);
onBeforeMount(async () => {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        users.value.push({ id: doc.id, ...doc.data() });
    });
});
</script>
<style scoped>
.text {
    color: #4a5291;
    font-weight: 600;
}
th,
td {
    vertical-align: middle !important;
}
.btn {
    margin-left: 5px;
}
table th {
    color: #4a5291;
    font-weight: 600;
}
</style>
