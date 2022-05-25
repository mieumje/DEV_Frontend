// useEffect는 무언가 변화가 있을 때
// 감지하여 반응하는 훅

import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => { // 첫 번째 파라미터 = 반응하는 부분, 두 번째 파라미터 = 어떤 것을 감지?(리스트)
    console.log(`Click ${count} times.`);
  }, [count]);

  useEffect(() => {
    console.log('Component Loaded');
  }, []);

  return (
    <div>
      <div>You clicked {count} times.</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
