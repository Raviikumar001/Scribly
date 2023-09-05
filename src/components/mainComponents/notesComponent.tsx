import { useState } from "react";
import { SerchIcon, CrossArrow2 } from "../SvgFiles";

import NewNote from "./Notes";

interface Notes{
  id: string,
  title: string,

  body: string;
  dateCreated: string
}

interface Props{
  noteItems: Notes[]
}

const NotesComponent: React.FC<Props> = ({noteItems}) => {
  const [inputText, setInputText] = useState("");
 

  const Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onMouseClick = () => {
    setInputText("");
  };

  console.log(noteItems)

  return (
    <div>
      <div className="flex justify-center">
        <button className="pl-3 pr-2">
          <SerchIcon />
        </button>

        <input
          value={inputText}
          onChange={Change}
          type="text"
          placeholder="Search all notes"
          className="w-full h-9 border border-transparent focus:outline-none"
        />
        {inputText && (
          <button onClick={onMouseClick}>
            <CrossArrow2 />
          </button>
        )}
      </div>
     <div className="overflow-y-auto h-screen">
      {noteItems.map((item) => (
        <NewNote notes={item} key={item.id} />
      ))}
      </div>       
    </div>
  );
};

export default NotesComponent;
