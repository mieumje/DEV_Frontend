import App from "./App.js";
import Editor from "./Editor.js";
import { getItem, setItem } from "./storage.js";

const $target = document.querySelector('#app');
const TEMP_POST_SAVE_KEY = 'temp-post';
const post = getItem(TEMP_POST_SAVE_KEY, {
    title: '',
    content: ''
});
new App({
    $target,
    initialState: ''
})
new Editor({
    $target, 
    initialState: post,
    onEditing: (post) => {
        setItem(TEMP_POST_SAVE_KEY, {
            ...post,
            tempSaveDate: new Date()
        });
    }
});