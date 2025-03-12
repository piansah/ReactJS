import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeText(e) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  function handleToggleDone() {
    const updatedNote = { ...note, done: !note.done };
    onChange(updatedNote);
  }

  return (
    <div>
      <input type="checkbox" checked={note.done} onChange={handleToggleDone} />
      {isEditing ? (
        <>
          <input value={note.text} onChange={handleChangeText} />
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {note.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
