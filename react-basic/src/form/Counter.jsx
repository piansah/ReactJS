import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  console.info("render counter!")

  function handleClick() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}
