import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Hello World from spreed syntax",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <PharagraphHello />
    </div>
  );
}

function HeaderHelloWorld({ text = "Hello World!" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function PharagraphHello() {
  const text = "Selamat Belajar ReactJS";
  return <p className="content">{text.toLowerCase()}</p>;
}
