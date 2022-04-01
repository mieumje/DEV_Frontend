// 버튼 3개 만들기
const $button1 = document.createElement('button');
$button1.textContent = 'button 1';
const $button2 = document.createElement('button');
$button2.textContent = 'button 1';
const $button3 = document.createElement('button');
$button3.textContent = 'button 1';

// 버튼을 화면에 렌더링
const $body = document.querySelector('body');
$body.appendChild($button1);
$body.appendChild($button2);
$body.appendChild($button3);

// 버튼 클릭 시 삭선추가
$button1.addEventListener('click', () => {
    if($button1.style.textDecoration === 'line-through'){
        $button1.style.textDecoration = '';
    } else{
        $button1.style.textDecoration = 'line-through';
    }
});
$button2.addEventListener('click', () => {
    if($button2.style.textDecoration === 'line-through'){
        $button2.style.textDecoration = '';
    } else{
        $button2.style.textDecoration = 'line-through';
    }
});
$button3.addEventListener('click', () => {
    if($button3.style.textDecoration === 'line-through'){
        $button3.style.textDecoration = '';
    } else{
        $button3.style.textDecoration = 'line-through';
    }
});