import React from 'react'
import { Setting,AllNotes } from '../SvgFiles'



const SideMenu = () => {
  return (
   
    <div className="bg-white absolute h-full w-[50%]">
        <div className='mt-12 border-2 border-gray-150 '>
            <div className='p-3 flex items-center '>
              <AllNotes />
             <h2 className='pl-2 text-lg'>All Notes</h2>  
            </div>
        </div>
        <div className='border-b-2 border-gray-150'>
            <div className='p-3 flex items-center'>
              <Setting />
             <h2 className='pl-2 text-lg'>Settings</h2>  
            </div>
        </div>
   </div>
  
  )
}

export default SideMenu