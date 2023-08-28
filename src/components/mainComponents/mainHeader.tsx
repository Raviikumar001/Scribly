import React from 'react'
import { Menu, WriteNote } from '../SvgFiles'
function MainHeader() {
    return (
        <div className='p-3 flex justify-between border-b-2 border-gray-150'>
         <Menu />
          <p className='text-md font-medium'>All Notes</p>
          <WriteNote /> 
        </div>
    )
}

export default MainHeader