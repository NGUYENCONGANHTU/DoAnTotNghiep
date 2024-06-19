<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#DeleteProduct"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-dash-circle"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
      />
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
    </svg>
    Xóa
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="DeleteProduct"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Xóa sản phẩm
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Bạn chắc chắn xóa sản phẩm này chứ ? {{ props.data }}
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Hủy
          </button>
          <button type="button" class="btn btn-danger">Xóa</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { doc, deleteDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";
const props = defineProps({
  data: { type: Array },
});

const emits = defineEmits(["deleteProduct"]);

emits("deleteProduct", props.id);

const idRef = ref();

onMounted(() => {
  idRef.value = props.id;
});
console.log(props.id);

// await deleteDoc(doc(db, "products", "DC"));
</script>
