// 사용사례 - 페이지네이션

import Board from "./components/Board";
import Pagination from "./components/Pagination";

function App() {
  const articles = new Array(100).fill().map((_, i) => ({
    id: i,
    title: `${i}번 게시물`
  }));

  return (
    <div>
      <Board articles={articles}/>
      <Pagination defaultPage={0} limit={10} total={articles.length}/>
    </div>
  );
}

export default App;
