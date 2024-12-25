import React, { useMemo } from "react";

function UseMemo({ tasks }) {
  const memoizedTasks = useMemo(() => {
    console.log("Memoized tasks are being calculated");
    return tasks.map((task, index) => <li key={index}>{task}</li>);
  }, [tasks]);

  return (
    <div>
      <h2>Task List (useMemo)</h2>
      <ul>{memoizedTasks}</ul>
    </div>
  );
}

export default UseMemo;
