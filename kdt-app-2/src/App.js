import React, { useRef } from "react";
import { RefInput } from "./components/base/Input";

const App = () => {
  const inputRef =  useRef();
  return (
    <div>
      <RefInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  );
};

export default App;