import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpandedInput, setIsExpandedInput] = useState(false);

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
    setIsExpandedInput(false);
  }


  return (
    <div>
      <form className="create-note">
        {isExpandedInput && <input name="title" onChange={updateNoteItem} value={noteItem.title} placeholder="Title" />}
        <textarea
          name="content"
          onChange={updateNoteItem}
          onClick={event => setIsExpandedInput(true)}
          value={noteItem.content}
          placeholder="Take a note..." rows={isExpandedInput ? 3 : 1} />
        <Zoom in={isExpandedInput}><Fab onClick={addNoteMiddleware}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
