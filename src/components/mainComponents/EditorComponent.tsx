import React, { TextareaHTMLAttributes, useEffect, useState } from "react";
import { BackArrow, Info, Action, Toggle } from "../SvgFiles";
import NotesInfo from "./NotesInfo";
import ActionComponent from "./ActionComponent";
import { Link, } from "react-router-dom";
import axios from "axios";
import useCreateDate from "../useCreateDate";
interface Note {
  _id: string;
  title: string;
  body: string;
  dateCreated: Date;
  lastModified: Date;
}



interface Props {
  notes: Note[]
  activeNote?: Note | undefined;
  setActiveNote:React.Dispatch<React.SetStateAction<string>>;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditorComponent: React.FC<Props> = ({ setSidebar, activeNote, notes, setActiveNote }) => {
  const [info, setInfo] = useState(false);
  const [ischecked, setIschecked] = useState(false);
  const [showchecked, setShowChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [body ,setBody] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note>();
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}`
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
    let selectedNote= notes.filter(note =>  note._id == activeNote._id);
    selectedNote =selectedNote[0]

    setSelectedNote(selectedNote)
    setTitle(selectedNote.title)
    setBody(selectedNote.body)
    // console.log(selectedNote, "this is the selected note")
  }

  const updateUserData =async ()=>{
  setTimeout(()=>{
    
    axios.patch(`${url}/api/update-note/${activeNote?._id}`,{title:title,body:body,lastModified:useCreateDate()}, {withCredentials:true})
    
  },1500)
    
  }


  useEffect(()=>{
   if(activeNote){
    getActiveNote()
   }
  },[activeNote])

  

  const editTitle =  (event:React.ChangeEvent<HTMLInputElement>) => {

       setTitle(event.target.value)
       updateUserData()
  };

  const editBody =  (event:React.ChangeEvent<HTMLTextAreaElement>) => {

    setBody(event.target.value)
    updateUserData()
  };

  console.log(selectedNote, "selectedNote")
  return (
    <div className="h-[100%] w-full">
      <div className={activeNote?"p-3 flex justify-between border-b-2 border-gray-150 md:border-2  ":"hidden" }  >
        <>
          <div className="md:hidden">
            <Link to="/">
              <BackArrow />
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
          <ActionComponent ischecked={ischecked} setShowChecked={setShowChecked} updateCheck={toggleCheckbox} activeNote={activeNote} setActiveNote={setActiveNote} />
        )}
      </div>

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
  );
};

export default EditorComponent;
