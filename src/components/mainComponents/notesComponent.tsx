import { useState } from "react";
import { SerchIcon, CrossArrow2 } from "../SvgFiles";
import { SampleNotes } from "../../../examplePost";
import NewNote from "./Notes";

// import NewNote from "./Notes";
// import {SampleNotes} from '../../../examplePost'
// import { useState } from "react";

const NotesComponent: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [note, setNote] = useState(SampleNotes);

  const Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onMouseClick = () => {
    setInputText("");
  };

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

      {note.map((item) => (
        <NewNote notes={item.notes} />
      ))}
    </div>
  );
};

export default NotesComponent;
