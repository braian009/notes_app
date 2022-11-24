import * as React from 'react'
import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'


const URL = 'http://127.0.0.1:8000';


const NotePage = () => {
  const { noteId } = useParams();
  const [note, setNote] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    getNote();
  }, [noteId,]);

  const getNote = async () => {
    if (noteId === 'new') return setNote({body: null});

    const result = await axios.get(`${URL}/api/v1/notes/${noteId}/`)
    const data = result.data;
    console.log(data);

    setNote(data);
  };

  const createNote = async () => {
    axios.post(`${URL}/api/v1/notes/create/`, {body: note.body}); 
    setTimeout(() => {
      navigate('/'); 
    }, 250);   
  }

  const editNote = async () => {
    axios.put(`${URL}/api/v1/notes/${noteId}/edit/`, {body: note.body});    
    setTimeout(() => {
      navigate('/'); 
    }, 250);
  };


  const deleteNote = async () => {
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
    <div className='note'>
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
      <textarea value={note?.body} onChange={(e) => setNote({...note, body: e.target.value})}></textarea>
    </div>
  );
};

export default NotePage;
