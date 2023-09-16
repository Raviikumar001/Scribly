import React, {  useEffect, useState } from "react";
import { BackArrow, Info, Action, Toggle } from "../SvgFiles";
import NotesInfo from "./NotesInfo";
import ActionComponent from "./ActionComponent";
import { Link, } from "react-router-dom";
import axios from "axios";
import useCreateDate from "../useCreateDate";
import ReactMarkdown from "react-markdown";


interface Note {
  _id: string;
  title: string;
  body: string;
  dateCreated: string;
  lastModified: string;
}



interface Props {
  notes: Note[]
  setCounter:React.Dispatch<React.SetStateAction<number>>;
  activeNote?: Note ;
  setActiveNote:React.Dispatch<React.SetStateAction<string>>;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;

}



const EditorComponent: React.FC<Props> = ({ setSidebar,setCounter,   activeNote, notes, setActiveNote }) => {
  const [info, setInfo] = useState(false);
  const [ischecked, setIschecked] = useState(false);
  const [showchecked, setShowChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [body ,setBody] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note>();
  
  // const url = `${import.meta.env.VITE_REACT_APP_API_URL}`
  const updateInfo = () => {
    setInfo((info) => !info);
  };
  const toggleShowCheck = () => {
    setShowChecked((showchecked) => !showchecked);
  };

  const toggleCheckbox = () => {
    setIschecked((ischecked) => !ischecked);
  };
 

  const getActiveNote = ()=> {
    if(activeNote?._id)
    {let selectedNote= notes.filter(note =>  note._id == activeNote._id);
      let selected =selectedNote[0]
   
       setSelectedNote(selected)
       setTitle(selected.title)
       setBody(selected.body)

    }
    
    // console.log(selectedNote, "this is the selected note")
  }

  const updateUserData =async ()=>{
 

   setTimeout(()=>{
    
    axios.patch(`/api/update-note/${activeNote?._id}`,{title:title,body:body,lastModified:useCreateDate()}, {withCredentials:true})
    
  },1300)
  
  
  }


  useEffect(()=>{
   if(activeNote){
    getActiveNote()
   }

  },[activeNote?._id])

  

  const editTitle =  (event:React.ChangeEvent<HTMLInputElement>) => {

       setTitle(event.target.value)
       updateUserData()
       setCounter((prev)=> prev +1)
  };

  const editBody =  (event:React.ChangeEvent<HTMLTextAreaElement>) => {

    setBody(event.target.value)
    updateUserData()
    setCounter((prev)=> prev +1)
  };

  function headBackToApp()
  {
    setActiveNote("")
  }

  console.log(selectedNote, "selectedNote")
  return (
    <div className="h-[100%] w-full">
      <div className={activeNote?"p-3 flex justify-between border-b-2 border-gray-150 md:border-2  ":"hidden" }  >
        <>
          <div className="md:hidden">
            <Link to="/app">
            <span onClick={headBackToApp}> <BackArrow  /> </span>  
            </Link>{" "}
          </div>
          <div
            className="hidden md:block"
            onClick={() => setSidebar((prev) => !prev)}
          >
            {" "}
            <Toggle />
          </div>
          <button onClick={updateInfo}>
            <Info />{" "}
          </button>
          <button onClick={toggleShowCheck}>
            <Action />{" "}
          </button>
        </>
      </div>

      {/* info component */}
      <div>{info && <NotesInfo notes={info} updateNotes={updateInfo} activenote={selectedNote}/>}</div>

      {/* Action component */}
      <div>
        {showchecked && (
          <ActionComponent setCounter={setCounter} ischecked={ischecked} setShowChecked={setShowChecked} updateCheck={toggleCheckbox} activeNote={activeNote} setActiveNote={setActiveNote} />
        )}
      </div>
      
      
    <div className={ischecked? " flex justify-center items-center h-screen md:border md:border-slate-300": "hidden"}>
  
    <div 
    className="text-gray-700 text-lg w-[80%] ml-9 pl-5 pr-3 h-[87%] mt-4 border border-transparent  focus:outline-none"

    > 
     <h2 className="mb-5">Markdown Preview</h2>
      <ReactMarkdown>
        {body} 
      </ReactMarkdown >
    </div>
  


      </div>  

    <div className={ischecked ? "hidden": "block"}>
    {activeNote ? (
        <form className="h-screen md:border md:border-slate-300">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={editTitle}
            className="text-slate-700 pl-5 pr-3 pt-8 w-[80%] placeholder:text-lg border border-transparent focus:outline-none"
          />
          <textarea
            name="notes"
            value={body}
            onChange={editBody}
            className="text-gray-700 text-lg w-full  pl-5 pr-3 h-[87%] mt-4 border border-transparent  focus:outline-none"
            placeholder="Note..."
          ></textarea>
        </form>
      ) : (
        <div className="flex justify-center items-center h-screen md:border md:border-slate-300 text-slate-600 text-lg">
          Select or create a Note
        </div>
      )}
    </div>
    
    
      
    
       



    </div>
  );
};

export default EditorComponent;
