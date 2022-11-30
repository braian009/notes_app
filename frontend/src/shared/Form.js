import styled from "styled-components";

const Form = styled.form`
  background-color: var(--black-light);
  color: #d6d1d1;
  width: 70%;
  margin: 0 auto;
  margin-top: 1em;
  padding: 1.5em;

  input {
    width: 100%;
    outline: none;
    color: #252629;
  }

  button {
    background-color: var(--color-button);
    color: var(--black-light);
    width: 100%;
    padding: 0.5em 0.8em;
    border: none;
    margin-top: 2em;
  }
`;

export default Form;