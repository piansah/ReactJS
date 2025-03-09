import { useState } from "react";

export default function Counter() {
  let [count, setCounter] = useState(0);

  console.info(`Render Counter ${count}`);

  return (
    <div>
      <button onClick={
        () => {
          setCounter(c => c + 1);
          setCounter(c => c + 1);
          setCounter(c => c + 1);
        }
      }>Click Count</button>
      <p>Counter is {count}</p>
    </div>
  );
}
