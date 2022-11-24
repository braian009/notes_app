import * as React from 'react'
import { Link } from 'react-router-dom';

const getTitle = (note) => {
  const title = note.body.split('\n')[0];

  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title
};

const getDate = (note) => {
  return new Date(note.updated_at).toLocaleDateString();
};

const getContent = (note) => {
  let title = getTitle(note);
  let content = note.body.replaceAll('\n', ' ');
  content = content.replace(title, '');

  if (content.length > 45) {
    return content.slice(0, 45) + '...';
  } else {
    return content;
  }
};


const ItemList = ({note}) => {
  return (
    <div>
      <Link to={`/notes/${note.id}`}>
        <div className='note-list-item'>
          <h3>{getTitle(note)}</h3>
          <p><span>{getDate(note)}</span>{getContent(note)}</p>
        </div>
      </Link>
    </div>
  )
}

export default ItemList;
