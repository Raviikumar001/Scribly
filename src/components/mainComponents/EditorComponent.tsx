
import React,{useState} from 'react'
import { BackArrow, Info,Action } from '../SvgFiles'
import NotesInfo from './NotesInfo';
import ActionComponent from './ActionComponent';


const EditorComponent = () => {
     
    const [info, setInfo] = useState(false);
    const [ischecked, setIschecked]= useState(true) 
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

    <React.Fragment>
    <div className='p-3 flex justify-between border-b-2 border-gray-150'>
    <>
    <button ><BackArrow /> </button>
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
    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur iure est cupiditate incidunt atque omnis, mollitia beatae error, officiis nostrum tenetur obcaecati dolore quasi ad dolorum, dolorem corrupti eaque?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe, facilis doloremque sunt quia sapiente mollitia, perferendis deserunt blanditiis praesentium asperiores alias aliquam ratione distinctio ut quos atque ad accusamus?</p> */}
    </React.Fragment>
  )
}

export default EditorComponent