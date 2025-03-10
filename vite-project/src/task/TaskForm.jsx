import { useState } from "react";

export default function TaskForm({ setList }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setList((draft) => {
      draft.push(item);
    });
    setItem("");
  }
  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
