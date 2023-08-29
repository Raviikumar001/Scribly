
import React,{useState} from 'react'
import { BackArrow, Info,Action } from '../SvgFiles'
import NotesInfo from './NotesInfo';



const EditorComponent = () => {
            
  return (

    <React.Fragment>
    <div className='p-3 flex justify-between border-b-2 border-gray-150'>
    <>
    <BackArrow />
     <Info  />
     <Action /> 
    </>


    </div>
    



    <div>
    <NotesInfo 
    />
    </div>
    </React.Fragment>
  )
}

export default EditorComponent