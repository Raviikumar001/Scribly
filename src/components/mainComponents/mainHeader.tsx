
import { useState } from 'react'
import { Menu, WriteNote } from '../SvgFiles'
import NotesComponent from './notesComponent'

function MainHeader() {



    return (
        <div>
<div className='p-3 flex justify-between border-b-2 border-gray-150'>
         <Menu />
          <p className='text-md font-medium'>All Notes</p>
         <button >  <WriteNote />  </button>

        </div>
           
        <NotesComponent  />
        </div>
      
    )
}

export default MainHeader