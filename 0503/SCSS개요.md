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

---

# SCSS - 주석, 중첩

## 주석
```SCSS
/* 기존 CSS와 동일 */
/* //를 사용하면 기존 주석과 달리 컴파일 결과로 출력 되지 않는다. */
```

1. /* */ : 컴파일이 되는 주석
2. // : 컴파일이 되지 않는 주석

```CSS
/* Sass 여러 줄 주석처리 */
div
  /* width: 100px
    height: 200px
    color: orange */

/* Scss 여러 줄 주석처리 */
div {
  /* width: 100px
  height: 200px
  color: orange */
}
```

Sass의 경우 여러줄 주석처리를 하고 싶다면 들여쓰기를 신경써야 한다. SCSS는 CSS에서 사용하듯 사용하면 된다.

## 중첩

```CSS
/* SCSS */
.container {
    display: felx;
    .item {
        flex-grow: 1;
    }
}

/* CSS */
.container {
  display: felx;
}
.container .item {
  flex-grow: 1;
}

/* SCSS */
.container {
    display: felx;
    .item {
        flex-grow: 1;
        > span {
            color: red;
            &:hover {
                color: blue;
            }
        }
    }
}

/* CSS */
.container {
  display: felx;
}
.container .item {
  flex-grow: 1;
}
.container .item > span {
  color: red;
}
.container .item > span:hover {
  color: blue;
}
```

선택자 안에 선택자가 있는 중첩(Nesting) 기능이 있다.
중첩기능에서 &(앤퍼센드)기호가 있는데, 상위 선택자를 참조하는 기능이다. & 기호가 있는 범위({} 중괄호 범위의)에서 해당하는 선택자를 참조하게 된다. 예시에서는 $기호에 span이 들어오게 된다.

```CSS
/* SCSS */
.container {
    display: flex;
    .item {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;
        flex: {
            grow: 1;
            shrink: 0;
            basis: auto;
        };
    }
}

/* CSS */
.container {
  display: flex;
}
.container .item {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
}
```

속성을 작성할 때, 반복하는 키워드가 존재하는 경우 범위로 지정하여 작성할 수 있다.

```CSS
/* SCSS */
ul, ol {
    li {
        width: 100px;
        color: red;
    }
}

/* CSS */
ul li, ol li {
  width: 100px;
  color: red;
}
```

쉼표를 통해 다중 선택자를 사용할 수 있다. 선택된 선택자에 대해 동일하게 중첩이 적용된다.

---

## 변수, 데이터, 연산자 1
변수를 선언할 때 ($)를 사용하고, 변수의 이름을 지정한 후 (:)를 (=)대신 적고 값을 추가한다.

```CSS
/* let size = 100; */
$size: 100;
$src: "img/logo.jpg";
$color-blue: royalblue;
$color-gray: #333;
```

```CSS
/* SCSS */
$size: 100;
$src: "img/logo.jpg";
$color-blue: royalblue;
$color-gray: #333;
$w: 100px;

.box-a {
    width: $w;
    height: $w;
    margin: $w;
}

/* CSS */
.box-a {
  width: 100px;
  height: 100px;
  margin: 100px;
}
```

이렇게 변수를 활용해 재활용 할 수 있다. 변수는 유효범위를 갖고 있는데, 변수가 선언된 블록 내에서만 유효 범위를 갖는다.

```CSS
.box-a {
    $h: 200px;
    width: $w;
    height: $h;
    margin: $w;
}
.box-b {
    height: $h; /* Error : Undefined variable */
}
```

정의되지 않은 변수를 사용하고 있다는 에러가 발생한다. 변수가 선언된 블록 안에서만 사용할 수 있고, 범위 밖에선 사용할 수 없다. 자바스크립트의 let과 동일하다.

Sass에서는 유효 범위를 바꿔줄 수 있는 플래그가 있다.

```CSS
/* SCSS */
.box-a {
    $h: 200px !global;
    width: $w;
    height: $h;
    margin: $w;
}
.box-b {
    height: $h;
}

/* CSS */
.box-a {
  width: 100px;
  height: 200px;
  margin: 100px;
}

.box-b {
  height: 200px;
}
```

!를 통해 추가하는 키워드를 플래그라고 한다. !global 플래그를 통해 범위를 전역으로 변경할 수 있다.

```CSS
/* SCSS */
$w: 100px;

.box-a {
    $w: 777px;
    $h: 200px !global;
    width: $w;
    height: $h;
    margin: $w;
}
.box-b {
    width: $w;
    height: $h;
}

/* CSS */
.box-a {
  width: 777px;
  height: 200px;
  margin: 777px;
}

.box-b {
  width: 100px;
  height: 200px;
}
```

