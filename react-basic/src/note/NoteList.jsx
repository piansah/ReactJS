import { useContext, useMemo, useState, useRef } from "react";
import Note from "./Note.jsx";
import { NotesContext } from "./NoteContext.jsx";

export default function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.log("Filtered Notes")
    return notes.filter((note) =>
      note.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [notes, search]);

  function handleSearch() {
    console.info("Search", searchInput.current.value);
    setSearch(searchInput.current.value);
  }

  return (
    <div>
      <input ref={searchInput} placeholder="search" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
