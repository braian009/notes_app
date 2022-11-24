import * as React from 'react';
import axios from 'axios';

import ItemList from '../components/ItemList';
import AddButton from '../components/AddButton';

const API_ENDPOINT = 'http://127.0.0.1:8000';

const NoteListPage = () => {

  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getNotes();

  }, []);


  const getNotes = async () => {
    const response = await axios.get(`${API_ENDPOINT}/api/v1/notes/`);
    const data = response.data;

    setNotes(data);
  };

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='note-list'>
        {notes.map((note, index) => {
          return (
            <ItemList key={note.id} note={note} />
          );
        })}
      </div>
      <AddButton/>
    </div>
  );
};

export default NoteListPage;
