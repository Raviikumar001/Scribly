import { useState } from "react";
import { SerchIcon, CrossArrow2 } from "../SvgFiles";
import {v4 as uuid} from 'uuid'
import NewNote from "./Notes";

interface Notes{
  _id: string;
  title: string;
  lastModified: Date;
  body: string;
  dateCreated: Date;
  
}

interface Props{
  noteItems: Notes[],
  activeNote:string,
  setActiveNote:React.Dispatch<React.SetStateAction<string>> 
}

const NotesComponent: React.FC<Props> = ({noteItems,activeNote,setActiveNote}) => {
  const [inputText, setInputText] = useState("");
 

  const Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onMouseClick = () => {
    setInputText("");
  };



  return (
    <div>
      <div className="flex justify-center">
        <button className="pl-3 pr-2">
          <SerchIcon />
        </button>

        <input
          value={inputText}
          onChange={Change}
          type="text"
          placeholder="Search all notes"
          className="w-full h-9 border border-transparent focus:outline-none"
        />
        {inputText && (
          <button onClick={onMouseClick}>
            <CrossArrow2 />
          </button>
        )}
      </div>
     <div className="overflow-y-auto h-[35rem]">
      {noteItems.map((item) => (
         <div key={uuid()}>

           <NewNote notes={item}  activeNote={activeNote} setActiveNote={setActiveNote}  />
         </div>
      ))}
      </div>       
    </div>
  );
};

export default NotesComponent;
