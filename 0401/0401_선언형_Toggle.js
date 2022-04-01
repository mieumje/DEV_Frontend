function toggleButton({
    $tartget,
    text,
    onClick
}){
    const $button = document.createElement('button');
    $tartget.appendChild($button);
    let clickCount = 0;

    this.render = () => {
        $button.textContent = text;
        $button.addEventListener('click', () => {
            if($button.style.textDecoration === 'line-through'){
                $button.style.textDecoration = '';
            } else{
                $button.style.textDecoration = 'line-through';
            }
            clickCount += 1;
            $button.textContent = `${text} 버튼 토글 횟수 : ${clickCount}`

            //if(clickCount % 3 === 0) alert('3번 클릭했습니다.');
            if(onClick){
                onClick(clickCount);
            }
        });
    };

    this.render();
};

const $body = document.querySelector('body');

new toggleButton({
    $tartget: $body,
    text: 'button 1',
    onClick : (clickCount) => {
        if(clickCount % 3 === 0) alert('3번 클릭했습니다.');
    }
});
new toggleButton({
    $tartget: $body,
    text: 'button 2'
});
new toggleButton({
    $tartget: $body,
    text: 'button 3'
});