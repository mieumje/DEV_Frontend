# CSS Preprocessor Sass(SCSS)

CSS 기본 문법만으로는 복잡한 스타일 처리를 효율적으로 관리하기 어렵다.
조금더 프로그래밍적인 방법으로 스타일을 다루는 용도로 Sass(SCSS) 같은 전처리 도구를 활용할 수 있다. 웹 브라우저에서는 표준 CSS가 아닌 Sass(SCSS)같은 전처리 도구는 직접 활용할 수 없다. 작성의 효율성을 위해 전처리 도구를 활용하고, 직접 동작하는 CSS로 변환하는 작업을 해야한다. 전환 작업을 위해 Node.js 설치가 필요하다.

# [SCSS, Sass 차이](https://sass-lang.com/)


SCSS 같은 경우는 중괄호 {}를 통해 범위를 잡아주는 개념이 존재한다. 속성과 값의 마지막에 세미 콜론(;) 을 사용한다.

Sass는 중괄호와 세미콜론을 사용하지 않는다. Sass 문법은 범위를 지정하기 위해 들여쓰기(tab)이 중요하다. 들여쓰기를 잘 못 작성하면 적영되는 속성과 값의 범위가 달라질 수 있기 때문에 주의해야한다.

```CSS
/* CSS */
/* 전처리 도구의 문법을 통해 표준 CSS로 변환한 결과 */
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

```SCSS
/* SCSS */
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

```CSS
/* Sass */
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

Sass 전처리 도구가 제일 먼저 출시되었고, CSS와 호환을 위해 SCSS가 Sass 문법을 매핑하여 나온 개념이다. CSS 문법과 Sass 전처리 도구의 호환성을 고려한다면 SCSS 문법으로 사용하는 것을 적극적으로 권장한다고 한다.

# [Sass meister](https://www.sassmeister.com/)

Sass, SCSS 전처리 도구로 작성한 문법이 표준 CSS로 변환되는 것을 확인할 수 있다.

