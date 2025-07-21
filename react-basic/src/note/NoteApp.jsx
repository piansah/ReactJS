import { useImmer } from "use-immer";
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

export default function NoteApp() {
  const [notes, setNotes] = useImmer(initialNotes);

  function handleAddNote(text) {
    setNotes((draft) => {
      draft.push({ id: id++, text, done: false });
    });
  }

  function handleChangeNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((n) => n.id === note.id);
      draft[index] = note;
    });
  }

  function handleDeleteNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((n) => n.id === note.id);
      draft.splice(index, 1);
    });
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
