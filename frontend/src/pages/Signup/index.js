import * as React from "react";
import styled from "styled-components";
import Form from "../../shared/Form";

const Signup = ({ signup }) => {
  const [username, setUsername] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [error, setError] = React.useState(null);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword1 = (e) => {
    setPassword1(e.target.value);
  };

  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setError("passwords don't match.");
    } else {
      signup({
        username: username,
        password1: password1,
        password2: password2,
      });
    }
  };

  return (
    <SignupContainer>
      <div className="signup-header">
        <div className="signup-title">Sign Up</div>
      </div>
      <Form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            required
            id="username"
            type="text"
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password 1</label>
          <input
            required
            id="password1"
            type="password"
            onChange={onChangePassword1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password 2</label>
          <input
            required
            id="password2"
            type="password"
            onChange={onChangePassword2}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </Form>
      {error && <div className="signup-error">{error}</div>}
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  .signup-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5em 0;
  }

  .signup-title {
    color: var(--orange-main);
    font-size: 1.45em;
    font-weight: 600;
  }

  .signup-error {
    margin-top: 1.5em;
    text-align: center;
    color: var(--red);
  }
`;

export default Signup;
