import React from "react";
import { CrossArrow3 } from "../SvgFiles";

interface infoProps  {
    notes: boolean,
    updateNotes: (note:boolean)=> void

}


const NotesInfo: React.FC<infoProps> = ({notes, updateNotes}) => {

    const changeValue = ()=>{
        updateNotes(notes);
    }
  return (
    <div className="relative ">
      <div className="fixed top-0 left-0  h-screen bg-slate-300 bg-opacity-30 flex justify-center items-center w-[100%]">
      <div className="bg-white text-md absolute top-28 border border-slate-300 left-[10%] w-[80%] rounded-md backdrop-blur md:w-[30%] md:top-44 md:left-[40%]">
        <div className="p-3 flex justify-between border-b-2 border-gray-150  w-[100%]">
          <h3 className="font-semibold">Document</h3>
          <button onClick={changeValue}>
          <CrossArrow3  />

          </button>
        </div>
    <div className="text-slate-700 leading-relaxed text-md mb-9 mt-6">
        <div className="pl-3 flex justify-between w-[95%] ">
        <p>Created</p>
        <p>time</p>
        </div>
        <div className="pl-3 flex justify-between w-[95%]">
        <p>Words</p>
        <p>428</p>
        </div>

        <div className="pl-3 flex justify-between w-[95%]">
        <p>Characters</p>
        <p>428</p>
        </div>

    </div>

      </div>
      </div>
    </div>
  );
};

export default NotesInfo;
