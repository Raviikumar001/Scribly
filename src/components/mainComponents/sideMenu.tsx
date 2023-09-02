import React from 'react';
import { Setting,AllNotes } from '../SvgFiles'

interface Props {
  toggelMenu : ()=>void;
  toggleseting: ()=> void;

}

const SideMenu: React.FC<Props> = ({toggelMenu,toggleseting}) => {

  const ShowSettings = ()=> {
    toggelMenu();
    toggleseting();
  }
  const showNotes = ()=>{
    toggelMenu()
  }
  return (
   
    <div className="bg-white absolute h-full w-[50%]">
        <div className='mt-12 border-2 border-gray-150 '>
            <div className='p-3 flex items-center '>
             <AllNotes /> 
             <button onClick={showNotes}> <h2 className='pl-2 text-lg'>All Notes</h2>  </button>  
            </div>
        </div>
        <div className='border-b-2 border-gray-150'>
            <div className='p-3 flex items-center'>
             <Setting /> 
             <button onClick={ShowSettings}> <h2 className='pl-2 text-lg'>Settings</h2>  </button> 
            </div>
        </div>
   </div>
  
  )
}

export default SideMenu