import { useState } from "react"
import AddNote from "./AddNote"
import Note from "./Note"

function Notes({notes, handleAddNote, handleDeleteNote, handleUpdateNote, searchText}) {
  const [editText, setEditText] = useState({
    id: "",
    title: "",
    text: ""
  });
  function handleEditclick(id, title, text){
    setEditText({
      id:id,
      title: title,
      text: text,
    })
  }

    return (
    <main>
      <AddNote handleAddNote={handleAddNote} handleUpdateNote={handleUpdateNote} editTitle={editText.title} editText={editText.text} id={editText.id} setEditText={setEditText}/>
        <div className="notes">
          {notes.map((note)=>
            <Note id={note.id} title={note.title} text={note.text} key={note.id} handleDeleteNote={handleDeleteNote} handleEditclick={handleEditclick} />
          )}
        </div>
    </main>
    )
}

export default Notes
