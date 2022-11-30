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
  font-size: 48px;
  position: absolute;
  bottom: 1.5rem;
  right: 1rem;
  background: var(--color-main);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);


 svg {
  fill: var(--color-bg);
}

`;

export default AddButton;
