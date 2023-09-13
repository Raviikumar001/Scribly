import { useState } from "react"
import axios from "axios";
interface Note {
  _id: string;
  title: string;
  body: string;
  dateCreated: Date;
  lastModified: Date;
}


interface ActionProps {
    ischecked:boolean;
    activeNote?: Note | undefined;
    setActiveNote:React.Dispatch<React.SetStateAction<string>>;
    setShowChecked : React.Dispatch<React.SetStateAction<boolean>>;
    updateCheck: (ischecked:boolean)=>void
}

const ActionComponent:React.FC<ActionProps> = ({ischecked,updateCheck, activeNote,setActiveNote, setShowChecked}) => {
    const [cheacked, setIschecked]= useState(false);
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}`
    const togglechecked = ()=>{
        updateCheck(ischecked)
    }

    const DeleteNote= async()=>{
      const data= await axios.delete(`${url}/api/delete-note/${activeNote?._id}`, {withCredentials:true})
      console.log(data)
      if(data.status =200)
      {
        setActiveNote("");
        setShowChecked(false)
      }
    }
 

  return (
    <div className="realtive">
        <div className="absolute top-14 left-48 border border-slate-300 shadow-lg rounded-md w-[50%] md:w-[13%] md:top-16 md:left-[85%]">
            <div className="p-3 flex justify-between border-b-2 border-gray-150  w-[100%] " >
              <label htmlFor="Markdown">
                Markdown
                </label>
             <input
             type="checkbox"
             checked={ischecked}
             onChange={togglechecked}
            />
              
          </div>   
          <div className="p-3 text-red-600">
            <button onClick={DeleteNote}>Delete</button>
          </div> 
        </div>
    </div>
  )
}

export default ActionComponent