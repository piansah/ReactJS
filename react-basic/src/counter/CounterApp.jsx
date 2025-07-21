import { useState } from "react";
import Counter from "./Counter.jsx";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      <Counter />
      {show2 && <Counter />}
      <input type="checkbox" checked={show2} onChange={handleChange} />
      Show Counter 2
    </div>
  );
}
