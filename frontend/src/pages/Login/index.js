import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "../../shared/Form";




const Login = ({ login, error}) => {
  

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    login({username: username, password: password});
  };


  return (
    <LoginContainer>
      <div className="login-header">
        <div className="login-title">Login</div>
      </div>
      <Form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={onChangeUsername}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={onChangePassword}/>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </Form>
      <div className="signup-option">or <Link to='/signup'>Signup</Link> for a new account</div>
      {error && <div className="login-error">{error}</div>}
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
.login-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5em 0;
  }

  .login-title {
    color: var(--color-main);
    font-size: 1.45em;
    font-weight: 600;
  }

  .signup-option {
    margin-top: 1.5em;
    text-align: center;

    a {
    color: var(--color-main);

    }
  }

  .login-error {
    margin-top: 1.5em;
    text-align: center;
    color: var(--color-red);
  }


`;

export default Login;
