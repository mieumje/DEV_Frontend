import { useState} from 'react';
import Board from './components/Board';

function App() {
  const [visible, setVisible] = useState(false);
  const articles = [
    {
      id: 1,
      title: '안녕하세요 1',
      author: 'MJ'
    },
    {
      id: 2,
      title: '안녕하세요 2',
      author: 'MINJE'
    },
    {
      id: 3,
      title: '안녕하세요 3',
      author: 'MieumJe'
    },
    {
      id: 4,
      title: '안녕하세요 4',
      author: 'MinJe'
    }
  ]

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle Me</button>
      {visible && (
        <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있다.</h1>
      )}
      {visible ? (
        <h1>삼항 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있다.</h1>
      ) : null}
      {visible ? (
        <Board articles={articles}/>
      ) : <p>게시판을 보려면 Toggle 하세요</p>}
    </div>
  );
}

export default App;
