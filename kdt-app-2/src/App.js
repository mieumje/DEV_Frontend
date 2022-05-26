import useToggle from "./hooks/useToggle";

function App() {
  const [on, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>{on ? 'True' : 'False'}</button>
    </div>
  );
}

export default App;