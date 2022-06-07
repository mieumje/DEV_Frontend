// import Box from "./components/Box";
// import Checkbox from "./components/Checkbox";
// import useHover from "./hooks/useHover";
// import useKeyPress from "./hooks/useKeyPress";
// import useToggle from "./hooks/useToggle";

// function App() {
//   const [on, toggle] = useToggle();
//   const [ref, isHover] = useHover();
//   const keyPressed = useKeyPress('a');

//   console.log(on);

//   return (
//     <div>
//       {keyPressed && "Pressed"}
//       {isHover ? 'Hover' : 'MouseOut'}
//       <Box ref={ref} onChange={isHover}/>
//       <Checkbox checked={on} onChange={toggle}/>
//       <button onClick={toggle}>{on ? 'True' : 'False'}</button>
//     </div>
//   );
// }

// export default App;
// import Paint from "./components/Paint";

// const App = () => {
//   return (
//     <div>
//       <Paint style={{border: '1px solid black'}}/>
//     </div>
//   );
// };

// export default App;

import axios from 'axios';
import { useAsync } from './hooks';
import { Header, Spinner } from './components';

const App = () => {
  const initialPost =  useAsync(async () => {
    return await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.data);
  }, []);

  return (
    <>
      <Header>Posts</Header>
      <ul>
        {initialPost.isLoading ? ( 
          <Spinner /> 
        ) : (
          (initialPost.value || []).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        )}
      </ul>
    </>
  );
};

export default App;