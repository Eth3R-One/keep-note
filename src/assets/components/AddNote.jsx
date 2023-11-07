import { useEffect, useState } from "react"

function AddNote({handleAddNote, editTitle,editText, id , handleUpdateNote, setEditText}) {
  const [title, setTitle] = useState(editTitle);
  const [text, setText] = useState(editText);
  
  useEffect(function(){
    setTitle(editTitle)
    setText(editText)
  }, [editTitle, editText]);
    return (
        <div className="form-container active-form">
        <form>
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="note-title" placeholder="Title" />
          <input value={text} onChange={(e)=>setText(e.target.value)} className="note-text" type="text" placeholder="Take a note..." />
          <div className="form-actions">
          </div>
          <button onClick={(event)=>{
              event.preventDefault();
              if(title === "" && text === "") return;
              if(id){
                handleUpdateNote(id,title,text)
              }
              else{
                handleAddNote( title, text)
              }
              setTitle("");
              setText("");
              setEditText({
                id:"",
                title:"",
                text:"",
              });
            }

          } className="save">Save</button>
        </form>
      </div> 
    )
}

export default AddNote