const data = [
    {
        text: "Javscript 학습"
    },
    {
        text: "함수형 프로그래밍 강의"
    },
];

const $app = document.querySelector('.app');

new App({
    $target: $app,
    initialState: data
});