변수를 재할당하여 사용할 수 있다. 재할당된 변수는 지역변수로 활용된다. 전역변수에는 영향이 없다.

```CSS
/* SCSS */
$primary : blue;

.box {
    $primary: orange !default;
    background-color: $primary;
}

/* CSS */
.box {
  background-color: blue;
}
```

!default 플래그를 통해 변수에 할당된 값이 있는 경우는 해당 변수 값을 사용하겠다고 지정할 수 있다.


```CSS
/* SCSS */
// 자바스크립트 보간 `Hello ${data}`

$name: "github";
$path: "-assets/images";

.box {
    background-image: url("#{$path}/#{$name}.png");
}

/* CSS */
.box {
  background-image: url("-assets/images/github.png");
}
```

자바스크립트 처럼 SCSS에서는 보간을 사용할 수 있다. 자바스크립트와는 달리 ${}형태가 아닌, #{}형태로 사용할 수 있다.

---

## 변수, 데이터, 연산자 2

Sass에는 Numbers라는 숫자 데이터가 존재한다. px 단위같이 단위가 붙어 있는 데이터도 숫자 단위로 취급한다.

```CSS
/* Numbers */
$number1: 1;
$number2: .82;
$number3: 20px;
$number4: 2fr;
```

문자 데이터는 CSS 속성에 값으로 사용할 수 있는 모든 문자 데이터들을 의미한다. CSS에서 사용할 수 있는 문자로 된 값이나 ("")로 묶여진 모든 값은 문자 데이터이다.

```CSS
/* Strings */
$string1: bold;
$string2: absolute;
$string3: "img/images/";
```

색상 데이터가 존재한다. CSS에서 만들 수 있는 모든 색상은 색상 데이터에 해당된다.

```CSS
/* Colors */
$color1: blue;
$color2: yellowgreen;
$color3: rgba(255,0,0,.5);
$color4: #ffff00;
```

Boolean 데이터도 존재한다. true, false를 적으면 boolean 데이터로 취급이 되고, boolean 데이터를 활용할 수 있는 조건문도 있다.

```CSS
/* Booleans */
$boolean1: true;
$boolean2: false;
```

Null 데이터도 존재한다. Null 값을 가진 요소는 컴파일되지 않는다.

```CSS
/* Null */
$null: null;
```

자바스크립트의 배열이나 객체데이터와 유사하게 Sass에는 리스트 데이터가 있다. ()를 통해 리스트 형태로 사용할 수 있다. 배열 데이터처럼 각각의 아이템을 반복처리하거나 인덱싱하여 처리할 수 있다. 소괄호()를 제거하더라고 리스트로 사용할 수 있다. 그리고 소괄호()를 제거하고, 쉼표(,)를 제거하더라도 리스트로 사용할 수 있다.

```CSS
/* Lists */
/* [0, 1, 2, ,3] */
$list1: (10px, 20px, 30px, 40px);
$list2: 10px, 20px, 30px;
$list2: 10px 20px 30px;
```

자바스크립트의 객체 데이터와 유사한 Maps 데이터도 존재한다. 차이점은 중괄호를 사용하지 않고 소괄호를 사용한다. 리스트 데이터와 달리 소괄호()는 생략할 수 없다.

```CSS
/* { key : value } 형태의 자바스크립트 객체데이터 */
$map1: ( key : value );
$map2: ( a: apple, b : banana, c : cherry );
```

---

## 변수, 데이터, 연산자 3


산술 연산자 종류
| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
|+|-|*|/|%|


```CSS
/* SCSS */
.box {
  width: 100px + 200px;
  height: 200px - 50px;
  margin: 200px * 2;
  opacity: 10 % 3;
  top: 20px / 2;
}

/* CSS */
.box {
  width: 300px;
  height: 150px;
  margin: 400px;
  opacity: 1;
  top: 20px/2; /* 10이 아니라 그대로 입력된다. */
}
```

나누기 연산자를 사용할 때 문제가 발생하는 이유는 다음과 같다.

```CSS
.box {
  background-position: 100px 100px; /* 요소의 배경이미지의 위치값 top, left를 지정 */
  background-size: 200px 200px; /* 요소의 배경이미지의 가로 너비, 세로 너비를 지정 */
}
```

