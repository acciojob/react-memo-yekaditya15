import React from "react";

const ReactMemo = React.memo(function ReactMemo({ tasks }) {
  console.log("ReactMemo component is re-rendering");
  return (
    <div>
      <h2>Task List (React.memo)</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
