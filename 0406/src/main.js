import ProductOptions from "./ProductOptions.js"
import {request} from "./api.js";
import ProductPage from "./ProductPage.js";

const $target = document.querySelector("#app");

new ProductPage({
    $target,
    initialState:{
        productId: 1,
    }
})