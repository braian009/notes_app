import styled from "styled-components";

const NotesContainer = styled.div`
  .notes-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6em 1em;
  }

  .notes-title,
  .notes-count {
    color: var(--orange-main);
    font-size: 1.45em;
    font-weight: 600;
  }

  .notes-count {
    font-size: 1.25em;
    color: var(--gray-primary);
  }

  .note-list {
    margin: 0;
    height: 70vh;
    overflow-y: auto;
  }

  .note-list-item {
    border-bottom: 1px solid var(--black-darker);
    padding: 8px 16px;
    transition: all 0.2s ease-in-out;
  }

  .note-list-item:hover {
    background-color: var(--black-bg);
    cursor: pointer;
  }

  .note-list-item h3,
  .note-list-item p span {
    font-weight: 600;
  }

  .note-list-item p span {
    color: var(--gray-primary);
    display: inline-block;
    margin-right: 8px;
  }

  .note-list-item p {
    font-size: 14px;
    color: var(--gray-secondary);
  }
`;

export default NotesContainer