import { useReducer } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn React", done: false },
];

// Reducer function untuk mengelola state
function noteReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...state,
        {
          id: id++,
          text: action.payload,
          done: false,
        },
      ];
    case "CHANGE_NOTE":
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
}

export default function NoteApp() {
  // Menggunakan useReducer
  const [notes, dispatch] = useReducer(noteReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({ type: "ADD_NOTE", payload: text });
  }

  function handleChangeNote(note) {
    dispatch({ type: "CHANGE_NOTE", payload: note });
  }

  function handleDeleteNote(id) {
    dispatch({ type: "DELETE_NOTE", payload: id });
  }

  return (
    <>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </>
  );
}
