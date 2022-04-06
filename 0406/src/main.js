import ProductOptions from "./ProductOptions.js"
import {request} from "./api.js";

const $target = document.querySelector("#app");
const fetchOptionData = (productId) => {
    return request(`/products/${productId}`)
        .then(product => {
            return request(`/product-options?product.id=${product.id}`)
        })
        .then(productOptions => {
            return Promise.all([
                Promise.resolve(productOptions),
                Promise.all(
                    productOptions.map(productOption => productOption.id).map(id => {
                        return request(`/product-option-stocks?productOption.id=${id}`)
                    })
                )
            ])
        })
        .then(data => {
            const [productOptions, stocks] = data;
            const optionDtata = productOptions.map((productOption, index) => {
                const stock = stocks[index][0].stock

                return {
                    optionid: productOption.id,
                    optionName: productOption.optionName,
                    optionPrice: productOption.optionPrice,
                    stock
                }
            })
            
            console.log(optionDtata)
            productOptionsComponent.setState(optionDtata);
        })
        
}
fetchOptionData(1);
const productOptionsComponent = new ProductOptions({
    $target,
    initialState: [],
    onSelect: (option) => {
        alert(option.optionName)
    }
});