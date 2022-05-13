# Vuex 라이브러리
이전의 작성한 내용들을 최적화하여 편리하게 사용할 수 있는 라이브러리이다.

Vuex는 Vue.js 애플리케이션에 대한 상태 관리 패턴 라이브러리이다. 상태 관리라는 것이 중요하다.

#### 이전 커밋
1. [state-reative](https://github.com/mieumje/DEV_Frontend_2/commit/befccc7eda09ded3a8672e1e7477088d22b9fa0e)
2. [actions](https://github.com/mieumje/DEV_Frontend_2/commit/4b6aae174db7bdad35fc842c33b309cb49c777d8)
3. [getters](https://github.com/mieumje/DEV_Frontend_2/commit/2276722c74c664bd172016804f50fc5a3963f388)

이전 커밋에서 store/index.js에서 msg, count 데이터를 state라는 이름의 객체 데이터로 만들어 사용했는데, 이 때 state가 상태이다.

Vuex에서는 관리하고 사용할 데이터를 상태(state)라고 부른다. 상태라는 것은 하나의 데이터라고 할 수 있다. Vuex는 애플리케이션의 모든 컴포넌트의 중장 집중식 저장소(Store) 역할을 한다. 부모-자식, 조상-후손관계가 아닌 모든 컴포넌트 대상이다.


# Vuex 설치
### [Vuex.4](https://vuex.vuejs.org/)

일반 의존성 패키지로 설치하기

> npm install vuex@next --save

일반적인 사용 방법은 다음과 같다.

```js
import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store) // plugin을 사용하는 것과 동일하게 use 메서드를 통해 사용한다.
```