import {useState} from 'react'
import  {SerchIcon, CrossArrow2 }from '../SvgFiles'
import NewNote from './NewNote'





const NotesComponent = () => {
  const [inputText, setInputText] = useState("")

  const Change = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setInputText(event.target.value)
  }

  const onMouseClick = ()=>{
    setInputText("")
  }

  
  
  return (
    <div>
      <div className='flex justify-center'>
        <button className='pl-3 pr-2'>
        <SerchIcon />
        </button>
        
        <input value={inputText} onChange={Change} type="text" placeholder='Search all notes' className='w-full h-9 border border-transparent focus:outline-none' />
        {inputText && ( <button onClick={onMouseClick}><CrossArrow2 /></button>  ) }
      </div>

      <div className=''>
        
        {/* <div className='border border-r-0 border-slate-300 pl-3'>
          <h3 className='font-medium pt-1'>This is a new title</h3>
          <TruncatedText text={paragraph} limit={7}/>
        </div>
        <div className='border border-r-0 border-slate-300 pl-3'>
          <h3 className='font-medium pt-1'>This is a new title</h3>
          <TruncatedText text={paragraph} limit={7}/>
        </div>


        <div className='border border-r-0 border-slate-300 pl-3'>
          <h3 className='font-medium pt-1'>This is a new title</h3>
          <TruncatedText text={paragraph} limit={7}/>
        </div> */}

        
      </div>

    </div>
  )
}

export default NotesComponent