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
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 1em;
  background-color: var(--black-middle);

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    color: var(--white-font-2);
    font-weight: 800;
    text-align: center;
  }
  
  button {
    font-size: 0.9rem;
    background: none;
    color: var(--gray-primary);
    font-weight: bold;
    text-align: center;
    outline: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  button > svg {
    fill: var(--white-font-2);
    height: 25px;
    width: 25px;
    object-fit: cover;
  }
`;

export default Header;
