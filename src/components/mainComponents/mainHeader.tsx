import { useState, } from "react";
import { Menu, WriteNote } from "../SvgFiles";
import NotesComponent from "./notesComponent";
import { SampleNotes } from "../../../examplePost";
import SideMenu from "./sideMenu";

function MainHeader() {
  const [note, setNote] = useState(SampleNotes);
  const [menu, setMenu] = useState(false);
  
  console.log(menu , "menu state");

  const handleNote = () => {
    const newNote = {
      notes: "",
    };

    setNote((prev) => [...prev, newNote]);
  };

  const toggleMenu = ()=>
  {
    setMenu(prev => !prev);
  }
  const toggleValue = ()=> {
    if(menu == true){
      setMenu(false)
    }
  }
 



  return (
    <div className="relative h-screen" onClick={toggleValue}>
    
    {menu? <SideMenu  /> : ""}
      <div className="p-3 flex justify-between border-b-2 border-gray-150">
       <button onClick={toggleMenu} > <Menu /></button> 
        <p className="text-md font-medium">All Notes</p>
        <button onClick={handleNote}>
         
          <WriteNote />
        </button>
      </div>
      
      <NotesComponent  noteItems={note} />
    </div>
  );
}

export default MainHeader;
