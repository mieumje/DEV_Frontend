export default function PostList({ $target, initialState, onPostClick }){
    const $postList = document.createElement('div');
    $target.appendChild($postList);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        const { posts } = this.state;

        if(posts){
            $postList.innerHTML = `
                <ul>
                    ${posts.map(({title, id}) => `
                        <li data-id="${id}">${title}</li>
                    `).join('')}
                </ul>
            `;
        }
        
    }

    this.render();
}