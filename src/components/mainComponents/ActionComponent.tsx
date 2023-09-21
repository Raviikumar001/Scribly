// import { useState } from "react"
import axios from "axios";
interface Note {
  _id: string;
  title: string;
  body: string;
  dateCreated: string;
  lastModified: string;
}


interface ActionProps {
    ischecked:boolean;
    activeNote?: Note | undefined;
    setActiveNote:React.Dispatch<React.SetStateAction<string>>;
    setShowChecked : React.Dispatch<React.SetStateAction<boolean>>;
    setCounter:React.Dispatch<React.SetStateAction<number>>;
    updateCheck: (ischecked:boolean)=>void
}

const ActionComponent:React.FC<ActionProps> = ({ischecked,updateCheck,setCounter, activeNote,setActiveNote, setShowChecked}) => {
    // const [cheacked, setIschecked]= useState(ischecked);
    // const url = `${import.meta.env.VITE_REACT_APP_API_URL}`
    const togglechecked = ()=>{
        updateCheck(ischecked)
        setShowChecked(false)
    }

    const DeleteNote= async()=>{
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}`
      const data= await axios.delete(`${url}/api/delete-note/${activeNote?._id}`, {withCredentials:true})
      
      if(data.status =200)
      {
        setActiveNote("");
        setShowChecked(false)
        setCounter(prev=>prev +1)
      }
    }
 

  return (
    <div className="realtive">
        <div className="absolute top-14 left-56 border bg-white border-slate-300 shadow-lg rounded-md w-[40%] md:w-[13%] md:top-16 md:left-[85%]">
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