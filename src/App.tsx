import { Login, Register } from "./components/pages";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
// import axios from "axios";
// import { useEffect } from "react";

// function getUser() {
 
//   axios
//     .get("https://scriblle.onrender.com/")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }

function App() {
  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app/:id?" element={<Profile />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
