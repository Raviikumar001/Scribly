import { useState, useEffect } from "react";
import { Login, Register } from "./components/pages";
import Home from "./components/Home";
import { Routes, Route} from "react-router-dom";
import Profile from "./components/profile";
import axios from "axios";
import EditorComponent from "./components/mainComponents/EditorComponent";
import CreateComponent from "./components/mainComponents/CreateNoteComponent";

interface Props{
  username: string,
  email:string,
  registrationDate:string,
  id?: string
}


function App() {
  const [user, setUser] = useState<undefined| Props >();

  const getUser = async () => {
    try {
      const url = `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/auth/login/success`;
      const data = await axios.get(url, { withCredentials: true });
      console.log(data)
      await setUser(data.data.user);
    } catch (error) {
      console.log(error);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  };

  //  const getUser = async () => {
  //   try {
  //     const url = `${
  //       import.meta.env.VITE_REACT_APP_API_URL
  //     }/user`;
  //     const data = await axios.get(url, { withCredentials: true });
  //     console.log(data.data )
  //     await setUser(data.data);
     

      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  useEffect(() => {
    getUser();
  }, []);


  console.log(user)
  return (
    
      <Routes>
        <Route path="/" element={user ? <Profile user={user} /> : <Home />} />
        <Route path="/create-note" element={<CreateComponent />} />
        <Route path="/edit-note/:id" element={<EditorComponent />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
  );
}

export default App;
