import './App.css';
import './index.css';
import NavBar from './assets/components/NavBar';
import Notes from './assets/components/Notes';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Learn",
      text:"Learn little but regularly"
    },
    {
      id: nanoid(),
      title: "Motivation",
      text:"You got this"
    },
    {
      id: nanoid(),
      title: "Quote",
      text:"It was a turning point in my programming career when I realized that I didn't have to win every argument.  \n- Ward Cunningham"
    },
    
  ]);

  const [searchText, setSearchText] = useState("");
  function handleAddNote(title, text){
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
    }
    const allNotesWithNewNote = [...notes, newNote]
    setNotes(allNotesWithNewNote)
  }

  function handleDeleteNote(id){
    const allNotesExceptGivenId = notes.filter((note)=> note.id !== id)
    setNotes(allNotesExceptGivenId);
  }
  function handleUpdateNote(id, title,text){
    const updatedNote = {
      id:id,
      title:title,
      text:text,
    }
    const allNotesExceptGivenId = notes.filter(note => id !== note.id)
    const newNoteList = [...allNotesExceptGivenId, updatedNote];
    setNotes(newNoteList);
  }
  return <>
  <NavBar setSearchText={setSearchText}/>
  <Notes notes={notes.filter(note=> note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText) )} handleAddNote={handleAddNote} handleUpdateNote={handleUpdateNote} handleDeleteNote={handleDeleteNote} />
  </>
}

export default App