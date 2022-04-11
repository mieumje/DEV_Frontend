import { request } from "./api.js";
import Editor from "./Editor.js";
import { getItem, setItem } from "./storage.js";

export default function PostEditPage({$target, initialState}) {
    const $page = document.createElement('div');

    this.state = initialState;
    
    let postLocalSaveKey = `temp-post-${this.state.postId}`;
    const post = getItem(postLocalSaveKey, {
        title: '',
        content: ''
    });
    this.setState = async (nextState) => {
        console.log(this.state.postId, nextState.postId)
        if(this.state.postId !== nextState.postId){
            postLocalSaveKey = `temp-post-${nextState.postId}`;
            this.state = nextState;
            await fetchPost();
            return
        }
        this.state = nextState;
        this.render();
        console.log(this.state.post)
        editor.setState(this.state.post || {
            title: '',
            content: ''
        });
    }

    let timer = null;
    const editor = new Editor({
        $target: $page,
        initialState: post,
        onEditing: (post) => {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                setItem(postLocalSaveKey, {
                    ...post,
                    tempSaveDate: new Date()
                });
            }, 500)
        }
    });

    this.render = () => {
        $target.appendChild($page);
    };

    const fetchPost = async () => {
        const { postId } = this.state;
        if(postId !== 'new'){
            const post = await request(`/posts/${postId}`);

            this.setState({
                ...this.state,
                post
            })
        }        
    }

    fetchPost();
}