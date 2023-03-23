import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import counterAction from "./store/action/counterAction";
import counterInitAction from "./store/action/counterInitAction";
import taskAction from "./store/action/taskAction";

function App() {
  const count = useSelector((state) => {
    const { counterReducer } = state;
    const { count } = counterReducer;
    return count;
  });
  const taskList = useSelector((state) => {
    const { taskReducer } = state;
    const { tasks } = taskReducer;
    return tasks;
  });

  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target } = e;
    const { value } = target;

    setTask(value);
  };

  const handleSubmit = () => {
    if (!task || count === 0) {
      console.error("Input task or count value");
      return;
    }
    dispatch(taskAction("ADD", { task, count }));
  };

  return (
    <>
      <div>Redux Example</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <label htmlFor="input">Task</label>
        <input type="text" onChange={handleChange} />
        <div>Count : {count}</div>
        <div>
          <button onClick={() => dispatch(counterAction(1, "PLUS"))}>+</button>
          <button onClick={() => dispatch(counterAction(1, "MINUS"))}>-</button>
          <button onClick={() => dispatch(counterInitAction())}>
            Initialize
          </button>
        </div>
        <button onClick={handleSubmit}>submit</button>
      </div>
      <ul>
        {taskList.map((item) => {
          const { task, count } = item;
          return (
            <li key={item.task}>
              {task}:{count}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
