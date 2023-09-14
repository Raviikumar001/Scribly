import { Login, Register } from "./components/pages";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import axios from "axios";
import { useEffect } from "react";

function getUser() {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/auth/login/success`;
  axios
    .get(url, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "https://scribly-note.vercel.app/",
        "Content-Type": "application/json",
      },
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function App() {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<Profile />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
