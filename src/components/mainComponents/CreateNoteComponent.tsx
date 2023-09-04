
import React,{useState} from 'react'
import { BackArrow, Info,Action } from '../SvgFiles'
import NotesInfo from './NotesInfo';
import ActionComponent from './ActionComponent';
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import useCreateDate from '../useCreateDate';

const CreateComponent:React.FC = () => {
    const [title, setTitle]= useState('')
    const [inputNote, setInputNote]= useState('');


    
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

    const handleTitleChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }

    const handleInputChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setInputNote(event.target.value);    
    }

   console.log(title, inputNote)
  
   
    
  return (

    <div>
    <div className='p-3 flex justify-between border-b-2 border-gray-150'>
    <>
     <Link to="/"><BackArrow /></Link> 
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
    <form className='h-screen'>

      <input value={title} onChange={handleTitleChange} type="text" placeholder='Enter Title' className='text-slate-700 ml-5 pt-8 w-[80%] placeholder:text-lg border border-transparent focus:outline-none' />
      <textarea value={inputNote} onChange={handleInputChange} name="notes" className='text-gray-700 text-lg w-full h-screen ml-5 mt-4 border border-transparent focus:outline-none' placeholder='Note...' cols={30} rows={10}></textarea>
    </form>
    </div>
  )
}

export default CreateComponent