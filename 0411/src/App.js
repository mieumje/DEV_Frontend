import PostPage from "./PostPage.js";
import PostEditPage from "./PostEditPage.js";
// url 규칙
// 루트 : postPage 그리기

// /posts/{id} - id에 해당하는 post 생성
// /posts/new - 새 post 생성

export default function App({ $target }){
    const postPage = new PostPage({ $target });
    const postEditPage = new PostEditPage({ $target, initialState: {
        postId: 'new',
        post: {
            title: '',
            content: ''
        } 
    }});


    this.route = () => {
        const { pathname } = window.location;

        console.log(pathname);
        if(pathname === '/'){
            console.log("루트")
            postPage.render();
        } else if(pathname.indexOf('/posts/') === 0){
            const [, , postId] = pathname.split('/');
            console.log(postId)
            postEditPage.setState({
                postId: postId
            });
        }
    };

    this.route();
    
    postPage.render();
}