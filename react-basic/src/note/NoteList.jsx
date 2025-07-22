import Note from "./Note";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
