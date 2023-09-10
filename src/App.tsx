import { useState, useEffect } from "react";
import { Login, Register } from "./components/pages";
import Home from "./components/Home";
import { Routes, Route} from "react-router-dom";
import Profile from "./components/profile";

import EditorComponent from "./components/mainComponents/EditorComponent";
import CreateComponent from "./components/mainComponents/CreateNoteComponent";




function App() {

  return (
    
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/app" element={<Profile />} />
        <Route path="/create-note" element={<CreateComponent />} />
        <Route path="/edit-note/:id" element={<EditorComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
  );
}

export default App;
