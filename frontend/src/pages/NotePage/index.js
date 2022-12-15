import * as React from 'react'
import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
import NoteContainer from './NoteContainer';


const URL = 'https://braian009.pythonanywhere.com';


const NotePage = ({ token }) => {
  const { noteId } = useParams();
  const [note, setNote] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    getNote();
  }, [noteId,]);

  const getNote = async () => {
    if (noteId === 'new') return setNote({body:''});

    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    const result = await axios.get(`${URL}/api/v1/notes/${noteId}/`)
    const data = result.data;

    setNote(data);
  };

  const createNote = async () => {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    axios.post(`${URL}/api/v1/notes/create/`, {body: note.body}); 
    setTimeout(() => {
      navigate('/'); 
    }, 250);   
  }

  const editNote = async () => {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    axios.put(`${URL}/api/v1/notes/${noteId}/edit/`, {body: note.body});    
    setTimeout(() => {
      navigate('/'); 
    }, 250);
  };


  const deleteNote = async () => {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    axios.delete(`${URL}/api/v1/notes/${noteId}/delete/`);

    setTimeout(() => {
      navigate('/'); 
    }, 250);
  }

  const handleSubmit = () => {
    if (noteId !== 'new' && !note.body) {
      deleteNote();
    } else if (noteId !== 'new') {
      editNote();
    } else if (noteId === 'new' && !note.body) {
      navigate('/');
    } else if (noteId === 'new' && note.body !== null) {
      createNote();
    }

    setTimeout(() => {
      navigate('/'); 
    }, 250);
  }


  return (
    <NoteContainer>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit}/>
        </h3>
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea autoFocus value={note? note.body : ''} onChange={(e) => setNote({...note, body: e.target.value})}></textarea>
    </NoteContainer>
  );
};

export default NotePage;
