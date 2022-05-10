# nvm

node.js 버전을 관리할 수 있게 해준다. 필요에 따라 버전을 바꾸는 것이 가능하다. node.js가 설치가 되기 전에 사용할 수 있다.

[링크](https://github.com/nvm-sh/nvm#installing-and-updating)

> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

windows os를 사용하는 경우 nvm을 사용할 수 없다. windows에서 사용할 수 있는 사항은 아래와 같다.

* [nvm-windows](https://github.com/coreybutler/nvm-windows)
* [nodist](https://github.com/nullivex/nodist)
* [nvs](https://github.com/jasongin/nvs)

nvm-windows github에 들어가 [nvm-setup.zip을 다운](https://github.com/coreybutler/nvm-windows/releases)받아 설치하면 된다.

# npm n

node.js의 버전을 관리해주는 패키지이다. node.js가 설치가 되어있어도 사용할 수 있다. windows에서는 사용이 불가능하다.

[링크](https://www.google.com/search?q=npm+n&rlz=1C1SQJL_enKR891KR891&oq=npm+n&aqs=chrome..69i57j0i512l4j69i60l2j69i61.2428j0j4&sourceid=chrome&ie=UTF-8)

# nvm-windows 설치하기

우선 node.js가 설치된 상태라면 충돌이 발생하기 때문에, node.js를 제거해준다.

터미널에서 node.js 버전을 확인하는 명령어를 입력하고 아래와 같은 내용이 나오면 제거가 완료된 것이다.

> node -v

'node'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.

삭제가 완료되면 nvm-windows 설치 파일을 다운받을 수 있는 [링크](https://github.com/coreybutler/nvm-windows/releases)로 접속해 설치를 진행한다. nvm-setup.zip 파일을 다운 받는다.

.zip 파일을 다운 받으면 프로그램 설치 파일이 들어 있다. 해당 파일을 통해 설치를 해주면 된다.

설치가 완료된 후, 터미널이나 VSC를 재 실행하여 nvm 버전을 확인해본다.

> nvm -v

설치된 버전이 나오면 정상 설치가 된 것이다.

설치된 node.js를 확인하기 위해 다음 명령어를 입력해본다.

> nvm ls

No installations recognized. nvm만 설치된 상태에서 node.js가 설치되어 있지 않아 출력되는 메세지이다.
가장 최신 LST 버전인 16.15.0 버전의 node.js를 설치하기 위해 다음 명령어를 입력한다.

> nvm install v16.15.0

설치가 완료되면 Installation complete. If you want to use this version 메세지가 출력되고, 설치된 node.js 버전을 사용할 수 있는 명령어도 같이 출력된다.

nvm use 16.15.0

다시 설치된 node.js 목록을 나타내는 명령어 nvm ls를 입력해보면 방금 설치한 lts 버전이 설치된 것을 확인할 수 있고, 해당 버전을 사용하기 위해 다음 명령어를 입력한다.

> nvm use 16.15.0

exist status 1 에러가 발생할 수 있다. 발생할 수 있는 경우는 2가지로, path 설정 문제와 nvm 명령어를 입력하는 터미널을 Powershell을 관리자 권한으로 실행하지 않은 경우이다.

처음 설치를 할 때, path에서 공백이 있는 경우 에러가 발생한다. Program Files/ 이하 경로에 설치가 되어 Program Files에 공백이 있어 발생한 문제다. Program Files를 Progra~1로 변경해준다. 그리고 터미널을 PowerShell을 관리자 권한으로 열어 nvm use 버전 명령어를 입력하면 올바르게 작동한다.

# npm

node.js에서 사용할 수 있는 여러 패키지들을 관리해주는 node.js package manager의 약어이다. npm 명령을 통해 많은 일을 수행해야 하기 때문에 npm 동작도 확인해야 한다.

> npm -v





