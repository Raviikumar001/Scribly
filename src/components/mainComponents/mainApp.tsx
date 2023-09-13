import React, { useState, useEffect } from "react";
import MainHeader from "./mainHeader";
import axios from "axios";

import useCreateDate from "../useCreateDate";
import EditorComponent from "./EditorComponent";

interface Note {
  _id: string;
  title: string;
  body: string;
  lastModified: Date
  dateCreated: Date;
}


    interface PropsUser{
      username: string,
      email:string,
      registrationDate:string,
      id?: string
    }
  interface Props{
    user: PropsUser
  }


  const MainApp: React.FC<Props> = ({user}) => {

  const [note, setNote] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState("");
  const [sidebar, setSideBar] = useState(true);

  
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}`
  
    
    const getUserData =async()=>{
      
      try{
        
        const data =await axios.get(`${url}/api/get-notes`, {withCredentials:true})
       
        setNote(data.data.notes)
        
       
      }catch(error)
      {
        console.log(error)
      }
      


    }


  const onAddNote = async() => {
    
  
      const data = await axios.post(`${url}/api/create-note`,
        { 
          
          
          "dateCreated":useCreateDate()
        }, { withCredentials: true })
      //   .catch((error)=> {
      //   console.log(error.response.message);
      //   console.log(error.response.data.message);
        
      //   console.log(error.response.status);
      //   console.log(error.response.headers);

      // })
      .then(data=> {
        if(data.status ==  200){
          getUserData()
        }
      })
      

  };


  useEffect(()=>{
    getUserData();
  },[])

  
  
  const getActiveNote = ()=>{
    return note.find( (note)=> note._id == activeNote)
  }
  
  

  return (
    <div className="md:grid md:grid-cols-4">
     {sidebar && <div className="md:col-span-1">
        <MainHeader
          AddNote={onAddNote}
          notes={note}
          activeNote={activeNote}
          user={user}
          addActiveNote={setActiveNote}
        />
      </div>}
      <div className={`hidden md:block md:h-screen ${sidebar? "md:col-span-3" : "md:col-span-4"}`}>
        <EditorComponent  
        setSidebar={setSideBar} activeNote={getActiveNote()} notes={note} setActiveNote={setActiveNote} />
      </div>
    </div>
  );
};

export default MainApp;
