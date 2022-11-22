import React from "react";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);

  return (
    <>
      <div>Redux Example</div>
      <div>
        <p>State Count : {count}</p>
        <button>+</button>
        <button>-</button>
      </div>
    </>
  );
}

export default App;
