import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/auth/Login.vue";
import SignUp from "../views/auth/SignUp.vue";
import Dashboard from "../views/Dashboard.vue";
import Product from "../views/Product.vue";
import OrderAdmin from "../views/OrderAdmin.vue";
import MenuHeader from "@/components/PageLayout/MenuHeader.vue";
import Banner from "@/components/PageLayout/Banner.vue";
import BrandPopular from "@/components/PageLayout/BrandPopular.vue";
import PhonePopular from "@/components/PageLayout/PhonePopular.vue";
import OnSale from "@/components/PageLayout/OnSale.vue";
import Footer from "@/components/PageLayout/Footer.vue";
import Home from "../views/Home.vue";
import Sidebar2 from "@/components/Admin/Sidebar2.vue";
import Customer from "../views/Customer.vue";
import DeleteProduct from "@/components/EditProduct/DeleteProduct.vue";
import DeleteCustomer from "@/components/EditCustomer/DeleteCustomer.vue";
import FixProduct from "@/components/EditProduct/FixProduct.vue";
import FixCustomer from "@/components/EditCustomer/FixCustomer.vue";
import PlusProduct from "@/components/EditProduct/PlusProduct.vue";
import PlusCustomer from "@/components/EditCustomer/PlusCustomer.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/menu",
      name: "menu",
      component: MenuHeader,
    },
    {
      path: "/banner",
      name: "banner",
      component: Banner,
    },
    {
      path: "/brandpopular",
      name: "brandpopular",
      component: BrandPopular,
    },
    {
      path: "/phonepopular",
      name: "phonepopular",
      component: PhonePopular,
    },
    {
      path: "/onsale",
      name: "onsale",
      component: OnSale,
    },
    {
      path: "/footer",
      name: "footer",
      component: Footer,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/sidebar2",
      name: "sidebar2",
      component: Sidebar2,
    },
    {
      path: "/order",
      name: "order",
      component: OrderAdmin,
    },
    {
      path: "/customer",
      name: "customer",
      component: Customer,
    },
    {
      path: "/deleteProduct",
      name: "deleteProduct",
      component: DeleteProduct,
    },
    {
      path: "/deleteCustomer",
      name: "deleteCustomer",
      component: DeleteCustomer,
    },
    {
      path: "/FixProduct",
      name: "FixProduct",
      component: FixProduct,
    },
    {
      path: "/PlusProduct",
      name: "PlusProduct",
      component: PlusProduct,
    },
    {
      path: "/PlusCustomer",
      name: "PlusCustomer",
      component: PlusCustomer,
    },
    {
      path: "/FixCustomer",
      name: "FixCustomer",
      component: FixCustomer,
    },
  ],
});

export default router;
