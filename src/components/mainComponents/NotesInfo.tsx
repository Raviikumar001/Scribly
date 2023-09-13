import React, { useEffect, useState } from "react";
import { CrossArrow3 } from "../SvgFiles";
import axios from "axios";


interface Note {
  _id: string;
  title: string;
  body: string;
  lastModified: Date;
  dateCreated: Date;
} 

interface infoProps  {
   activenote?: Note ,
    notes: boolean,
    updateNotes: (note:boolean)=> void

}





const NotesInfo: React.FC<infoProps> = ({notes, updateNotes, activenote}) => {
    const [user, setuser] = useState();
    const changeValue = ()=>{
        updateNotes(notes);
    }
    // console.log(activenote)

    function countWords(str:string) {
      return str.trim().split(/\s+/).length;
    }

    const getDataOfNotes = async()=> {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}`
      const data = axios.get(`${url}/api/get-note/${activenote?._id}`, {withCredentials:true})
      .then( (res)=> {
        console.log(res.data.note)
        setuser(res.data.note)
         
      })
    }

    useEffect( ()=>{
      console.log('useefftct') 
      getDataOfNotes()
      

    },[])
    console.log(user)
  return (
    
    
    <div className="relative ">
      
   
    {user ? 

      <div className="fixed top-0 left-0  h-screen bg-slate-300 bg-opacity-30 flex justify-center items-center w-[100%]">
      <div className="bg-white text-md absolute top-28 border border-slate-300 left-[10%] w-[80%] rounded-md backdrop-blur md:w-[30%] md:top-44 md:left-[40%]">
        <div className="p-3 flex justify-between border-b-2 border-gray-150  w-[100%]">
          <h3 className="font-semibold">Document</h3>
          <button onClick={changeValue}>
          <CrossArrow3  />

          </button>
        </div>
    <div className="text-slate-700 leading-relaxed text-md mb-9 mt-6">

    <div className="pl-3 flex justify-between w-[95%]">
        <p>Modified</p>
        <p>{user?.lastModified}</p>
        </div>

        <div className="pl-3 flex justify-between w-[95%]">
        <p>Words</p>
        <p>{countWords(user?.body)}</p>
        </div>

        <div className="pl-3 flex justify-between w-[95%]">
        <p>Characters</p>
        <p>{user?.body.length}</p>
        </div>

        <div className="pl-3 flex justify-between w-[95%] ">
        <p>Created</p>
        <p>{user?.dateCreated}</p>
        </div>
        
    </div>

      </div>
      </div> 
      :
      ""
}
     
    
    </div>

    
  );
};

export default NotesInfo;
