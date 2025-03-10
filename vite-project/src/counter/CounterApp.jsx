import { useState } from "react";
import Counter from "./Counter.jsx";

export default function CounterApp() {
   const [show, setShow] = useState(true);

   function handleChange(e) {
      setShow(e.target.checked);
   }

   return (
      <div>
         {show ? <Counter name="budi"/> : <Counter name="pian" />}
         <input type="checkbox" onChange={handleChange} />Tampilkan Counter 2
      </div>
   )
}