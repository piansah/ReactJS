import { useReducer } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const initialNotes = [
  { id: id++, text: "First Note", done: false },
  { id: id++, text: "Second Note", done: true },
  { id: id++, text: "Third Note", done: false },
  { id: id++, text: "Fourth Note", done: true },
  { id: id++, text: "Fifth Note", done: false },
  { id: id++, text: "Sixth Note", done: true },
];

function notesReducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...notes, { id: id++, text: action.text, done: false }];
    case "CHANGE_NOTE":
      return notes.map((note) =>
        note.id === action.note.id ? action.note : note
      );
    case "DELETE_NOTE":
      return notes.filter((note) => note.id !== action.id);
    default:
      return notes;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({ type: "ADD_NOTE", text });
  }

  function handleChangeNote(note) {
    dispatch({ type: "CHANGE_NOTE", note });
  }

  function handleDeleteNote(note) {
    dispatch({ type: "DELETE_NOTE", id: note.id });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
