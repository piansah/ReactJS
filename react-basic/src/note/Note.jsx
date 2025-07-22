import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setEditing] = useState(false);

  function handleChangeText(e) {
    const updatedNote = {
      ...note,
      text: e.target.value,
    };
    onChange(updatedNote);
  }

  function handleChangeDone(e) {
    const updatedNote = {
      ...note,
      done: e.target.checked,
    };
    onChange(updatedNote);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        {isEditing ? (
          <div>
            <input value={note.text} onChange={handleChangeText} />
            <button onClick={() => setEditing(false)}>Save</button>
          </div>
        ) : (
          <div>
            <p>{note.text}</p>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onDelete(note)}>Delete</button>
          </div>
        )}
      </label>
    </div>
  );
}
