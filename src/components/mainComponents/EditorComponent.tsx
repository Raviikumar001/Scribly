
import React,{useState} from 'react'
import { BackArrow, Info,Action , Toggle} from '../SvgFiles'
import NotesInfo from './NotesInfo';
import ActionComponent from './ActionComponent';
import { Link } from 'react-router-dom';




const EditorComponent:React.FC  = () => {
     
    const [info, setInfo] = useState(false);
    const [ischecked, setIschecked]= useState(false) 
    const [showchecked, setShowChecked] = useState(false)
    const updateInfo= ()=>{
        setInfo(info => !info)
    }
    const toggleShowCheck =()=>{
      setShowChecked(showchecked=> !showchecked)
    }

    const toggleCheckbox =()=>{
      setIschecked(ischecked=> !ischecked)
    }
    
  return (

    <div className='h-[100%] w-full'>
    <div className='p-3 flex justify-between border-b-2 border-gray-150 md:border-2  '>
    <>
    <div className='md:hidden'><Link to="/"><BackArrow /></Link> </div>  
    <div className='sm:hidden md:block'> <Toggle /></div>
    <button onClick={updateInfo}><Info  /> </button>
    <button onClick={toggleShowCheck}><Action />  </button> 
    </>


    </div>


    

    <div>
   {info && <NotesInfo notes={info} updateNotes={updateInfo}

    />
    }
    </div>

    <div>
  {showchecked && <ActionComponent ischecked={ischecked} updateCheck={toggleCheckbox} />}    
    </div>
    <form className='h-screen md:border md:border-slate-300'>

      <input type="text" placeholder='Enter Title' className='text-slate-700 pl-5 pr-3 pt-8 w-[80%] placeholder:text-lg border border-transparent focus:outline-none' />
      <textarea name="notes" className='text-gray-700 text-lg w-full  pl-5 pr-3 h-[87%] mt-4 border border-transparent  focus:outline-none' placeholder='Note...' ></textarea>
    </form>
    </div>
  )
}

export default EditorComponent