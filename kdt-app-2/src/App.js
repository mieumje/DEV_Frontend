// useMemo : 최적화를 위해 필요한 훅
// 함수 컴포넌트는 jsx를 반환하는 함수에 불과
// 컴포넌트가 렌더링된다는 것은 함수 컴포넌트를 호출해 실행되는 것과 동일
// 함수가 실행될 때 마다 내부에 선언된 변수, 함수가 매번 다시 선언/실행된다는 의미다.
// 리렌더링 된다는 것은 컴포넌트가 자신의 상태를 변경하거나 부모로부터 받는 props가 변경되었을 때 발생한다.
// 혹은 부모 컴포넌트가 변경만 되더라도 리렌더링된다.

// 1. 함수 컴포넌트는 자신의 상태가 변경될 때 리렌더링
// 2. 부모 컴포넌트로 부터 받는 props이 변경될 때 리렌더링
// 3. 부모 컴포넌트의 상태가 변경되면 리렌더링
// 만약 연산 속도가 느린 컴포넌트라면? 꽤 많은 성능을 소비하게 된다.
// 두 번 연산을 하지 않게 하기 위해 useMemo를 사용한다.

import { useState } from 'react';
import ShowSum from "./components/ShowSum";

function App() {
  const [label, setLabel] = useState('Result');
  return (
    <div>
      <button onClick={() => setLabel(label + ":")}>Change Label</button>
      <ShowSum label={label} n={10000} />
    </div>
  );
}

export default App;
