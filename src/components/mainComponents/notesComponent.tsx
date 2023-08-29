import {useState} from 'react'
import  {SerchIcon, CrossArrow2 }from '../SvgFiles'
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
      <div className='flex  justify-center'>
        <button className='pl-3 pr-2'>
        <SerchIcon />
        </button>
        
        <input value={inputText} onChange={Change} type="text" placeholder='Search all notes' className='w-full h-9 border border-transparent focus:outline-none' />
        {inputText && ( <button onClick={onMouseClick}><CrossArrow2 /></button>  ) }
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default NotesComponent