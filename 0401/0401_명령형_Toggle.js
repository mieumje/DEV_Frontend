// 버튼 3개 만들기
const $button1 = document.createElement('button');
$button1.textContent = 'button 1';
const $button2 = document.createElement('button');
$button2.textContent = 'button 2';
const $button3 = document.createElement('button');
$button3.textContent = 'button 3';

// 버튼을 화면에 렌더링
const $body = document.querySelector('body');
$body.appendChild($button1);
$body.appendChild($button2);
$body.appendChild($button3);

// 버튼 클릭 시 삭선추가
const toggleButton = ($button) => {
    if($button.style.textDecoration === 'line-through'){
        $button.style.textDecoration = '';
    } else{
        $button.style.textDecoration = 'line-through';
    }
};

document.querySelectorAll('button').forEach($button => {
    $button.addEventListener('click', (e) => {
        toggleButton(e.target);
    });
});