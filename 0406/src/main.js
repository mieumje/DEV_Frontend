import ProductOptions from "./ProductOptions.js"

const dummyData = [
    {
        optionId: 1,
        optionName: "더미 데이터1",
        optionPrice: 30000,
        stock: 10
    },
    {
        optionId: 2,
        optionName: "더미 데이터2",
        optionPrice: 24500,
        stock: 2
    },
    {
        optionId: 3,
        optionName: "더미 데이터3",
        optionPrice: 15000,
        stock: 0
    }
];
const $target = document.querySelector("#app");
new ProductOptions({
    $target,
    initialState: dummyData,
    onSelect: (option) => {
        alert(option.optionName)
    }
});