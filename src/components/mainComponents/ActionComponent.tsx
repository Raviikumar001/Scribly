import { useState } from "react"

interface ActionProps {
    ischecked:boolean,
    updateCheck: (ischecked:boolean)=>void
}

const ActionComponent:React.FC<ActionProps> = ({ischecked,updateCheck}) => {
    const [cheacked, setIschecked]= useState(false);
    
    const togglechecked = ()=>{
        updateCheck(ischecked)
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
            <button>Move To Trash</button>
          </div> 
        </div>
    </div>
  )
}

export default ActionComponent