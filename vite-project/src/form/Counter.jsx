import { useState } from "react";

export default function Counter() {
  let [count, setCounter] = useState(0);

  console.info(`Render Counter ${count}`);

  function handleClick() {
    setCounter(count + 3);
    console.log(count);
  }

  return (
    <div>
      <button onClick={handleClick}>Click Count</button>
      <p>Counter is {count}</p>
    </div>
  );
}
