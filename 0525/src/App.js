// 요구사항
// 1. Counter 컴포넌트 구현하기
// 2. 모든 Counter 컴포넌트의 합 구하기

// 무엇을 배우는 가?
// 1. 컴포넌트에서 지역 상태 관리하는 법
// 2. 컴포넌트에 이벤트 바인딩하기
// 3. 부모 컴포넌트에게 메시지 전달하기
import Counter from "./components/Counter";


function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
