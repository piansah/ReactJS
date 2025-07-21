import { useState } from "react";
import Counter from "./Counter.jsx";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      {show2 ? <Counter key="1" name="Pian"/> : <Counter key="2" name="Budi"/>}

      {/* {show2 && <Counter name="Pian"/>}
      {!show2 && <Counter name="Budi"/>} */}

      {/* {show2 ? <Counter name="Pian"/> : <Counter name="Budi"/>}
      
      {show2 ? (
        <div>
          <Counter name="Pian" />
        </div>
      ) : (
        <section>
          <Counter name="Budi" />
        </section>
      )} */}

      <input type="checkbox" checked={show2} onChange={handleChange} />
      Show Counter 2
    </div>
  );
}
