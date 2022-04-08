import App from "./App.js";

const DUMMY_DATA = [
    {
        _id: 1,
        content: "Javascript 공부",
        isCompleted: true
    },
    {
        _id: 2,
        content: "Javascript 복습",
        isCompleted: false
    }
];

const $target = document.querySelector('#app');
new App({
    $target,
    initialState: DUMMY_DATA
})


