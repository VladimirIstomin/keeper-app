import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(noteItem) {
    setNoteList(previousNoteList => [...previousNoteList, noteItem]);
  }

  function deleteNote(noteId) {
    setNoteList(previousNoteList => previousNoteList.filter((note, index) => index !== noteId));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {
        noteList.map((noteItem, index) => {
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} deleteNote={deleteNote} />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
