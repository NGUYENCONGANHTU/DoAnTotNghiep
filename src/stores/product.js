import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
    const productsStore = ref([]);
    const searchResult = ref([]);
    function storeProduct(data) {
        productsStore.value = data;
    }

    function searchProduct(search) {
        searchResult.value = [];
        const tempProducts = productsStore.value.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );

        console.log(tempProducts);
        searchResult.value = tempProducts;
    }

    function sortProduct(products, sort) {
        let tempProducts = [];
        // console.log(products, sort)
        if (sort === "lowest-price") {
            tempProducts = products.slice().sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (sort === "highest-price") {
            tempProducts = products.slice().sort((a, b) => {
                return b.price - a.price;
            });
        }
        if (sort === "a-z") {
            tempProducts = products.slice().sort((a, b) => a.name.localeCompare(b.name));
        }
        if (sort === "z-a") {
            tempProducts = products.slice().sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
        }
        productsStore.value = tempProducts;
        return productsStore.value;
    }
    return { productsStore, storeProduct, sortProduct, searchProduct, searchResult };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
