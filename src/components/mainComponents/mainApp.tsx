import React, { useState, useEffect } from "react";
import MainHeader from "./mainHeader";
import axios from "axios";

import useCreateDate from "../useCreateDate";
import EditorComponent from "./EditorComponent";

interface Note {
  _id: string;
  title: string;
  body: string;
  lastModified: string;
  dateCreated: string;
}


    interface PropsUser{
      username: string,
      email:string,
      registrationDate:string,
      _id?: string
    }
  interface Props{
    user: PropsUser
  }



  const MainApp: React.FC<Props> = ({user}) => {

  const [note, setNote] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState("");
  const [sidebar, setSideBar] = useState(true);
  const [counter, setCounter] = useState(0);
  
  
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}`
  
    
    const getUserData =async()=>{
      
      try{
        
        const data =await axios.get(`${url}/v1/api/get-notes?id=${user._id}`)
        // console.log(data);
        setNote(data.data.notes)
        
       
      }catch(error)
      {
       
      }
      


    }


  const onAddNote = async() => {
    
    
      await axios.post(`${url}/v1/api/create-note?id=${user._id}`,
        { 
          
          
          "dateCreated":useCreateDate()
        })
      .then(data=> {
       
        if(data.status ==  200){
          getUserData()
        }
      })


  };


  useEffect(()=>{
    let timeout:number;

    timeout =setTimeout(()=>{
      getUserData();
    
      
    },900)

    return () => {
      clearTimeout(timeout); // Clear the timeout if it hasn't executed yet
    };
    
  },[counter])

 
  
  const getActiveNote = ()=>{
    return note.find( (note)=> note._id == activeNote)
  }

  return (
    <div>
    <div className={"hidden md:grid md:grid-cols-4"}>
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
        setSidebar={setSideBar} setCounter={setCounter} activeNote={getActiveNote()} notes={note} setActiveNote={setActiveNote} />
      </div>
    </div>


    <div className="grid grid-cols-4 md:hidden">
     {!activeNote && <div className="col-span-4">
        <MainHeader
          AddNote={onAddNote}
          notes={note}
          activeNote={activeNote}
          user={user}
          addActiveNote={setActiveNote}
        />
      </div>}
      {/* <div className={`hidden md:block md:h-screen ${sidebar? "md:col-span-3" : "md:col-span-4" }`}>
        <EditorComponent  
        setSidebar={setSideBar} setCounter={setCounter} activeNote={getActiveNote()} notes={note} setActiveNote={setActiveNote} />
      </div> */}
      <div className={activeNote ? "col-span-4":"hidden"}>
        <EditorComponent  
        setSidebar={setSideBar} setCounter={setCounter} activeNote={getActiveNote()} notes={note} setActiveNote={setActiveNote} />
      </div>


    </div>

    </div>
  );
};

export default MainApp;
