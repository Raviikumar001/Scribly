
import { useState } from 'react'
import { Menu, WriteNote } from '../SvgFiles'
import NotesComponent from './notesComponent'
import { SampleNotes } from "../../../examplePost";

function MainHeader() {

  const [note, setNote] = useState(SampleNotes);
      console.log(note)

  const handleNote = ()=> {
     const newNote = {
      notes: "Wheel of time is actually a very good novel, and now it has been done into a webseries also"
     }

     setNote(prev => [...prev,newNote]);
  }

    return (
        <div>
<div className='p-3 flex justify-between border-b-2 border-gray-150'>
         <Menu />
          <p className='text-md font-medium'>All Notes</p>
         <button onClick={handleNote}>  <WriteNote />  </button>

        </div>
           
        <NotesComponent  noteItems={note} />
        </div>
      
    )
}

export default MainHeader