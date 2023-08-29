
import React,{useState} from 'react'
import { BackArrow, Info,Action } from '../SvgFiles'
import NotesInfo from './NotesInfo';



const EditorComponent = () => {
     
    const [info, setInfo] = useState(false);
    const updateInfo= ()=>{
        setInfo(info => !info)
    }

  return (

    <React.Fragment>
    <div className='p-3 flex justify-between border-b-2 border-gray-150'>
    <>
    <button ><BackArrow /> </button>
    <button onClick={updateInfo}><Info  /> </button> 
    <button><Action />  </button> 
    </>


    </div>




    <div>
   {info && <NotesInfo notes={info} updateNotes={updateInfo}

    />
    }
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur iure est cupiditate incidunt atque omnis, mollitia beatae error, officiis nostrum tenetur obcaecati dolore quasi ad dolorum, dolorem corrupti eaque?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe, facilis doloremque sunt quia sapiente mollitia, perferendis deserunt blanditiis praesentium asperiores alias aliquam ratione distinctio ut quos atque ad accusamus?</p>
    </React.Fragment>
  )
}

export default EditorComponent