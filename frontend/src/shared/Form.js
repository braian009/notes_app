import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 22em;
  margin: 0 auto;
  margin-top: 1em;
  padding: 1.5em;
  background-color: var(--black-light);

  .form-group + .form-group  {
    margin-top: 1.5em;
  }

  label {
    font-size: 1.1rem;
    color: var(--white-font-2);
  }

  input {
    font-size: 1.1rem;
    line-height: 1.2;
    width: 100%;
    outline: none;
    color: var(--white-font-2);
    background: none;
    border: none;

    border-bottom: 1px solid var(--blue-primary);
  }

  button {
    font-size: 1rem;
    background-color: var(--blue-primary);
    color: var(--white-font-2);
    width: 100%;
    padding: 0.5em 0.8em;
    border: none;
    margin-top: 2em;

    transition: all .2s linear;

    &:hover {
      background-color: var(--orange-main);
    }
  }
`;

export default Form;