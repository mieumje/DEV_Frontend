// 1. 함수 컴포넌트는 자신의 상태가 변경될 때 리렌더링
// 2. 부모 컴포넌트로 부터 받는 props이 변경될 때 리렌더링
// 3. 부모 컴포넌트의 상태가 변경되면 리렌더링
// 부모 컴포넌트가 변경되었는데, 자식 컴포넌트가 리렌더링 되는 것은 불합리해 보인다.
// 이 때 사용할 수 있는 것이 React.memo

import Box from "./components/Box";


function App() {
  return (
    <div>
      <Box />
    </div>
  );
}

export default App;
