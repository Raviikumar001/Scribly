import React from 'react'
import MainHeader from './mainHeader'
import NotesComponent from './notesComponent'

import EditorComponent from './EditorComponent'

const MainApp = () => {
     
  return (
       <div className='ml-2'>
           {/* <MainHeader />
            <NotesComponent /> */}
           <EditorComponent />   
       </div>
  )
}

export default MainApp