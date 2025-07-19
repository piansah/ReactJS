export default function HelloPian() {
  return (
    <div>
      <Header />
      <Pharagraphes />
      <SendProps text ="Send Properties"/>
    </div>
  );
}
// Komponen adalah fungsi yang mengembalikan elemen JSX.
// Setiap komponen bisa digunakan kembali dan bisa menerima data lewat props.
export function Header({props = "Helloooww Pian"}) {
  return (
    <h1 style={{ color: "white", backgroundColor: "black" }}>
      {props.toUpperCase()}
    </h1>
  );
}
// Komponen di React ibarat potongan UI yang bisa dipakai berulang.
// Bisa dikasih data lewat props, dan hasilnya JSX (HTML di dalam JS).
export function Pharagraphes({text = "This is my first React App"}) {
  const style = {
    color: "white",
    backgroundColor: "black",
  };
  return (
   <p style={style}>{text.toLocaleLowerCase()}</p>
  );
}

export function SendProps({text}) {
  const style = {
    color: "white",
    backgroundColor: "black",
  };
  return (
   <p style={style}>{text.toLocaleLowerCase()}</p>
  );
}