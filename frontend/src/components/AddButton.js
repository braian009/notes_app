import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import styled from "styled-components";

function AddButton() {
  return (
    <Link to="/notes/new" className="floating-button">
      <FloatingButton>
        <AddIcon />
      </FloatingButton>
    </Link>
  );
}

const FloatingButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 1.85em;
  height: 1.85em;
  font-size: 2rem;

  position: absolute;
  bottom: 1.5rem;
  right: 1rem;
  background-color: var(--orange-main);
  border: none;
  border-radius: 50%;

  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  svg {
    fill: var(--black-bg);
  }
`;

export default AddButton;
