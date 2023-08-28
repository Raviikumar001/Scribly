import React from 'react'
import  {SerchIcon }from '../SvgFiles'
const NotesComponent = () => {
  return (
    <div>
      <div className='flex  justify-center'>
        <button className='pl-3 pr-2'>
        <SerchIcon />
        </button>
        <input type="text" placeholder='Search all notes' className='w-[80%] h-9 ' />
      </div>

    </div>
  )
}

export default NotesComponent