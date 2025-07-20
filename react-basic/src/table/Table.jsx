import Row from "./Row.jsx";

export default function Table() {
   return (
      <table border="1">
         <tbody>
            <Row id="1" text="Nguyen Van A" />
            <Row id="2" text="Nguyen Van B" />
            <Row id="3" text="Nguyen Van C" />
            <Row id="4" text="Nguyen Van D" />
            <Row id="5" text="Nguyen Van E" />
         </tbody>
      </table>
   )
}