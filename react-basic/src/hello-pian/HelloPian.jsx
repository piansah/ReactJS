export default function HelloPian() {
   return (
      <div>
         <Header />
         <Pharagraphes />
      </div>
   )
}
// Komponen adalah fungsi yang mengembalikan elemen JSX.
// Setiap komponen bisa digunakan kembali dan bisa menerima data lewat props.
function Greeting(props) {
  return <h1>Halo, {props.nama}!</h1>;
}

function Header() {
   return (
      <div>
         <h1>Hello Pian</h1>
      </div>
   )
}
// Komponen di React ibarat potongan UI yang bisa dipakai berulang.
// Bisa dikasih data lewat props, dan hasilnya JSX (HTML di dalam JS).
function Pharagraphes() {
   return (
      <div>
         <p>This is my first React App</p>
         <p>I hope you like it loplop</p>
      </div>
   )
}