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
import { Routes, Route } from "react-router-dom"; // v5에서는 Switch
import { PostsPage } from "@pages";
import DefaultTemplate from "@components/template/DefaultTemplate";

const App = () => {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" exact element={<h1>Home</h1>} />
        <Route path="/posts" exact element={ <PostsPage /> } />
      </Routes>
    </DefaultTemplate>
  );
};

export default App;