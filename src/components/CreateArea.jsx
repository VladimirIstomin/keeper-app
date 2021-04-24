import React, {useState} from "react";

function CreateArea(props) {
  const [noteItem, setNoteItem] = useState(
    {
      title: '',
      content: ''
    }
  );

  function updateNoteItem(event) {
    const {name, value} = event.target;
    setNoteItem(previousItem => {
      return ({
          ...previousItem,
          [name]: value
        });
    }); 
  }

  function addNoteMiddleware(event) {
    event.preventDefault();
    props.addNote(noteItem);
    setNoteItem({
      title: '',
      content: ''
    });
  }


  return (
    <div>
      <form>
        <input name="title" onChange={updateNoteItem} value={noteItem.title} placeholder="Title" />
        <textarea name="content" onChange={updateNoteItem} value={noteItem.content} placeholder="Take a note..." rows="3" />
        <button onClick={addNoteMiddleware}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
