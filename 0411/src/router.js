const ROUT_CHANGE_EVENT_NAME = 'route-change';
export const initRouter = (onRoute) => {
    window.addEventListener(ROUT_CHANGE_EVENT_NAME, (e) => {
        const { nextUrl } = e.detail;
        if(nextUrl){
            history.pushState(null,null,nextUrl);
            onRoute();
        }
    })

};

export const push = (nextUrl) => {
    window.dispatchEvent(new CustomEvent(ROUT_CHANGE_EVENT_NAME, {
        detail: {
            nextUrl
        }
    }))
};