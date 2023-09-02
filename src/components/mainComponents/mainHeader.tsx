import { useState } from "react";
import { Menu, WriteNote } from "../SvgFiles";
import NotesComponent from "./notesComponent";
import { SampleNotes } from "../../../examplePost";
import SideMenu from "./sideMenu";
import { CrossArrow3, Down } from "../SvgFiles";

interface SettingsProps{
  toggleSetting: ()=>void
}

function SettingsComponent(props: SettingsProps) {
  const [accountInfo, setAccountInfo] = useState(true);
  const [tools, setTools] = useState(false);
  
  const toggleaccount= ()=> {
    setAccountInfo(prev => !prev)
  }

  const toogleTools= ()=> {
    toggleaccount();
    setTools(prev => !prev)
  }


  return (
    <div className="fixed top-0 left-0  h-screen bg-slate-300 bg-opacity-30 flex justify-center items-center w-[100%]">
      <div className="bg-white w-[90%] rounded-md">
        <div className="p-3 border-b-2">
          <div className="flex items-center justify-between ">
            <h3>Settings</h3>
            <button onClick={props.toggleSetting}><CrossArrow3 /> </button>
          </div>
        </div>
        <div className="border-b-2 ">
          <div className="text-blue-800 flex justify-evenly mb-5 border-b-2 p-2">
            <button className="p-1 border-b-2 focus:border-blue-900" onClick={toggleaccount}>
              Account
            </button>
            <button className="p-1 border-b-2  focus:border-blue-900" onClick={toogleTools}>
              Tools
            </button>
          </div>


        {accountInfo? <div className="pl-3 mb-5 mr-3">
                
                <p className="text-sm text-slate-500">ACCOUNT</p>
                <div className="border border-gray-300"><p className="p-3 text-center text-gray-600 mt-1">samcollins9899@gmail.com</p></div>

                <div className="mt-6 border border-gray-300 bg-blue-700 text-white text-center "><button className="p-3">Log Out</button></div>
                </div> :  <div className="ml-2 mb-5 mr-1">
            <p className="text-sm font-semibold text-slate-500">TOOLS</p>

            <button className="flex  w-[90%] justify-between border border-slate-500 p-2 mt-2 ">
              <div>Export Notes</div>
              <Down />
            </button>
          </div>  }

          
         
         
        </div>
      </div>
    </div>
  );
}



function MainHeader() {
  const [note, setNote] = useState(SampleNotes);
  const [menu, setMenu] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  

  const handleNote = () => {
    const newNote = {
      notes: "",
    };

    setNote((prev) => [...prev, newNote]);
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  const toggleValue = () => {
    if (menu == true) {
      setMenu(false);
    }
  };

  const toggleseting = () => {
    console.log(showSetting)
    setShowSetting((prev) => !prev);
  };

  return (
    <div className="relative h-screen">
      {menu? <SideMenu toggelMenu={toggleMenu} toggleseting={toggleseting} /> : ""}
    <div onClick={toggleValue}>
    <div className="p-3 flex justify-between border-b-2 border-gray-150" >
       <button onClick={toggleMenu} > <Menu /></button> 
        <p className="text-md font-medium">All Notes</p>
        <button onClick={handleNote}>
         
          <WriteNote />
        </button>
      </div>
      
      <NotesComponent  noteItems={note}  />
    </div >
    {showSetting ?<SettingsComponent toggleSetting={toggleseting} /> : '' }   
    </div>
  );
}

export default MainHeader;
