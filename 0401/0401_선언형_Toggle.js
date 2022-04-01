function toggleButton({
    $tartget,
    text
}){
    const $button = document.createElement('button');
    $tartget.appendChild($button);

    $button.addEventListener('click', () => {
        if($button.style.textDecoration === 'line-through'){
            $button.style.textDecoration = '';
        } else{
            $button.style.textDecoration = 'line-through';
        }
    })
    this.render = () => {
        $button.textContent = text;
    }

    this.render();
};

const $body = document.querySelector('body');

new toggleButton({
    $tartget: $body,
    text: 'button 1'
});
new toggleButton({
    $tartget: $body,
    text: 'button 2'
});
new toggleButton({
    $tartget: $body,
    text: 'button 3'
});