export default function Header({ $target, initialState }){
    const $h1 = document.createElement('h1');
    $target.appendChild($h1);
    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        const { selectedUsername, isTodoLoading } = this.state;
        if(!selectedUsername){
            $h1.innerHTML = "";
            return
        }
        $h1.innerHTML = `${selectedUsername}의 할 일 목록 ${isTodoLoading ? '로딩중...' : ''}`;
    }

    this.render();
}