```CSS
.box {
  background-position: 100px 100px;
  background-size: 200px 200px;
  /* background-position과 background-size 속성은 background 단축 속성으로 지정이 가능하다 */
  background: 100px 100px 200px 200px;
}
```

background 단축속성으로 지정할 때 띄어쓰기로 지정하게된다. background-position, background-size 개별 속성으로 지정할 땐 구분이 가능하지만, 단축속성으로 지정한 경우 어떤 곳이 top, left 인지, 가로, 세로 너비인지 구분하기 어렵다.


background 단축속성에서 수치를 구분하기 위해 position과 size 사이에 슬래시(/) 기호를 넣고 구분하게 된다.

```CSS
.box {
  background: 100px 100px / 200px 200px;
}
```

이렇게 구분하기 위해 작성하는 슬래시(/) 기호는 나누기 연산자와 중복 사용된다. 순수 CSS에서 슬래시(/)를 사용하는 문법이 있기 때문에 나머지 연산자의 사용 방법을 정확히 정의해야 한다.

다시 나누기 top 속성에 대해 돌아와보면 다음과 같다.

```CSS
/* SCSS */
.box {
  $a: 20px;

  top: (20px / 2);
  top: $a / 2;
  top: 20px / 2 + 1px;
}

/* CSS */
.box {
  top: 10px;
  top: 10px;
  top: 11px;
}
```

나누기 연산자를 사용하는 3가지 방법이 있다.
1. 나누기 연산자를 사용하는 곳을 소괄호()로 묶기
2. 변수를 지정해 사용하기
3. 다른 연산자와 같이 사용하기

연산하려는 단위가 다른 경우 연산이 작동되지 않는다.

```CSS
.box {
  left: 100% - 50px; /* Error : 100% and 50px have incompatible units */
}
```

Sass에서는 단위가 다르면 연산을 할 수 없는데, CSS의 calc함수를 사용하면 연산된 결과를 사용할 수 있다.

```CSS
.box {
  left: calc(100% - 50px);
}
```

left라는 값에서 파악할 수 있는 100% 너비에서 50px를 제외한 나머지 너비를 통해 left에 지정할 수 있다.

<br>

비교 연산자 종류

| 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|
|==|!=|<|>|<=|>=|

```CSS
.box {
    $w: 100px;
    @if ($w == 100px) {
        width: $w;
    } @else {
        width: 200px;
    }
}
```

논리 연산자 종류

| 1 | 2 | 3 |
|---|---|---|
|and|or|not|

```CSS
.box {
    $w: 100px;
    $h: 200px;
    @if ($w == 100px and $h > 100px) {
        width: 100px;
        height: 200px;
    }
}
```

---

## 재활용

재활용할 스타일들을 정의해서 사용하는 개념이다. 재활용할 스타일을 정의하기 위해 (@)으로 시작하는 (@mixin) 규칙을 사용할 수 있다. 함수를 만들듯이 이름을 지정할 수 있다.

만들어 놓은 스타일들을 한번에 사용하고 싶다면 (@)으로 시작하는 (@include) 규칙을 통해 사용할 수 있다.

```CSS
/* SCSS */
@mixin large-text {
    font-size: 30px;
    font-weight: bold;
    font-family: sans-serif;
    color: blue;
}

.box-a {
    width: 100px;
    height: 200px;
    @include large-text;
}

/* CSS */
.box-a {
  width: 100px;
  height: 200px;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  color: blue;
}
```

자바스크립트의 함수에서 매개변수를 활용하듯 Sass에서도 활용이 가능하다. include 규칙에서 넘겨주는 매개변수를 mixin에서 받을 때 기본 값도 지정이 가능하다.

```CSS
/* SCSS */
@mixin large-text($size: 30px) {
    font-size: $size;
    font-weight: bold;
    font-family: sans-serif;
    color: blue;
}

.box-a {
    width: 100px;
    height: 200px;
    @include large-text;
}

.box-b {
    width: 500px;
    @include large-text(40px);
}

/* CSS */
.box-a {
  width: 100px;
  height: 200px;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  color: blue;
}

.box-b {
  width: 500px;
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
  color: blue;
}
```

삼항연산자는 if() 함수에 3개 인수를 주어 사용할 수 있다.

