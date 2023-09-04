  import React from 'react'
  import MainHeader from './mainHeader'


  import EditorComponent from './EditorComponent'

  const MainApp:React.FC = () => {
      
    return (
        <div className='md:grid md:grid-cols-4'>
           <div className='md:col-span-1'><MainHeader /> </div>             
            <div className='md:col-span-3 hidden md:block'>
              
            <EditorComponent />   

            </div>
        </div>
    )
  }

  export default MainApp