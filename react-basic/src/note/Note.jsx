import { useState } from "react";

export default function Note({note, onChange, onDelete}) {
   const [isEditing, setEditing] = useState(false);
   let component;

   function handleChangeText(e) {
      const newNote = {
         ...note,
         text: e.target.value,
      };
      onChange(newNote);
   }

   if (isEditing) {
      component = (
         <div>
            <input value={note.text} onChange={handleChangeText} />
            <button onClick={() => setEditing(false)}>Save</button>
         </div>
      );
   } else {
      component = (
         <div>
            <p>{note.text}</p>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
         </div>
      )
   }

   function handleChangeDone(e) {
      const newNote = {
         ...note,
         done: e.target.checked,
      };
      onChange(newNote);
   }
   return (
      <div>
         <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
         </label>
      </div>
   )
}