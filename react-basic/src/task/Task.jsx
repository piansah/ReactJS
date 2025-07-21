import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setItems((items) => {
      items.push(item);
    });
    setItem("");
  }
  function handleReset() {
    setItem(""); // kosongkan input
    setItems(() => []); // kosongkan daftar tugas
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add Task</button>
      </form>
      <h1>Task List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
