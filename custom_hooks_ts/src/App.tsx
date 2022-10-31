import useInput from "./hooks/useInput";

function App() {
  const [value, setValue] = useInput("");

  return <input placeholder="Name" value={value} onChange={setValue} />;
}

export default App;
