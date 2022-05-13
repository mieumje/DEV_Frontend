# Vue Router
[링크](https://router.vuejs.org/introduction.html)

## 설치

> npm install vue-router@4

## HTML 구조

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</div>
```

router-link 컴포넌트는 html a tag과 유사하게 동작한다. router-view 컴포넌트는 페이지로 프로젝트를 구분하게 되면, 프로젝트에 해당하는 Vue.js의 컴포넌트를 어디에서 출력하는지를 정한다.

## Javascript

```js
// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
```

```js
// Home.vue
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
```

Vue Router를 플러그인으로 등록하면 $route, $router 두 개의 객체를 사용할 수 있다.

$route 객체는 현재 그 라우터 객체가 사용되는 컴포넌트의 페이지에 대한 정보를 갖고 있다. params를 통해 주소로 접근하고, username을 활용하는 예제이다.

$router 객체는 페이지에 대한 조작을 할 수 있는 객체다. 예제처럼 push() 메서드를 통해 현재 페이지에서 다음 페이지로 이동할 수 있다.