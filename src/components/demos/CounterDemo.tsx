import { useState } from "react";

function CounterDemo() {
  // ✅ Initial count is 0
  const [count, setCount] = useState(0);

  // ✅ Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h3>Counter Demo</h3>

      {/* ✅ Display current count */}
      <p style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
        Count: <strong>{count}</strong>
      </p>

      {/* ✅ Buttons */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={decrement}
          style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
        >
          −
        </button>

        <button
          onClick={reset}
          style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
        >
          Reset
        </button>

        <button
          onClick={increment}
          style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CounterDemo;
