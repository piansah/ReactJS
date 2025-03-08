import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click Count</button>
      <p>Counter is {count}</p>
    </div>
  )
}
