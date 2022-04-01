function timerButton({$tartget, text, timer = 3000}){
    const button = new toggleButton({$tartget, text, onClick: () => {
        setTimeout(() => {
            button.setState({
                ...button.state,
                toggled: !button.state.toggled 
            })
        }, timer)
    }})
}

function toggleButton({
    $tartget,
    text,
    onClick
}){
    const $button = document.createElement('button');
    $tartget.appendChild($button);
    // let clickCount = 0;
    this.state = {
        clickCount: 0,
        toggled: false
    }
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        $button.textContent = text;
        $button.style.textDecoration = this.state.toggled ? 'line-through' : '';  
    };

    $button.addEventListener('click', () => {
        this.setState({
            clickCount: this.state.clickCount + 1,
            toggled: !this.state.toggled
        })
        $button.textContent = `${text} 버튼 토글 횟수 : ${this.state.clickCount}`

        //if(clickCount % 3 === 0) alert('3번 클릭했습니다.');
        if(onClick){
            onClick(this.state.clickCount);
        }
    });

    this.render();
};

const $body = document.querySelector('body');

new toggleButton({
    $tartget: $body,
    text: 'button 1',
    onClick : (clickCount) => {
        if(clickCount % 3 === 0) alert('3번 클릭했습니다.')
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
new timerButton({
    $tartget: $body,
    text: 'button 4',
    timer: 1000 * 4
});