export default function Toolbar({ onClick }) {
  return (
    <div onClick={onClick} style={{ backgroundColor: "bisque" }}>
      <button onClick={onClick}>First Button</button>
      <button onClick={onClick}>Second Button</button>
      <button onClick={onClick}>Third Button</button>
    </div>
  );
}
