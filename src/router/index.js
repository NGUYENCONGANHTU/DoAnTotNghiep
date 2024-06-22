import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/auth/Login.vue";
import SignUp from "../views/auth/SignUp.vue";
import Dashboard from "../views/Dashboard.vue";
import Product from "../views/Product.vue";
import OrderAdmin from "../views/OrderAdmin.vue";
import MenuHeader from "@/components/PageLayout/MenuHeader.vue";
import BannerIphone from "@/components/PageLayout/BannerIphone.vue";
import Banner from "@/components/PageLayout/Banner.vue";
import BannerSamSung from "@/components/PageLayout/BannerSamSung.vue";
import BannerXiaomi from "@/components/PageLayout/BannerXiaomi.vue";
import BannerOppo from "@/components/PageLayout/BannerOppo.vue";
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
import ListProduct from "@/components/ProductDetail/ListProduct.vue";
import CrollBrand from "@/components/ProductDetail/CrollBrand.vue";
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
      path: "/Banner",
      name: "Banner",
      component: Banner,
    },
    {
      path: "/BannerIphone",
      name: "BannerIphone",
      component: BannerIphone,
    },
    {
      path: "/BannerSamSung",
      name: "BannerSamSung",
      component: BannerSamSung,
    },
    {
      path: "/BannerXiaomi",
      name: "BannerXiaomi",
      component: BannerXiaomi,
    },
    {
      path: "/BannerOppo",
      name: "BannerOppo",
      component: BannerOppo,
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
      path: "/",
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

    {
      path: "/ListProduct",
      name: "ListProduct",
      component: ListProduct,
    },
    {
      path: "/CrollBrand",
      name: "CrollBrand",
      component: CrollBrand,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
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
      path: "/admin",
      name: "admin",
      children: [
        {
          path: "",
          name: "adminPanel",
          component: Sidebar2,
        },
        {
          path: "orders",
          name: "adminOrder",
          component: OrderAdmin,
        },
        {
          path: "products",
          name: "adminProduct",
          component: Product,
        },
        {
          path: "customers",
          name: "adminCustomer",
          component: Customer,
        },
      ],
    },
  ],
});

export default router;
