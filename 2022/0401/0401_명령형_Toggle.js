// 버튼 3개 만들기
const $button1 = document.createElement('button');
$button1.textContent = 'button 1';
$button1.className = 'button 1';
let button1ClickCount = 0;
const $button2 = document.createElement('button');
$button2.textContent = 'button 2';
$button2.className = 'button 2';
let button2ClickCount = 0;
const $button3 = document.createElement('button');
$button3.textContent = 'button 3';
$button3.className = 'button 3';
let button3ClickCount = 0;

// 버튼을 화면에 렌더링
const $body = document.querySelector('body');
$body.appendChild($button1);
$body.appendChild($button2);
$body.appendChild($button3);

// 버튼 클릭 시 삭선추가
const toggleButton = ($button) => {
    if($button.className === 'button 1'){
        button1ClickCount += 1;
        $button.textContent = `${$button.className} 버튼 토글 횟수 : ${button1ClickCount}`;
        if(button1ClickCount % 3 === 0) alert('3번 눌렀다.');
    }
    if($button.className === 'button 2'){
        button2ClickCount += 1;
        $button.textContent = `${$button.className} 버튼 토글 횟수 : ${button2ClickCount}`;
        if(button2ClickCount % 3 === 0) alert('3번 눌렀다.');
    }
    if($button.className === 'button 3'){
        button3ClickCount += 1;
        $button.textContent = `${$button.className} 버튼 토글 횟수 : ${button3ClickCount}`;
        if(button3ClickCount % 3 === 0) alert('3번 눌렀다.');
    }

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