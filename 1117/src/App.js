import React from "react";
import { useSelector, useDispatch } from "react-redux";
import counterAction from "./store/action/counterAction";
import counterInitAction from "./store/action/counterInitAction";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Redux Example</div>
      <div>
        <p>State Count : {count}</p>
        <button onClick={() => dispatch(counterAction(1, "PLUS"))}>+</button>
        <button onClick={() => dispatch(counterAction(1, "MINUS"))}>-</button>
        <button onClick={() => dispatch(counterInitAction())}>
          Initialize
        </button>
      </div>
    </>
  );
}

export default App;
