export default function AlertButton({ text, message }) {
  function handleClick() {
    alert(message);
  }
  return <button onClick={handleClick}>{text}</button>;
}

export function AlertDuaButton({ text, message }) {
  function handleClick(e) {
    console.info(e.target);
    alert(message);
  }
  return <button onClick={handleClick}>{text}</button>;
}