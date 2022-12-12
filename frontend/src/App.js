import "./App.css";
import * as React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import NotePage from "./pages/NotePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";

const URL = "http://127.0.0.1:8000";

function App() {
  const navigate = useNavigate();

  const [error, setError] = React.useState("");

  const [loggedUser, setLoggedUser] = React.useState({
    username: localStorage.getItem("username") || null,
    token: localStorage.getItem("token") || null,
  });

  const login = async (user = null) => {
    if (!user) return;

    try {
      const response = await axios.post(
        `${URL}/api/v1/dj-rest-auth/login/`,
        user
      );
      setLoggedUser({ username: user.username, token: response.data.key });
      localStorage.setItem("username", user.username);
      localStorage.setItem("token", response.data.key);
      navigate("/");
    } catch (error) {
      setError(error.response.data.non_field_errors[0]);
    }
  };

  const signup = async (user = null) => {
    if (!user) return;

    try {
      const response = await axios.post(
        `${URL}/api/v1/dj-rest-auth/registration/`,
        user
      );
      setLoggedUser({ username: user.username, token: response.data.key });
      localStorage.setItem("username", user.username);
      localStorage.setItem("token", response.data.key);
      navigate("/");
    } catch (error) {
      setError(error.response.data.non_field_errors[0]);
    }
  };

  const logout = () => {
    setLoggedUser({ username: null, token: null });
    localStorage.setItem("username", "");
    localStorage.setItem("token", "");
    setError(null);
    navigate("/");
  };

  return (
    <Container>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Header user={loggedUser} onLogout={logout} />}
          >
            <Route
              index
              element={
                <ProtectedRoute user={loggedUser}>
                  <NoteListPage token={loggedUser.token} />
                </ProtectedRoute>
              }
            />

            <Route
              path="notes/:noteId"
              element={<NotePage token={loggedUser.token} />}
            />
            <Route
              path="login"
              element={<Login login={login} error={error} />}
            />
            <Route path="signup" element={<Signup signup={signup} />} />
          </Route>
        </Routes>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: var(--white-font-1);
  background-color: var(--black-bg);
  display: flex;
  align-items: center;

  .app {
    width: 100%;
    max-width: 480px;
    height: 90vh;
    margin: 0 auto;
    background-color: var(--lighter-black);
    position: relative;


    .app-body {
      padding: 16px;
    }
  }
`;

export default App;
