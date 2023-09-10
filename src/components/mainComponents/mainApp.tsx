import React, { useState, useEffect } from "react";
import MainHeader from "./mainHeader";
import axios from "axios";

import useCreateDate from "../useCreateDate";
import EditorComponent from "./EditorComponent";

interface Note {
  id: string;
  title: string;
  body: string;
  dateCreated: string;
}

  const MainApp: React.FC = () => {

  const [note, setNote] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState("");
  const [sidebar, setSideBar] = useState(true);
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}`


    const getUserData =async()=>{
      
      try{
        
        const data =await axios.get(`${url}/api/get-note`, {withCredentials:true})
        console.log(data)
        setNote(data.data.notes)
      }catch(error)
      {

      }
      


    }


  const onAddNote = async() => {
    
  
      const data = await axios.post(`${url}/api/create-note`,
        { 
          "title": "Ravi kumar tommorw",
          "notes": "I love you ravi, and you know it",
          "lastModified":"jlkjlj",
          "dateCreated":"ljldkjfl"
        }, { withCredentials: true }).catch((error)=> {
        console.log(error.response.message);
        console.log(error.response.data.message);
        
        console.log(error.response.status);
        console.log(error.response.headers);

      }).then(data=> console.log(data))
   

  };
  useEffect(()=>{
    getUserData();
  },[])

  return (
    <div className="md:grid md:grid-cols-4">
     {sidebar && <div className="md:col-span-1">
        <MainHeader
          AddNote={onAddNote}
          notes={note}
          activeNote={activeNote}
          addActiveNote={setActiveNote}
        />
      </div>}
      <div className={`hidden md:block md:h-screen ${sidebar? "md:col-span-3" : "md:col-span-4"}`}>
        <EditorComponent  
        setSidebar={setSideBar} />
      </div>
    </div>
  );
};

export default MainApp;
