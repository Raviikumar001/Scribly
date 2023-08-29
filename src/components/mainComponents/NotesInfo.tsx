import React from "react";
import { CrossArrow3 } from "../SvgFiles";
const NotesInfo = () => {

  return (
    <div className="relative ">
      <div className="hidden text-md absolute top-28 border border-gray-900 left-[10%] w-[80%] rounded-md ">
        <div className="p-3 flex justify-between border-b-2 border-gray-150  w-[100%]">
          <h3 className="font-semibold">Document</h3>
          <CrossArrow3 onClick={()=> {}}/>
        </div>

        <div className="pl-3 flex justify-between w-[95%]">
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
  );
};

export default NotesInfo;