```CSS
/* if(조건, true일 때 실행할 data, false일 때 실행할 data) */
/* SCSS */
@mixin large-text($size: 30px) {
    font-size: if($size < 30px, 30px, $size);
    font-weight: bold;
    font-family: sans-serif;
    color: blue;
}

.box-a {
    width: 100px;
    height: 200px;
    @include large-text;
}

.box-b {
    width: 500px;
    @include large-text(40px);
}

.box-c {
    width: 500px;
    @include large-text(10px);
}

/* CSS */
.box-a {
  width: 100px;
  height: 200px;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  color: blue;
}

.box-b {
  width: 500px;
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
  color: blue;
}

.box-c {
  width: 500px;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  color: blue;
}
```

mixin 규칙은 단순 CSS 속성, 값만 적는 것이 아니라 중첩 등 다양한 Sass 내용을 mixin 규칙 내부에서 사용할 수 있다. 아래처럼 mixin 내부에서 또 다른 mixin 내용을 include 규칙으로 가져와 활용할 수 있다.

```CSS
/* SCSS */
@mixin reset-margin {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@mixin section {
    font-size: 20px;
    line-height: 1.4;
    color: blue;
    h1 {
        font-size: 40px;
        font-weight: bold;
        @include reset-margin;
        &::after {
            content: "!!";
        }
    }
}

.section {
    @include section;
}

/* CSS */
.section {
  font-size: 20px;
  line-height: 1.4;
  color: blue;
}
.section h1 {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.section h1::after {
  content: "!!";
}
```

인수를 몇 개가 들어오는지 모를 때 가변 인수를 활용해 한번에 받아서 사용할 수 있다. 자바스크립트의 나머지 매개변수($rest)와 비슷하다. 가변 인수는 (...)으로 사용할 수 있다.

```CSS
/* SCSS */
@mixin bg($w, $h, $rest...) {
    width: $w;
    height: $h;
    background: $rest;
}

.box {
    @include bg(
        100px,
        200px,
        url("/imgaes.a.png") no-repeat center,
        url("/imgaes.b.png") repeat-x,
        url("/imgaes.c.png") repeat-y center / contain
    );
    /* background: 
         url("/imgaes.a.png") no-repeat center, 
         url("/imgaes.b.png") repeat-x, 
         url("/imgaes.c.png") repeat-y center / contain;
    */
}

/* CSS */
.box {
  width: 100px;
  height: 200px;
  background: url("/imgaes.a.png") no-repeat center, url("/imgaes.b.png") repeat-x, url("/imgaes.c.png") repeat-y center/contain;
}
```

전개 연산자를 mixin 규칙의 매개변수에서만 활용하는 것이 아니라 리스트 데이터를 전개해서 매개변수로 넣어주는 역할을 할 수 있다.

```CSS
/* SCSS */
@mixin spread($t, $r, $b, $l) {
    margin-top: $t;
    margin-right: $r;
    margin-bottom: $b;
    margin-left: $l;
}

.box {
    $m: 10px 20px 30px 40px; /* 리스트 데이터 */
    @include spread($m...);
}

/* CSS */
.box {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}

```

리스트 데이터를 변수에 담지 않고, 그대로 적고 전개 연산자를 활용하여 작성할수도 있다.

```CSS
/* SCSS */
.box {
    $m: 10px 20px 30px 40px; /* 리스트 데이터 */
    @include spread($m...);
    @include spread(10px 20px 30px 40px...);
}
```

Sass 보간과 전개 연산자를 통해 동시에 margin과 padding의 개별 속성을 지정할 수 있다.

```CSS
/* SCSS */
@mixin spread($p, $t, $r, $b, $l) {
    #{$p}: {
        top: $t;
        right: $r;
        bottom: $b;
        left: $l;
    };
}

.box {
    $m: 10px 20px 30px 40px;
    @include spread(margin, $m...);
    @include spread(padding, 10px 20px 30px 40px...);
}

/* CSS */
.box {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

매개변수 이름을 전달하는 인수에 키워드를 사용해 키워드 인수라고 한다. 키워드 인수를 사용하면 매개변수의 순서와 상관없이 원하는 값을 넘겨줄 수 있다.

```CSS
/* SCSS */
@mixin  pos($p, $t: null, $b: null, $l: null, $r: null) {
    position: $p;
    top: $t;
    bottom: $b;
    left: $l;
    right: $r;
}

.absolute {
    width: 100px;
    height: 100px;
    @include pos(absolute, $t: 100px, $l: 50px);
}

.fiexd {
    width: 100px;
    height: 200px;
    @include pos(fixed, $b: 20px, $r: 20px);
}

/* CSS */
.absolute {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
  left: 50px;
}

