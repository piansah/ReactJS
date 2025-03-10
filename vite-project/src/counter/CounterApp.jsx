import { useState } from "react";
import Counter from "./Counter.jsx";

export default function CounterApp() {
   const [show, setShow] = useState(true);

   function handleChange(e) {
      setShow(e.target.checked);
   }

   return (
      <>
      {/* <div>
         {!show && <Counter name="Pian"/>}
         {show && <Counter name="Budi"/>}
         <input type="checkbox" onChange={handleChange} />Tampilkan Counter 2
      </div> */}

      <div>
         
         {show ? <Counter key="budi" name="budi"/> : <Counter key="pian" name="pian"/>}

         <input type="checkbox" onChange={handleChange} />Tampilkan Counter 2
      </div>

      {/* <div>
         {show ? (
            <div>
               <Counter name="Budi"/>
            </div>
         ) : (
            <section>
               <Counter name="Pian"/>
            </section>
         )
      }
         <input type="checkbox" onChange={handleChange} />Tampilkan Counter 2
      </div> */}

      {/* <div>
         {show ? <Counter name="budi"/> : <p>Hilang</p>}
         <input type="checkbox" onChange={handleChange} />Tampilkan Counter 2
      </div> */}
      </>
   )
}