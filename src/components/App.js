import React, { useState, useMemo } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  const addTodo = () => {
    setTasks([...tasks, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const submitCustomTask = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>

      <h3>Counter: {counter}</h3>

      <input
        type="text"
        value={customTask}
        onChange={handleCustomTaskChange}
        placeholder="Enter custom task"
      />
      <button onClick={submitCustomTask}>Submit Custom Task</button>

      <UseMemo tasks={memoizedTasks} />
      <ReactMemo tasks={memoizedTasks} />
    </div>
  );
}

export default App;