.fiexd {
  width: 100px;
  height: 200px;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

mixin을 사용할 때 뒤쪽에 있는 중괄호 사이의 내용을 mixin쪽으로 전달할 수 있다. 해당 내용은 mixin 내부의 (@)을 사용한 content 부분에 들어가 컴파일된다.

```CSS
/* SCSS */
@mixin icon($url) {
    &::after {
        content: url($url);
        @content;
    }
}

.box {
    @include icon("/images/icon.png") {
        position: absolute;
        top: 0;
        left: 50px;
    };
}

/* CSS */
.box::after {
  content: url("/images/icon.png");
  position: absolute;
  top: 0;
  left: 50px;
}
```

extend 규칙을 통해 이미 작성한 선택자의 이름을 명시하면 선택자가 가지고 있는 스타일이 확장되어 해당 부분에 적용된다. mixin은 별도의 스타일을 따로 정의해둔 후 가져와 사용하는 방법인데, mixin과 다르게 특정한 선택자로 만들어진 부분을 가져와 사용할 수 있다.

```CSS
/* SCSS */
.btn {
    display: inline-block;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: gray;
}

.btn-primary {
    @extend .btn;
    background-color: blue;
}

/* CSS */
.btn, .btn-primary {
  display: inline-block;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: gray;
}

.btn-primary {
  background-color: blue;
}
```

extend를 사용할 때 선택자 폭발이라는 주의사항이 존재한다. 전혀 의도하지 않은 하위 중첩이 발생할 수 있다.

따라서 꼭 필요한 경우가 아니라면 extend가 아니라 mixin  규칙으로 제어하여 사용하는 것이 좋다.

```CSS
/* SCSS */
.container {
    .item {
        color: red;
        .box {
            @extend .item;
            &::after {
                content: "";
                @extend .item;
            }
        }
    }
}

/* CSS */
.container .item, .container .item .box::after, .container .item .box::after .box, .container .item .box {
  color: red;
}
.container .item .box::after {
  content: "";
}
```

(%)를 사용하는 placeholder 선택자 개념이 존재한다. 해당 선택자는 extend 규칙을 사용해서 확장해서 사용하는 용도로만 사용된다.

```CSS
/* SCSS */
%btn {
    display: inline-block;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: gray;
}

.btn-primary {
    @extend %btn;
    background-color: blue;
}

.btn-danger {
    @extend %btn;
    background-color: red;
}

.btn-success {
    @extend %btn;
    background-color: green;
}

/* CSS */
.btn-success, .btn-danger, .btn-primary {
  display: inline-block;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: gray;
}

.btn-primary {
  background-color: blue;
}

.btn-danger {
  background-color: red;
}

.btn-success {
  background-color: green;
}
```

placeholder 선택자를 통해 extend 규칙을 활용할 때 제한사항이 존재한다. media 규칙에서 placeholder 선택자를 통해 extend 규칙을 사용하려면 media 규칙 내부에 placeholder 선택자가 선언이 되어 있어야 사용이 가능하다. 외부의 placeholder 선택자는 확장되지 않는다.

```CSS
/* SCSS */
%btn {
    display: inline-block;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: gray;
}
@media all and (max-width: 1400px) {
    .box {
        @extend %btn;
    }
}
/* 위와 같은 경우는 확장되지 않는다. */

@media all and (max-width: 1400px) {
    %box {
        color: red;
    }
    .box {
        @extend %box;
    }
}
/* 이런 식으로 media 규칙 내부에 placeholder 선택자가 정의되어 있어야 extend 규칙을 활용할 수 있다.*/
```

Sass에서 사용할 수 있는 function 규칙은 자바스크립트의 함수 개념과 동일하다. mixin 규칙과도 사용법이 매우 유사하다. 기본적인 사용법은 다음과 같다.

```CSS
/* SCSS */
@function grid() {
    @return 123;
}

.box1 {
    width: grid();
}

/* CSS */
.box1 {
  width: 123;
}
```

조금더 확장해보면 다음과 같이 사용할 수 있다. 그리드 시스템의 너비를 계산하는 그리드 함수를 사용하는 방법은 다음과 같다.

```CSS
/* SCSS */
$columns-width: 1200px;

@function grid($col, $total) {
    @return $columns-width * $col / $total;
}

.box1 {
    width: grid(1, 12);
}

.box2 {
    width: grid(4, 12);
}

/* CSS */
.box1 {
  width: 100px;
}

.box2 {
  width: 400px;
}
```

mixin 규칙에서 사용하는 것과 동일하게 function에서도 사용이 가능하다. 그리고 커스텀 function을 사용할 때는 두 개 이상의 단어를 사용해 중복을 방지하는 것이 중요하다. grid라는 함수를 사용할 때, my-grid로 고쳐 사용하면 중복을 피할수 있다.

```CSS
/* SCSS */
/* sass list 내장 모듈 */
@use "sass:list";
$columns-width: 1200px;

@function my-grid($col: 1, $total: 12, $rest...) {
    @if ($col > $total) {
        /* throw 키워드와 동일 */
        @error '$col must be less than $total.';
    }
    @if (list.length($rest) > 0){
        @error 'Unnecessary arguments included';
    }
    @return $columns-width * $col / $total;
}

.box1 { width: my-grid(); }
.box2 { width: my-grid(4, 12); }
.box3 { width: my-grid(11); }
.box4 { width: my-grid($total: 9); }
.box5 { width: my-grid(7, 9); }
.box6 {
    $columns: 4 12;
    width: my-grid($columns...);
    height: my-grid(2, 9);
    margin: calc(100% - 50px);
    background-image: url("/images/a.png");
    background-color: rgba(0,0,0,.2);
}
/* CSS */
.box1 {
  width: 100px;
}

.box2 {
  width: 400px;
}

.box3 {
  width: 1100px;
}

.box4 {
  width: 133.3333333333px;
}

.box5 {
  width: 933.3333333333px;
}

.box6 {
  width: 400px;
  height: 266.6666666667px;
  margin: calc(100% - 50px);
  background-image: url("/images/a.png");
  background-color: rgba(0, 0, 0, 0.2);
}
```

if 조건문부터 each, for, while같은 다양한 반복문이 있다.


Saas에서 if 조건문을 사용할 때 조건을 ()소괄호로 묶지 않아도 사용이 가능하다.

```CSS
/* SCSS */
@mixin avatar($size, $circle: false) {
    width: $size;
    height: $size;
    
    @if $circle {
        border-radius: $size / 2;
    }
}

.square-av {
    @include avatar(100px, $circle: false);
}

.circle-av {
    @include avatar(100px, $circle: true);
}

/* CSS */
.square-av {
  width: 100px;
  height: 100px;
}

.circle-av {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
```

기본 if 조건문 구문은 위와 같고, if-else 구문과 if-else if 구문도 사용할 수 있다.

each 구문의 기본적인 사용 방법은 다음과 같다.

```CSS
/* SCSS */
@use "sass:list";

$sizes: 20px 40px 80px;
$fruits: (apple: 'A', banana: 'B', cherry: 'C');

// List
@each $size in $sizes {
    $index: list.index($sizes, $size);
    .icon-#{$index} {
        height: $size;
        width: $size;
    }
}

// Map
@each $key, $value in $fruits {
    .fruit-#{$key}::after {
        content: $value;
    }
}

/* CSS */
.icon-1 {
  height: 20px;
  width: 20px;
}

.icon-2 {
  height: 40px;
  width: 40px;
}

.icon-3 {
  height: 80px;
  width: 80px;
}

.fruit-apple::after {
  content: "A";
}

.fruit-banana::after {
  content: "B";
}

.fruit-cherry::after {
  content: "C";
}
```

기본적인 for 구문은 다음과 같다. from-through 구문에서 through를 to로 변경할 수 있다. to로 변경하면 for(i=0; i<=3; i++)에서 <= 표시를 <로 바꾸는 것과 동일하다.

```CSS
/* SCSS */
.list {
    position: relative;
    top: 0;
    @for $i from 1 through 3 {
        .item {
            width: 100px * $i;
        }
    }
}

/* CSS */
.list {
  position: relative;
  top: 0;
}
.list .item {
  width: 100px;
}
.list .item {
  width: 200px;
}
.list .item {
  width: 300px;
}
```

기본적인 while 구문은 다음과 같다.

```CSS
/* SCSS */
.list {
    position: relative;
    .item {
        $i: 1;
        $n: 8;
        @while ($n > 0) {
            &:nth-child(#{$i}) {
                width: 100px * $n;
                height: 100px * $i;
            }
            $i: $i + 1;
            $n: $n - 2;
        }
    }
}

/* CSS */
.list {
  position: relative;
}
.list .item:nth-child(1) {
  width: 800px;
  height: 100px;
}
.list .item:nth-child(2) {
  width: 600px;
  height: 200px;
}
.list .item:nth-child(3) {
  width: 400px;
  height: 300px;
}
.list .item:nth-child(4) {
  width: 200px;
  height: 400px;
}
```