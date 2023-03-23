export default {
  install(app, options) { // vue application 객체, / 옵션
    app.config.globalProperties[options.pluginName || '$fetch'] = (url, opts) => {
      return fetch(url, opts).then(res => res.json()); // $fetch 메서드를 통해 Promise 객체를 반환한다.
    };
    // fetch(url, options).then(res => res.json()).then(res => console.log(res))
  }
};