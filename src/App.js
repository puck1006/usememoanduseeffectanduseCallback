import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);

  const double = useMemo(() => {
    let effectCount = count * 2;
    return effectCount;
  }, [count === 34]);

  return (
    <div className="App">
      <h1>useMemo and useEffect</h1>
      <h1>{double}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(v => v + 1)}> Click me and Add </button>
      <button onClick={() => setCount(v => v - 1)}>Click me and reduce</button>
    </div>
  );
}
