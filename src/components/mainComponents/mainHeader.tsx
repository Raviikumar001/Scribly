import React, { useState } from "react";
import { Menu, WriteNote } from "../SvgFiles";
import NotesComponent from "./notesComponent";
import SideMenu from "./sideMenu";
import { CrossArrow3, Down } from "../SvgFiles";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface SettingsProps{
  toggleSetting: ()=>void
  user:PropsUser;
}



function SettingsComponent(props: SettingsProps) {
  const [accountInfo, setAccountInfo] = useState(true);
  const [tools, setTools] = useState(false);
  let navigate = useNavigate();
  console.log(tools)
  const toggleaccount= ()=> {
   
      setAccountInfo(prev => {
         if(prev == accountInfo) {return true}
         else{
          return false
         }
      })
    
    
  }


    // const logout = (): any => {
    //       window.open(
    //         `${import.meta.env.VITE_REACT_APP_API_URL}/auth/logout`,
    //         "-self"
    //       );
     
    //   };
    {/* <h2 className="text-center text-gray-900">
    </h2>

    <p>{user.username}</p>
    <p>{user.email}</p>

    <button onClick={logout}>Logout</button> */}





  const toogleTools= ()=> {
    if(tools == tools)
    {
      setAccountInfo(false)
    }
    
    setTools(prev => !prev)
  }

  const handleLogout=async()=>{
    await axios.get("/v1/auth/logout", {withCredentials:true}).then((data)=>{
      console.log(data)
      if(data.data.message=="successfully logged out"){
        return navigate("/")
      }
    })
   }


  return (
    <div className="fixed top-0 left-0  h-screen bg-slate-400 bg-opacity-30 flex justify-center items-center w-[100%]">
      <div className="bg-white w-[90%] rounded-md md:w-[43%]">
        <div className="p-3 border-b-2">
          <div className="flex items-center justify-between ">
            <h3 className="text-gray-900 font-semibold">Settings</h3>
            <button onClick={props.toggleSetting}><CrossArrow3 /> </button>
          </div>
        </div>
        <div className="border-b-2 ">
          <div className="text-blue-800 flex justify-evenly mb-5 border-b-2 p-2 md:flex md:justify-evenly">
            <button className="p-1 border-b-2 focus:border-blue-900" onClick={toggleaccount}>
              Account
            </button>
            <button className="p-1 border-b-2  focus:border-blue-900 " onClick={toogleTools}>
              Tools
            </button>
          </div>


        {accountInfo? <div className="pl-3 mb-5 mr-3 md:p-[10%]">
                
                <p className="text-sm text-slate-500 md:ml-16">ACCOUNT</p>
                <div className="border border-gray-300 md:mt-3 md:m-16 md:mb-4"><p className="p-3 text-center text-gray-800 mt-1 md:">{props.user.email}</p></div>

                <div className="mt-6 border border-gray-300 bg-blue-700 text-white text-center md:m-16 md:mb-4">
                  <button onClick={handleLogout} className="p-3" >
                  {/* <Link to={`https://scriblle.onrender.com/auth/logout`}> */}
                  Log Out
                  {/* </Link> */}
                  </button></div>
                </div> :  <div className="ml-6 mb-9 mr-1 md:ml-9 ">
            <p className="text-sm font-semibold text-slate-500 md:ml-16 ">TOOLS</p>

            <button className="flex  w-[90%] justify-between border border-slate-500 p-2 mt-2 md:m-16 md:mt-2 md:w-[60%] md:mb-40">
              <div className="text-gray-500">Export Notes</div>
              <Down />
            </button>
            *Feature will be available soon
          </div>  }

          
         
         
        </div>
      </div>
    </div>
  );
}
interface NoteItem {
  _id: string;
  title: string;
  lastModified: string;
  body: string;
  dateCreated: string;
}

interface PropsUser{
  username: string,
  email:string,
  registrationDate:string,
  id?: string
}



interface Props {
  user:PropsUser;
  notes:NoteItem[]
  AddNote: ()=>void;
  activeNote:string,
  addActiveNote:React.Dispatch<React.SetStateAction<string>> 
}

function MainHeader({AddNote,notes, activeNote,addActiveNote, user}:Props) {

  const [menu, setMenu] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  



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
    <div className="relative ">
      {menu? <SideMenu toggelMenu={toggleMenu} toggleseting={toggleseting} toggleValue={toggleValue}/> : ""}
    <div onClick={toggleValue}>
    <div className="p-3 flex justify-between border-b-2 border-gray-150 "  >
       <button onClick={toggleMenu} > <Menu /></button> 
        <p className="text-md font-medium pb-1">All Notes</p>
        

          <button onClick={AddNote}>
          <WriteNote />

          </button>
        
      </div>
      
      <NotesComponent  noteItems={notes} setActiveNote={addActiveNote} activeNote={activeNote} />
    </div >
    {showSetting ?<SettingsComponent user={user} toggleSetting={toggleseting} /> : '' }   
    </div>
  );
}

export default MainHeader;
