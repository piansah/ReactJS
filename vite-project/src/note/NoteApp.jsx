import { useReducer } from "react";
import { produce } from "immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn React", done: false },
];

// Reducer function dengan Immer
function noteReducer(state, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_NOTE":
        draft.push({
          id: id++,
          text: action.payload,
          done: false,
        });
        break;
      case "CHANGE_NOTE": {
        const index = draft.findIndex((note) => note.id === action.payload.id);
        if (index !== -1) {
          draft[index] = action.payload;
        }
        break;
      }
      case "DELETE_NOTE":
        return draft.filter((note) => note.id !== action.payload);
      default:
        return state;
    }
  });
}

export default function NoteApp() {
  // Menggunakan useReducer dengan Immer
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
