import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleClick() {
    if (text.trim() === "") return; // Cegah input kosong
    dispatch({ type: "ADD_NOTE", text });
    setText("");
  }

  return (
    <div>
      <input placeholder="Add Note" value={text} onChange={handleChangeText} />
      <button onClick={handleClick}>Add Note</button>
    </div>
  );
}
