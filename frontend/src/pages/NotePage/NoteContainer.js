import styled from "styled-components";

const NoteContainer = styled.div`
.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--orange-main);
  padding: 0.625em;
}

.note-header h3 {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
}

.note-header h3 svg {
  fill: var(--orange-main);
  width: 20px;
  margin-right: .5em;
}

.note-header button {
  font-size: 1.125rem;
  font-weight: 600;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

textarea {
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
  padding: 1em 0.75em;
  width: 100%;
  height: 70vh;
  outline: none;
  resize: none;
}

.note textarea:active,
.note textarea:focus {
  outline: none;
  border: none;
}

`;

export default NoteContainer;