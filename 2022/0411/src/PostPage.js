import { request } from "./api.js";
import LinkButton from "./LinkButton.js";
import PostList from "./PostList.js";

export default function PostPage({
    $target
}){
    const $page = document.createElement('div');

    const postList = new PostList({
        $target: $page,
        initialState: []
    });

    new LinkButton({
        $target: $page,
        initialState:{
            text: "New Post",
            link: '/posts/new'
        }
    });

    const fetchPosts = async () => {
        const posts = await request('/posts', {
            method: 'GET'
        });
    
        postList.setState(posts);
    };

    this.render = async () => {
        await fetchPosts();
        $target.appendChild($page);
    };

    
}