import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderContainer>
        <h1>Notes App</h1>
        {user.username && <button onClick={onLogout}>logout ({user.username})</button>}
      </HeaderContainer>
        <Outlet />
        
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  background-color: var(--black-light);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2em;
    color: var(--color-dark);
    font-weight: 800;
    text-align: center;
  }
  
  button {
    font-size: 0.9em;
    color: var(--color-gray);
    font-weight: bold;
    text-align: center;
    outline: none;
    background: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  button > svg {
    fill: var(--color-dark);
    height: 25px;
    width: 25px;
    object-fit: cover;
  }
`;

export default Header;
