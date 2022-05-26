import Box from "./components/Box";
import Checkbox from "./components/Checkbox";
import useHover from "./hooks/useHover";
import useKeyPress from "./hooks/useKeyPress";
import useToggle from "./hooks/useToggle";

function App() {
  const [on, toggle] = useToggle();
  const [ref, isHover] = useHover();
  const keyPressed = useKeyPress('a');

  console.log(on);

  return (
    <div>
      {keyPressed && "Pressed"}
      {isHover ? 'Hover' : 'MouseOut'}
      <Box ref={ref} onChange={isHover}/>
      <Checkbox checked={on} onChange={toggle}/>
      <button onClick={toggle}>{on ? 'True' : 'False'}</button>
    </div>
  );
}

export default App;