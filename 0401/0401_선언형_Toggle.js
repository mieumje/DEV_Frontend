function buttonGroup({
    $target,
    buttons
}){
    const $group = document.createElement('div');
    let isInit = false;

    this.render = () => {
        if(!isInit){
            buttons.forEach(({type, ...props}) => {
                console.log(type, props);
                console.log(type === 'toggle')
                if(type === 'toggle'){
                    new toggleButton({$target: $group, ...props});
                }else if(type === 'timer'){
                    new timerButton({$target: $group, ...props});
                }
            });

            $target.appendChild($group);
            isInit = true;
        }
    };

    this.render();
}

function timerButton({$target, text, timer = 3000}){
    const button = new toggleButton({$target, text, onClick: () => {
        setTimeout(() => {
            button.setState({
                ...button.state,
                toggled: !button.state.toggled 
            })
        }, timer)
    }})
}

function toggleButton({
    $target,
    text,
    onClick
}){
    const $button = document.createElement('button');
    $target.appendChild($button);
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

new buttonGroup({
    $target: $body,
    buttons: [
        {
            type: 'toggle',
            text: 'toggle button 1'
        },
        {
            type: 'toggle',
            text: 'toggle button 2',
            onClick : (clickCount) => {
                if(clickCount % 3 === 0) alert('3번 클릭했습니다.')
            }
        },
        {
            type: 'timer',
            text: 'timer button 1',
            timer: 1000 * 2
        }
    ]
});