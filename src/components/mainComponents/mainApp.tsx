import React from 'react'
import MainHeader from './mainHeader'
import NotesComponent from './notesComponent'
const MainApp = () => {
  return (
       <div className='ml-2'>
           <MainHeader />
            <NotesComponent />
       </div>
  )
}

export default MainApp