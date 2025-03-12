import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeText(e) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  if (isEditing) {
    component = (
      <div>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  } else {
    component = (
      <div>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    );
  }

  return component;
}
