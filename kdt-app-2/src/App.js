import Checkbox from "./components/Checkbox";
import useToggle from "./hooks/useToggle";

function App() {
  const [on, toggle] = useToggle();

  console.log(on);

  return (
    <div>
      <Checkbox checked={on} onChange={toggle}/>
      <button onClick={toggle}>{on ? 'True' : 'False'}</button>
    </div>
  );
}

export default App;