import { useState, useEffect } from "react";
import { Login, Register } from "./components/pages";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./components/profile";
import axios from "axios";
import EditorComponent from "./components/mainComponents/EditorComponent";

function App() {
  const [user, setUser] = useState({ user: "ravi" });

  const getUser = async () => {
    try {
      const url = `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/auth/login/success`;
      const data = await axios.get(url, { withCredentials: true });
      setUser(data.data.user);
      console.log(data.data.user, user);

      setUser(data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(import.meta.env.VITE_REACT_APP_API_URL);

  return (
    
      <Routes>
        <Route path="/" element={user ? <Profile user={user} /> : <Home />} />
        <Route path="/create-note" element={<EditorComponent />} />
        <Route path="/edit-note/:id" element={<EditorComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
  );
}

export default App;
