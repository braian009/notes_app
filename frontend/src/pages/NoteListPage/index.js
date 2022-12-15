import * as React from 'react';
import axios from 'axios';
import ItemList from '../../components/ItemList';
import AddButton from '../../components/AddButton';
import NotesContainer from './NotesContainer';

const URL = 'https://braian009.pythonanywhere.com';

const NoteListPage = ({ token }) => {

  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getNotes();
  }, []);


  const getNotes = async () => {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    const response = await axios.get(`${URL}/api/v1/notes/`);

    const data = response.data;

    setNotes(data);
  };

  return (
    <NotesContainer>
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
    </NotesContainer>
  );
};

export default NoteListPage;
