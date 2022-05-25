import { useState} from 'react';
import Board from './components/Board';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle Me</button>
      {visible && (
        <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있다.</h1>
      )}
      {visible ? (
        <h1>삼항 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있다.</h1>
      ) : null}
      <Board></Board>
    </div>
  );
}

export default App;
