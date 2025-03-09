import { useState } from "react";

export default function Counter() {
  // state adalah objek yang digunakan untuk menyimpan data atau informasi yang dapat berubah selama siklus hidup suatu komponen.
  let [count, setCounter] = useState(0); // State dengan nilai awal 0

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
